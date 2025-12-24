import type React from "react"

interface PaymentCardProps {
  children: React.ReactNode
  className?: string
}

export default function PaymentCard({ children, className = "" }: PaymentCardProps) {
  return (
    <div className={`payment-card-gradient rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 ${className}`}>{children}</div>
  )
}
