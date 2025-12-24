export default function DashboardPage() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "rgba(24, 24, 26, 1)" }}>
      <div className="text-center">
        <h1
          className="text-white mb-4"
          style={{
            fontFamily: "Avenir Next, sans-serif",
            fontWeight: 600,
            fontSize: "42px",
          }}
        >
          Welcome to Train F1
        </h1>
        <p
          className="text-white/70"
          style={{
            fontFamily: "Avenir Next, sans-serif",
            fontWeight: 400,
            fontSize: "18px",
          }}
        >
          Onboarding completed successfully!
        </p>
      </div>
    </div>
  )
}
