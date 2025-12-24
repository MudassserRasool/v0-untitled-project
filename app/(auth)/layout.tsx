import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Authentication - Women Self Defence",
  description: "Secure authentication for Women Self Defence app",
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: "linear-gradient(180deg, #26252A 0%, #463E4B 100%)",
      }}
    >
      {children}
    </div>
  )
}
