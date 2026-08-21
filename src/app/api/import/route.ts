import { put } from "@vercel/blob";
import { parsePhoneNumber } from "libphonenumber-js";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

async function requireAdmin() {
  const { userId } = await auth();
  if (!userId) return null;
  return userId;
}

function parseContacts(text: string) {
  const match = text.match(/\[[\s\S]*?\]/);
  if (match) {
    try {
      return JSON.parse(match[0]);
    } catch {
      return [];
    }
  }
  try {
    return JSON.parse(text);
  } catch {
    return [];
  }
}

async function uploadImageToBlob(imageDataUrl: string) {
  const match = imageDataUrl.match(/^data:(.+);base64,(.+)$/);
  if (!match) {
    throw new Error("Invalid image data");
  }
  const [, contentType, base64] = match;
  const buffer = Buffer.from(base64, "base64");
  const extension = contentType.split("/")[1] || "png";
  const filename = `imports/${Date.now()}-${Math.random()
    .toString(36)
    .slice(2)}.${extension}`;
  const blob = await put(filename, buffer, {
    access: "public",
    contentType,
  });
  return blob.url;
}

async function extractContactsFromImage(
  imageDataUrl: string,
  apiKey: string,
): Promise<any[]> {
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      "HTTP-Referer": process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000",
      "X-Title": "Smooth Skin Niagara",
    },
    body: JSON.stringify({
      model: "openai/gpt-5.6-luna",
      messages: [
        {
          role: "system",
          content:
            "You extract customer contact information from images. Return a JSON array of objects with fields: name, email, phone. If the image contains no contact information, return []. Do not wrap the JSON in markdown.",
        },
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Extract all customer contact information from this image.",
            },
            { type: "image_url", image_url: { url: imageDataUrl } },
          ],
        },
      ],
    }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data?.error?.message || "OpenRouter request failed");
  }

  const text = data.choices?.[0]?.message?.content || "[]";
  const contacts = parseContacts(text);
  return Array.isArray(contacts) ? contacts : [];
}

export async function POST(request: NextRequest) {
  const adminId = await requireAdmin();
  if (!adminId) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "OpenRouter API key is not configured" },
      { status: 500 },
    );
  }

  const { images } = await request.json();
  if (!Array.isArray(images) || images.length === 0) {
    return NextResponse.json({ error: "No images provided" }, { status: 400 });
  }

  try {
    const created = await Promise.all(
      images.map(async (image: string) => {
        const imageUrl = await uploadImageToBlob(image);
        const extracted = await extractContactsFromImage(image, apiKey);

        const contactsToCreate = extracted.length
          ? extracted
          : [{ name: "", email: "", phone: "" }];

        return Promise.all(
          contactsToCreate.map(async (c: any) => {
            const rawPhone = c.phone || "";
            const parsed = rawPhone
              ? parsePhoneNumber(rawPhone, "US")
              : undefined;
            return prisma.contact.create({
              data: {
                name: c.name || "",
                email: c.email || "",
                phone: parsed ? parsed.format("E.164") : rawPhone || null,
                message: "",
                approved: false,
                source: "image_import",
                imageUrl,
              },
            });
          }),
        );
      }),
    );

    const contacts = created.flat();
    return NextResponse.json({ contacts }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Image import failed" },
      { status: 500 },
    );
  }
}
