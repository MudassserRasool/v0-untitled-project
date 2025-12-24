import type React from "react"
export default function OnboardingBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: "rgba(24, 24, 26, 1)" }}>
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: "22px",
          right: "22px",
          width: "267px",
          height: "267px",
          background: "rgba(90, 76, 77, 1)",
          filter: "blur(167px)",
          opacity: 1,
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          bottom: "-20px",
          left: "-20px",
          width: "479.5px",
          height: "268.2px",
          background: "rgba(90, 76, 77, 1)",
          filter: "blur(167px)",
          opacity: 1,
        }}
      />
      {children}
    </div>
  )
}
