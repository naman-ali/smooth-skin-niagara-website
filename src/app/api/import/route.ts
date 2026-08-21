import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

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

async function extractContactsFromImage(
  imageDataUrl: string,
  apiKey: string
): Promise<any[]> {
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      "HTTP-Referer":
        process.env.VERCEL_URL
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
            "You extract customer contact information from images. Return a JSON array of objects with fields: name, email, phone, message. If the image contains no contact information, return []. Do not wrap the JSON in markdown.",
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
      { status: 500 }
    );
  }

  const { images } = await request.json();
  if (!Array.isArray(images) || images.length === 0) {
    return NextResponse.json(
      { error: "No images provided" },
      { status: 400 }
    );
  }

  try {
    const results = await Promise.all(
      images.map((image: string) => extractContactsFromImage(image, apiKey))
    );
    const contacts = results.flat();
    return NextResponse.json({ contacts });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Image import failed" },
      { status: 500 }
    );
  }
}
