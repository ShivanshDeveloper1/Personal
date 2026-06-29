// app/api/send-otp/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import User from "@/models/User";
import dbConnect from "@/lib/db";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const { phone, email } = body;

    if (!email || !phone) {
      return NextResponse.json({ success: false, message: "Email and Phone required" }, { status: 400 });
    }

    // 1. Generate 6-digit OTP and set an expiry (e.g., 5 minutes)
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000); 

    // 2. Upsert to MongoDB (Creates new unverified user, or updates existing)
    await User.findOneAndUpdate(
      { phone },
      { 
        email, 
        otp, 
        otpExpiry, 
        isVerified: false 
      },
      { upsert: true, new: true }
    );

    // 3. Send Email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Bulbul Predictor" <${process.env.MY_GMAIL}>`,
      to: email,
      subject: "🚀 Verify Your Identity - Bulbul Predictor",
      html: `
        <div style="font-family: sans-serif; border: 1px solid #e2e8f0; border-radius: 16px; padding: 32px; max-width: 400px; margin: auto;">
          <h2 style="color: #2563eb; text-align: center;">Hii! Please verify your number</h2>
          <div style="background-color: #eff6ff; border: 1px dashed #2563eb; border-radius: 12px; padding: 20px; text-align: center; margin: 24px 0;">
            <span style="font-size: 32px; font-weight: bold; letter-spacing: 8px; color: #1e40af;">${otp}</span>
          </div>
          <p style="text-align: center;">This code will expire in 5 minutes.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "OTP sent successfully" });

  } catch (error) {
    console.error("Sending failed:", error);
    return NextResponse.json({ success: false, message: "Failed to send OTP" }, { status: 500 });
  }
}