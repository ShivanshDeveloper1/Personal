import dbConnect from "@/lib/db"
import User from "@/models/User";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


export  async function POST(req){

    try {
        await dbConnect()

        const {email, password } = await  req.json()

            if (!email || !password) {
              return NextResponse.json({ success: false, message: "Email and Phone required" }, { status: 400 });
            }

            const otp = Math.floor(1000 + Math.random() * 9000).toString()
            const otpExpiry = new Date(Date.now() + 5 *60 * 1000)

            await User.findOneAndUpdate(
                {email},
                {
                    email , password , otp , otpExpiry , isVerified:false
                }, {upsert:true , new:true}

            )

            const transporter = nodemailer.createTransport({
                service:"gmail",
                auth:{
                    user:process.env.GMAIL_USER,
                    pass:process.env.GMAIL_PASS,
                }

            })

            const mailoptions={
                from:`Shivansh Web Develoeper ${process.env.MY_GMAIL}`,
                to:email,
                html:`
                <div style="font-family: sans-serif; border:1px solid #e2e8f0; border-radius:16px; padding:32px ; max-width: 400px;  margin:auto ; 
                ">
                <h2 style="color: #2563eb"; text-align:center> Hii! Please verify your Email </h2>
                 <div style="background-color: #eff6ff; border: 1px dashed #2563eb; border-radius: 12px; padding: 20px; text-align: center; margin: 24px 0;">
            <span style="font-size: 32px; font-weight: bold; letter-spacing: 8px; color: #1e40af;">${otp}</span>
          </div>
          <p style="text-align: center;">This code will expire in 5 minutes.</p>
        </div>
                </div>
                `
            }

            await transporter.sendMail(mailoptions)

             return NextResponse.json({ success: true, message: "OTP sent successfully" });
    } catch (error) {
        console.log(error)
        
    }
}