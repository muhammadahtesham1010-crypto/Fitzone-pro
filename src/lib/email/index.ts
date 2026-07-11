export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  if (!process.env.RESEND_API_KEY) {
    console.log("Email not sent: RESEND_API_KEY not configured");
    console.log({ to, subject });
    return;
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "FitZone Pro <noreply@fitzonepro.com>",
        to,
        subject,
        html,
      }),
    });

    if (!res.ok) throw new Error("Failed to send email");
    return await res.json();
  } catch (error) {
    console.error("Email send failed:", error);
  }
}

export function welcomeEmailHtml(name: string) {
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <h1 style="color:#10b981">Welcome to FitZone Pro!</h1>
      <p>Hi ${name},</p>
      <p>Welcome to the FitZone Pro community! We're excited to help you on your fitness journey.</p>
      <p>Get started by completing your profile and exploring our workout programs.</p>
      <a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard" style="display:inline-block;padding:12px 24px;background:#10b981;color:white;text-decoration:none;border-radius:6px;margin:20px 0">
        Go to Dashboard
      </a>
      <p>Stay strong,<br/>The FitZone Pro Team</p>
    </div>
  `;
}
