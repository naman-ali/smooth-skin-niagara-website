import { SignUp } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export function generateStaticParams() {
  return [{ "sign-up": [] }];
}

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignUp
        fallbackRedirectUrl="/post-login"
        forceRedirectUrl="/post-login"
        signInUrl="/sign-in"
      />
    </div>
  );
}
