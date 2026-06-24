import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get("name")?.toString() || "";
    const gender = formData.get("gender")?.toString() || "Not specified";
    const budget = formData.get("budget")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const requirements = formData.get("requirements")?.toString() || "";

    // Validate required fields
    if (!name || !email || !requirements) {
      return NextResponse.json(
        { error: "Name, email, and requirements are required." },
        { status: 400 }
      );
    }

    const user = process.env.GMAIL_USER || "xiyue030823@gmail.com";
    const pass = process.env.GMAIL_APP_PASSWORD;

    if (!pass) {
      // Fallback: log submission and return success anyway
      console.log("=== New Contact Form Submission ===");
      console.log("Name:", name);
      console.log("Gender:", gender);
      console.log("Budget (CNY):", budget);
      console.log("Email:", email);
      console.log("Requirements:", requirements);
      console.log("===================================");
      console.log("Set GMAIL_APP_PASSWORD env var to enable email delivery.");
      
      return NextResponse.redirect(
        new URL("/?sent=1&mode=log", request.url)
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"DevStudio Contact" <${user}>`,
      to: user,
      replyTo: email,
      subject: `New Project Inquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4f46e5;">New Project Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 120px;">Name</td><td style="padding: 8px 0;"><strong>${escapeHtml(name)}</strong></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Gender</td><td style="padding: 8px 0;">${escapeHtml(gender)}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Budget (CNY)</td><td style="padding: 8px 0;">${escapeHtml(budget)}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          </table>
          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
          <h3 style="color: #333;">Requirements</h3>
          <p style="color: #444; white-space: pre-wrap;">${escapeHtml(requirements)}</p>
        </div>
      `,
    });

    return NextResponse.redirect(
      new URL("/?sent=1", request.url)
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.redirect(
      new URL("/?sent=0", request.url)
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
