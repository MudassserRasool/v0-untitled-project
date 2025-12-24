"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { Check } from "lucide-react"

export default function SuccessPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-[431px] text-center">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <div className="w-16 h-16 rounded-xl flex items-center justify-center">
            <Image src="/logo.png" alt="Logo" width={64} height={64} className="object-contain" />
          </div>
        </div>

        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center"
            style={{
              background: "rgba(196, 174, 182, 1)",
              boxShadow: "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Check size={48} className="text-black" strokeWidth={3} />
          </div>
        </div>

        {/* Heading */}
        <h1
          className="text-white mb-6"
          style={{
            fontFamily: "Avenir Next, sans-serif",
            fontWeight: 600,
            fontSize: "42px",
            lineHeight: "54px",
            letterSpacing: "0%",
          }}
        >
          Password Reset Successfully!
        </h1>

        {/* Description */}
        <p
          className="text-white/80 mb-12"
          style={{
            fontFamily: "Avenir Next, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "160%",
            letterSpacing: "0.4%",
          }}
        >
          Your password has been reset successfully. You can now login with your new password.
        </p>

        {/* Continue Button */}
        <button
          onClick={() => router.push("/login")}
          className="w-[431px] h-[52px] rounded-xl text-black font-semibold transition-all hover:opacity-90 active:scale-[0.98]"
          style={{
            background: "rgba(196, 174, 182, 1)",
            boxShadow: "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
            fontFamily: "Avenir Next, sans-serif",
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
          Continue to Login
        </button>
      </div>
    </div>
  )
}
