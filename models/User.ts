import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  phone: { type: String, unique: true },
  email: { type: String, required: true },
  state: { type: String },     // Optional initially
  district: { type: String },  // Optional initially
  
  // OTP Auth Fields
  otp: { type: String },
  otpExpiry: { type: Date },
  isVerified: { type: Boolean, default: false },
  
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
