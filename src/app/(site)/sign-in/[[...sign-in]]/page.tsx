import { SignIn } from "@clerk/nextjs";

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
