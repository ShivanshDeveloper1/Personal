import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // Parse the incoming JSON body from the request
  const { name, email, message } = await request.json();

  // Basic validation
  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  // Create a transporter object using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail address from .env.local
      pass: process.env.GMAIL_PASS, // Your App Password from .env.local
    },
  });

  try {
    // Send the email
   await transporter.sendMail({
  from: `"${name}" <${email}>`,
  to: process.env.GMAIL_USER,
  subject: `📩 New Message from ${name} — Portfolio Contact`,
  html: `
  <div style="
    background-color:#f4f6f8;
    padding:40px 20px;
    font-family: 'Inter', Arial, sans-serif;
    color:#222;
  ">
    <div style="
      max-width:600px;
      background-color:#ffffff;
      margin:0 auto;
      border-radius:12px;
      box-shadow:0 4px 15px rgba(0,0,0,0.08);
      overflow:hidden;
      border-top:6px solid #6366f1;
    ">
      <div style="padding:30px 30px 10px;">
        <h2 style="color:#111827; margin-bottom:8px;">📬 New Portfolio Message</h2>
        <p style="font-size:14px; color:#6b7280; margin:0;">
          You just received a new contact form submission from your portfolio site.
        </p>
      </div>

      <hr style="border:none; border-top:1px solid #e5e7eb; margin:15px 0;" />

      <div style="padding:0 30px 25px;">
        <p style="margin-bottom:10px;"><strong style="color:#111827;">👤 Name:</strong> ${name}</p>
        <p style="margin-bottom:10px;"><strong style="color:#111827;">📧 Email:</strong> ${email}</p>
        <div style="margin-top:20px; padding:18px; background:#f9fafb; border-radius:8px;">
          <p style="margin:0; white-space:pre-wrap; line-height:1.6; color:#374151;">
            ${message.replace(/\n/g, "<br/>")}
          </p>
        </div>
      </div>

      <div style="background:#f9fafb; padding:20px 30px; text-align:center; font-size:12px; color:#9ca3af;">
        <p style="margin:0;">🌐 This message was sent from your <strong>Portfolio Contact Form</strong>.</p>
      </div>
    </div>
  </div>
  `,
});


    // Return a success response
    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    // console.error("Email sending error:", error);
    // Return an error response
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
