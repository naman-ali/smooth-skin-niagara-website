import { SignIn } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export function generateStaticParams() {
  return [{ "sign-in": [] }];
}

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignIn
        fallbackRedirectUrl="/post-login"
        forceRedirectUrl="/post-login"
        signUpUrl="/sign-up"
      />
    </div>
  );
}
