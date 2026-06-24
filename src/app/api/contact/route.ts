import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get("name")?.toString() || "";
    const gender = formData.get("gender")?.toString() || "Not specified";
    const budget = formData.get("budget")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const requirements = formData.get("requirements")?.toString() || "";

    if (!name || !email || !requirements) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    console.log("=== New Contact ===");
    console.log("Name:", name);
    console.log("Gender:", gender);
    console.log("Budget (CNY):", budget);
    console.log("Email:", email);
    console.log("Requirements:", requirements.slice(0, 100));
    console.log("===================");

    const pass = process.env.GMAIL_APP_PASSWORD;

    if (pass) {
      const nodemailer = await import("nodemailer");
      const user = process.env.GMAIL_USER || "xiyue030823@gmail.com";
      const transporter = nodemailer.default.createTransport({
        service: "gmail",
        auth: { user, pass },
      });

      await transporter.sendMail({
        from: `"DevStudio Contact" <${user}>`,
        to: user,
        replyTo: email,
        subject: `New Project Inquiry from ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px;">
            <h2 style="color: #4f46e5;">New Project Inquiry</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #666; width: 120px;">Name</td><td><strong>${escapeHtml(name)}</strong></td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Gender</td><td>${escapeHtml(gender)}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Budget (CNY)</td><td>${escapeHtml(budget)}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
            </table>
            <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
            <h3>Requirements</h3>
            <p style="white-space: pre-wrap;">${escapeHtml(requirements)}</p>
          </div>
        `,
      });
    }

    // Redirect back to home with success flag
    const url = new URL("/?sent=1", request.url);
    return NextResponse.redirect(url, 302);
  } catch (error) {
    console.error("Contact error:", error);
    const url = new URL("/?sent=0", request.url);
    return NextResponse.redirect(url, 302);
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
