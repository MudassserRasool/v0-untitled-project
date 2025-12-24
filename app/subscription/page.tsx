"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import AppLayout from "@/components/layouts/app-layout"

export default function SubscriptionPage() {
  const router = useRouter()
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  const plans = [
    {
      name: "FREE",
      price: 0,
      buttonText: "START FREE TRAIL",
      buttonVariant: "outline" as const,
      features: ["Access to all core curriculum", "Community access", "Practice logging", "Resource library"],
    },
    {
      name: "Basic",
      price: 49,
      buttonText: "Subscribe",
      buttonVariant: "solid" as const,
      features: ["Access to all core curriculum", "Community access", "Practice logging", "Resource library"],
    },
    {
      name: "Premium",
      price: 98,
      buttonText: "Subscribe",
      buttonVariant: "solid" as const,
      popular: true,
      features: [
        "Access to all core curriculum",
        "Community access",
        "Practice logging",
        "Resource library",
        "Unlimited live classes",
        "Personalized training schedules",
        "Priority customer support",
      ],
    },
    {
      name: "Elite",
      price: 199,
      buttonText: "Subscribe",
      buttonVariant: "solid" as const,
      features: [
        "Everything in Premium",
        "1-on-1 coaching sessions (1/month)",
        "Advanced certifications",
        "Early access to new content",
      ],
    },
  ]

  const handleSubscribe = (planName: string) => {
    router.push("/subscription/checkout")
  }

  return (
    <AppLayout>
      <div className="flex flex-col items-center min-h-screen px-4 py-6 sm:py-8 md:py-12 lg:py-16 mx-0">
        <div className="w-full max-w-7xl mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-2">Train F1</h1>
        </div>

        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-center mb-6 sm:mb-8 lg:mb-12 px-4 max-w-4xl leading-tight">
          Transparent Plans for Every Learning Journey
        </h2>

        <div className="flex items-center gap-0 bg-[#3a3a3f] rounded-full p-1 mb-8 sm:mb-12 lg:mb-16">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-6 sm:px-8 md:px-12 py-2 sm:py-2.5 rounded-full text-sm sm:text-base transition-all ${
              billingCycle === "monthly" ? "bg-[#4a4a4f] text-white font-medium" : "text-[#a3a3a3] hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`px-6 sm:px-8 md:px-12 py-2 sm:py-2.5 rounded-full text-sm sm:text-base transition-all ${
              billingCycle === "yearly" ? "bg-[#4a4a4f] text-white font-medium" : "text-[#a3a3a3] hover:text-white"
            }`}
          >
            Yearly
          </button>
        </div>

        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 px-2 sm:px-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 flex flex-col"
              style={{
                background: plan.popular ? "linear-gradient(180deg, #26252A 0%, #463E4B 100%)" : "#2a2a2f",
                border: plan.popular ? "1px solid rgba(198, 126, 127, 0.3)" : "1px solid rgba(60, 60, 65, 1)",
              }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 py-1.5 rounded-full sm:px-3 mx-0 my-[-14px]">
                  <span className="text-[#18181a] text-xs sm:text-sm font-medium tracking-wide">MOST POPULAR</span>
                </div>
              )}

              <h3 className="text-white text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">{plan.name}</h3>

              <div className="flex items-baseline mb-6 sm:mb-8">
                <span className="text-white text-lg sm:text-xl">$</span>
                <span className="text-white text-5xl sm:text-6xl lg:text-7xl font-light leading-none">
                  {plan.price.toString().padStart(2, "0")}
                </span>
                <span className="text-white/60 text-base sm:text-lg ml-2">/mo</span>
              </div>

              <button
                onClick={() => handleSubscribe(plan.name)}
                className={`w-full py-3 sm:py-3.5 rounded-xl sm:rounded-2xl text-sm sm:text-base font-medium mb-6 sm:mb-8 transition-all ${
                  plan.buttonVariant === "outline"
                    ? "bg-transparent border-2 border-[#c4aeb6] text-[#c4aeb6] hover:bg-[#c4aeb6] hover:text-[#18181a]"
                    : "bg-[#c4aeb6] text-[#18181a] hover:bg-[#d4bec6]"
                }`}
              >
                {plan.buttonText}
              </button>

              <ul className="space-y-3 sm:space-y-4 flex-grow">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                    <span className="text-white/90 text-sm sm:text-base leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  )
}
