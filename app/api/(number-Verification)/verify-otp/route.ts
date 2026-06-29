// app/api/verify-otp/route.ts
import { NextResponse } from "next/server";
import User from "@/models/User";
import dbConnect from "@/lib/db";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { phone, otp, state, district } = await req.json();

    // 1. Find the user in the database
    const user = await User.findOne({ phone });

    if (!user) {
      return NextResponse.json({ success: false, message: "User not found. Please request OTP again." }, { status: 404 });
    }

    // 2. Validate the OTP
    if (user.otp !== otp) {
      return NextResponse.json({ success: false, message: "Invalid OTP" }, { status: 400 });
    }

    // 3. Validate Expiry time
    if (new Date() > user.otpExpiry) {
      return NextResponse.json({ success: false, message: "OTP has expired. Please request a new one." }, { status: 400 });
    }

    // 4. OTP is valid! Save the rest of the details and clear the OTP
    user.state = state;
    user.district = district;
    user.isVerified = true;
    user.otp = undefined;       // Remove OTP so it can't be reused
    user.otpExpiry = undefined; // Remove expiry
    
    await user.save();

    return NextResponse.json({ success: true, message: "Verified and Saved!" });

  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}