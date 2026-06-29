"use client";

import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export default function WhatsAppButton({
  phoneNumber,
  message = "Hello Shivansh , I would like to discuss a website project for my business.",
}: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-end">
      {/* WhatsApp Button - Link Wrapper */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center p-4 bg-green-500 text-white rounded-full shadow-2xl transition-all duration-300 ease-out hover:bg-green-600 hover:scale-110 active:scale-95 animate-bounce"
        style={{ animationDuration: '3s' }} // Slow bounce to not be annoying
      >
        <FaWhatsapp size={30} />
        
        {/* Tooltip/Bubble - visible on hover for desktop, you can tap button on mobile */}
        <span className="absolute right-full mr-4 bg-white text-gray-900 text-sm font-bold px-3 py-1 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:block">
          Chat on WhatsApp
        </span>
      </a>
      
      {/* Mobile Hint - Optional: Adds a permanent text label next to button on mobile if needed */}
      {/* Remove comments below if you want text always visible on mobile */}
      {/* <div className="absolute right-20 bg-white text-xs font-bold px-2 py-1 rounded shadow-md sm:hidden whitespace-nowrap">
        Message Me
      </div> */}
    </div>
  );
}