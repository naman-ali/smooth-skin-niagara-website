import { Resend } from "resend";
import { getTreatmentDefinition } from "@/lib/client-form/schema";
import { formatPhoneDisplay } from "@/lib/phone";
import type { ClientFormSubmission } from "@/lib/client-form/submission";

const globalForResend = globalThis as unknown as {
  resend?: Resend;
};

function getResend(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  globalForResend.resend ??= new Resend(apiKey);
  return globalForResend.resend;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string): string {
  return `<tr>
    <td style="padding:6px 12px 6px 0;color:#666;font-size:13px;vertical-align:top;white-space:nowrap;">${label}</td>
    <td style="padding:6px 0;font-size:14px;">${value}</td>
  </tr>`;
}

export type EmailResult = { ok: true } | { ok: false; error: string };

/**
 * Notify the owner that a client intake/waiver form was completed.
 * Never throws and returns a result instead — a failed email must not
 * break form submission.
 */
export async function sendWaiverCompletedNotification(
  submission: ClientFormSubmission,
  submissionId: string,
): Promise<EmailResult> {
  const resend = getResend();
  if (!resend) return { ok: false, error: "RESEND_API_KEY is not configured" };

  const from = process.env.NOTIFICATION_FROM_EMAIL;
  const to = process.env.OWNER_NOTIFICATION_EMAIL;
  if (!from)
    return { ok: false, error: "NOTIFICATION_FROM_EMAIL is not configured" };
  if (!to)
    return { ok: false, error: "OWNER_NOTIFICATION_EMAIL is not configured" };

  const clientName =
    `${submission.client.firstName} ${submission.client.lastName}`.trim();
  const treatments = submission.selectedTreatments
    .map((id) => getTreatmentDefinition(id)?.name ?? id)
    .join(", ");
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/+$/, "");
  const adminUrl = siteUrl
    ? `${siteUrl}/admin/client-form/${submissionId}`
    : `/admin/client-form/${submissionId}`;

  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:560px;">
      <h2 style="margin:0 0 16px;font-size:18px;">New waiver form submitted</h2>
      <table style="border-collapse:collapse;">
        ${row("Name", escapeHtml(clientName))}
        ${row("Email", escapeHtml(submission.client.email))}
        ${row("Phone", escapeHtml(formatPhoneDisplay(submission.client.phone) || "-"))}
        ${row("Treatments", escapeHtml(treatments || "-"))}
        ${row("Submitted", escapeHtml(new Date(submission.submittedAt).toLocaleString("en-CA")))}
      </table>
      <p style="margin:20px 0 0;">
        <a href="${escapeHtml(adminUrl)}" style="display:inline-block;background:#667052;color:#fff;padding:10px 18px;border-radius:8px;text-decoration:none;font-size:14px;">
          View submission in admin
        </a>
      </p>
    </div>`;

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      subject: `New waiver form — ${clientName}`,
      html,
    });
    if (error) {
      console.error("Waiver notification email failed:", error);
      return { ok: false, error: error.message };
    }
    return { ok: true };
  } catch (error) {
    console.error("Waiver notification email error:", error);
    return { ok: false, error: String(error) };
  }
}
