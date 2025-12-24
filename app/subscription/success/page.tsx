"use client"

import { useRouter } from "next/navigation"
import AppLayout from "@/components/layouts/app-layout"

export default function SuccessPage() {
  const router = useRouter()

  const handleContinue = () => {
    router.push("/dashboard")
  }

  return (
    <AppLayout>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div
          className="w-full max-w-3xl rounded-3xl p-8 sm:p-12 md:p-16 flex flex-col items-center text-center"
          style={{
            background: "linear-gradient(180deg, rgba(50, 48, 55, 0.8) 0%, rgba(42, 42, 47, 0.9) 100%)",
            border: "1px solid rgba(70, 62, 75, 0.5)",
          }}
        >
          <div className="text-6xl sm:text-7xl md:text-8xl mb-8">🎉</div>

          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-serif mb-6">Congratulations</h1>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
            You've successfully enrolled in our Basic LMS Plan. You now have access to essential learning tools designed
            to help you grow and stay on track.
          </p>

          <button
            onClick={handleContinue}
            className="bg-[#c4aeb6] text-[#18181a] px-12 py-3.5 rounded-xl text-base font-semibold hover:bg-[#d4bec6] transition-all"
          >
            Continue
          </button>
        </div>
      </div>
    </AppLayout>
  )
}
