import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const CANONICAL_HOST = "smoothskinniagara.com";
const WWW_HOST = `www.${CANONICAL_HOST}`;

function isLocalHost(host: string) {
  return (
    host.startsWith("localhost") ||
    host.startsWith("127.0.0.1") ||
    host.startsWith("[::1]")
  );
}

export default clerkMiddleware(async (auth, req) => {
  const host = (req.headers.get("host") ?? "").split(":")[0].toLowerCase();

  // Enforce a single canonical host in production.
  if (host === WWW_HOST) {
    const url = new URL(req.url);
    url.host = CANONICAL_HOST;
    url.protocol = "https:";
    return NextResponse.redirect(url, 308);
  }

  // Keep preview/staging deployments (e.g. *.vercel.app) out of the index
  // while production remains indexable.
  if (!isLocalHost(host) && host !== CANONICAL_HOST) {
    const res = NextResponse.next();
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
    return res;
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
    "/__clerk/:path*",
  ],
};
