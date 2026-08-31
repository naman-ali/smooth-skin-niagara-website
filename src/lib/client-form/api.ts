import type { FormValues } from "./form-values";

export class ClientFormSubmitError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ClientFormSubmitError";
  }
}

/**
 * Submits the completed intake form to the backend. The server rebuilds
 * and re-validates the submission independently (see
 * `src/app/api/client-form/route.ts`), so this is safe to call with raw
 * react-hook-form values.
 */
export async function submitClientForm(
  values: FormValues,
): Promise<{ id: string }> {
  const response = await fetch("/api/client-form", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ values }),
  });

  if (!response.ok) {
    const message =
      response.status === 422
        ? "Some answers are missing or invalid. Please review the form and try again."
        : "We couldn't submit your form. Please check your connection and try again.";
    throw new ClientFormSubmitError(message);
  }

  return response.json();
}
