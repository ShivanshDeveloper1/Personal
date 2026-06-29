import dbConnect from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export  async function POST(req) {
  try {
    await dbConnect();

    const { otp, email } = await req.json();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    // ✅ Check OTP
    if (user.otp !== otp) {
      return NextResponse.json(
        { success: false, message: "Invalid OTP" },
        { status: 400 }
      );
    }

    // ✅ Check expiry
    if (new Date() > user.otpExpiry) {
      return NextResponse.json(
        { success: false, message: "OTP expired" },
        { status: 400 }
      );
    }

    // ✅ Mark verified
    user.isVerified = true;
    user.otp = undefined;
    user.otpExpiry = undefined;

    await user.save();

    return NextResponse.json({
      success: true,
      message: "Verified successfully"
    });

  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}