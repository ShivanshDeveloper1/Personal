"use client"
import React, { useState } from "react";

const Page = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleCLick = async (e) => {
        setLoading(true);
        setError("");
        const res = await fetch('/api/otp/send-otp', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();
        setLoading(false);

        if (data.success) {
            setModal(true);
        } else {
            setError(data.message || "Something went wrong");
        }
    }

    const handleOtpChange = (value, index) => {
        if (!/^[0-9]?$/.test(value)) return;

        const newotp = [...otp];
        newotp[index] = value;
        setOtp(newotp);

        // Auto-focus next input
        if (value && index < 3) {
            document.getElementById(`otp-${index + 1}`).focus();
        }
    };

    const handleVerify = async () => {
        const finalOtp = otp.join("");
        setError("");

        const res = await fetch('/api/otp/verify-otp', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                otp: finalOtp,
                email: email
            })
        });

        const data = await res.json();

        if (data.success) {
            setSuccess(true);
            setTimeout(() => {
                setModal(false);
                setSuccess(false);
                setOtp(["", "", "", ""]);
            }, 2500);
        } else {
            setOtp(["", "", "", ""]);
            setError(data.message || "Invalid OTP");
        }
    };

    return (
        <main className="min-h-screen flex flex-col md:flex-row bg-gray-50">

            {/* Left Section */}
            <div className="md:w-1/2 w-full flex flex-col justify-center px-6 md:px-16 py-16">
                <h1 className="font-bold text-4xl md:text-6xl italic text-slate-900">
                    Signup Page
                </h1>
                <p className="text-gray-500 font-semibold text-xl md:text-2xl mt-6">
                    Start your journey now with us
                </p>
            </div>

            {/* Right Section */}
            <div className="md:w-1/2 w-full flex flex-col justify-center px-6 md:px-24 py-16">
                <div className="px-8 md:px-14 rounded-xl bg-white shadow-2xl py-14">
                    <p className="font-bold text-2xl mb-6 text-slate-800">Create an account</p>

                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="email" className="mb-1 text-sm font-medium text-slate-800">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="password" className="mb-1 text-sm font-medium text-slate-800">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        {error && !modal && <p className="text-red-500 text-sm">{error}</p>}

                        <button 
                            disabled={loading}
                            onClick={handleCLick} 
                            className="mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition disabled:bg-gray-400"
                        >
                            {loading ? "Sending OTP..." : "Sign Up"}
                        </button>
                    </div>
                </div>
            </div>

            {/* OTP Modal */}
            {modal && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-sm text-center">
                        {!success ? (
                            <>
                                <p className="mb-2 font-bold text-xl text-slate-800">Verify Email</p>
                                <p className="text-sm text-gray-500 mb-6">We've sent a code to your email</p>
                                
                                <div className="flex gap-3 justify-center mb-4">
                                    {otp.map((digit, index) => (
                                        <input
                                            id={`otp-${index}`}
                                            key={index}
                                            value={digit}
                                            maxLength={1}
                                            onChange={(e) => handleOtpChange(e.target.value, index)}
                                            className="w-12 h-14 text-center border-2 border-gray-200 rounded-xl focus:border-black focus:ring-0 outline-none text-2xl font-bold transition-all"
                                        />
                                    ))}
                                </div>

                                {error && <p className="text-red-500 text-sm mb-4 font-medium">{error}</p>}

                                <button
                                    onClick={handleVerify}
                                    className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:shadow-lg active:scale-95 transition-all"
                                >
                                    Verify Code
                                </button>
                                
                                <button 
                                    onClick={() => setModal(false)}
                                    className="mt-4 text-gray-400 text-sm hover:text-gray-600"
                                >
                                    Cancel
                                </button>
                            </>
                        ) : (
                            /* Success State */
                            <div className="flex flex-col items-center py-6 animate-in fade-in zoom-in duration-300">
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-slate-800">Verified!</h2>
                                <p className="text-gray-500 mt-2">Account created successfully.</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </main>
    );
};

export default Page;