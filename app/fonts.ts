import { Geist, Geist_Mono, Anton } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});