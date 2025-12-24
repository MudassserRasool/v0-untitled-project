"use client"

import { useRouter } from "next/navigation"
import AppLayout from "@/components/layouts/app-layout"
import styles from "./checkout.module.css"
import { ArrowRight, Tag } from "lucide-react"

export default function CheckoutPage() {
  const router = useRouter()

  const handleCheckout = () => {
    router.push("/subscription/payment")
  }

  return (
    <AppLayout>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Badge */}
          <div className={styles.badge}>Monthly</div>

          {/* Title */}
          <h1 className={styles.title}>Basic Plan - Subscription</h1>

          {/* Price */}
          <div className={styles.priceSection}>
            <h2 className={styles.priceLabel}>Just $39/month</h2>
          </div>

          {/* Description */}
          <p className={styles.description}>
            Kickstart your learning with essential course access, step-by-step guidance, and flexible practice options.
            Everything you need to begin your transformation. Subscription can be cancel any time
          </p>

          {/* Promo Code */}
          <div className={styles.promoSection}>
            <label className={styles.promoLabel}>Have a promo code?</label>
            <div className={styles.promoInputWrapper}>
              <Tag className={styles.promoIcon} />
              <input type="text" placeholder="Enter Your Promo Code" className={styles.promoInput} />
            </div>
          </div>

          {/* Checkout Button */}
          <button onClick={handleCheckout} className={styles.checkoutButton}>
            Checkout
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </AppLayout>
  )
}
