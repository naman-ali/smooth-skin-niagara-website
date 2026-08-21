import { auth } from "@clerk/nextjs/server";
import { get } from "@vercel/blob";
import { type NextRequest, NextResponse } from "next/server";

async function requireAdmin() {
  const { userId } = await auth();
  return userId || null;
}

export async function GET(request: NextRequest) {
  const adminId = await requireAdmin();
  if (!adminId) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const pathname = request.nextUrl.searchParams.get("pathname");
  if (!pathname) {
    return NextResponse.json({ error: "Missing pathname" }, { status: 400 });
  }

  const result = await get(pathname, {
    access: "private",
    storeId: process.env.BLOB_SMOOTH_SKIN_NIAGARA_STORE_ID,
    token: process.env.BLOB_SMOOTH_SKIN_NIAGARA_READ_WRITE_TOKEN,
  });
  if (result?.statusCode !== 200 || !result.stream) {
    return new NextResponse("Not found", { status: 404 });
  }

  return new NextResponse(result.stream, {
    headers: {
      "Content-Type": result.blob.contentType,
      "X-Content-Type-Options": "nosniff",
    },
  });
}
