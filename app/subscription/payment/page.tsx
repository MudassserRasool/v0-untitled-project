"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import AppLayout from "@/components/layouts/app-layout"
import styles from "./payment.module.css"
import { ChevronLeft, CreditCard, Landmark, Info } from "lucide-react"

export default function PaymentPage() {
  const router = useRouter()
  const [paymentMethod, setPaymentMethod] = useState<"card" | "bank">("card")
  const [saveBilling, setSaveBilling] = useState(true)
  const [saveInfo, setSaveInfo] = useState(true)

  const handleSubscribe = () => {
    router.push("/subscription/success")
  }

  return (
    <AppLayout showGradients={false}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className="text-white text-2xl sm:text-3xl font-semibold text-center mb-6">Train F1</h1>
          <button onClick={() => router.back()} className={styles.backButton}>
            <ChevronLeft size={20} />
            Back
          </button>
        </div>

        <div className={styles.content}>
          <div className={styles.orderSummary}>
            <div className={styles.summaryHeader}>
              <div className={styles.summarySubtitle}>Try our Basic Membership Plan</div>
              <h2 className={styles.summaryTitle}>Basic</h2>
              <div className={styles.summaryPrice}>Then $39.00 per month.</div>
            </div>

            <div className={styles.summaryDetails}>
              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>Basic Membership</span>
                <span className={styles.summaryValue}>
                  <div className={styles.summaryValueMuted}>Only for 30 days</div>
                  <div style={{ fontSize: "0.8125rem", color: "rgba(163, 163, 163, 1)" }}>
                    11 December 2025 to 11 January 2026
                  </div>
                </span>
              </div>

              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>Subtotal</span>
                <span className={styles.summaryValue}>$39.00</span>
              </div>

              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>
                  Tax <Info size={14} />
                </span>
                <span className={styles.summaryValueMuted}>Enter address to calculate</span>
              </div>

              <div className={styles.summaryRow} style={{ borderBottom: "none" }}>
                <span className={styles.summaryLabel}>Total after trial</span>
                <span className={styles.summaryValue}>$39.00</span>
              </div>

              <div className={styles.summaryTotal}>
                <span className={styles.summaryTotalLabel}>Total due today</span>
                <span className={styles.summaryTotalValue}>$39.00</span>
              </div>
            </div>
          </div>

          <div className={styles.paymentSection}>
            <h2 className={styles.paymentTitle}>Payment method</h2>

            <div className={styles.paymentMethodCard}>
              <div className={styles.paymentOption} onClick={() => setPaymentMethod("card")}>
                <div className={`${styles.radio} ${paymentMethod === "card" ? styles.radioSelected : ""}`} />
                <span className={styles.paymentOptionLabel}>
                  <CreditCard size={18} />
                  Card
                </span>
              </div>

              {paymentMethod === "card" && (
                <div className={styles.cardForm}>
                  <label className={styles.cardFormLabel}>Card information</label>

                  <div className={styles.cardInputWrapper}>
                    <div className={styles.cardInputRow}>
                      <div style={{ position: "relative" }}>
                        <input type="text" placeholder="1234 1234 1234 1234" className={styles.cardInput} />
                        <div className={styles.cardLogos}>
                          <img src="/visa-application-process.png" alt="VISA" style={{ height: "14px", width: "auto" }} />
                          <img
                            src="/mastercard-logo-abstract.png"
                            alt="Mastercard"
                            style={{ height: "14px", width: "auto" }}
                          />
                          <img src="/abstract-credit-card-design.png" alt="AMEX" style={{ height: "14px", width: "auto" }} />
                          <img
                            src="/classic-american-diner.png"
                            alt="Diners"
                            style={{ height: "14px", width: "auto" }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className={styles.cardInputRowSplit}>
                      <input type="text" placeholder="MM / YY" className={styles.cardInput} />
                      <div style={{ position: "relative" }}>
                        <input type="text" placeholder="CVC" className={styles.cardInput} />
                        <div style={{ position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)" }}>
                          <CreditCard size={16} className="text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.inlineCheckbox}>
                    <input
                      type="checkbox"
                      checked={saveBilling}
                      onChange={(e) => setSaveBilling(e.target.checked)}
                      className={styles.checkboxInput}
                    />
                    <label className={styles.checkboxLabel}>Billing info is same as shipping</label>
                  </div>
                </div>
              )}

              <div className={styles.paymentOption} onClick={() => setPaymentMethod("bank")}>
                <div className={`${styles.radio} ${paymentMethod === "bank" ? styles.radioSelected : ""}`} />
                <span className={styles.paymentOptionLabel}>
                  <Landmark size={18} />
                  Bank
                </span>
              </div>
            </div>

            <div className={styles.saveInfoCard}>
              <input
                type="checkbox"
                checked={saveInfo}
                onChange={(e) => setSaveInfo(e.target.checked)}
                className={styles.checkboxInput}
              />
              <div>
                <label className={styles.checkboxLabel}>Save my information for faster future purchases</label>
                <div className={styles.checkboxDescription}>
                  Pay securely at woman self defence platform and everywhere
                </div>
              </div>
            </div>

            <button onClick={handleSubscribe} className={styles.subscribeButton}>
              Subscribe
            </button>

            <div className={styles.footer}>
              <p className={styles.footerText}>
                By subscribing, you authorize Woman self defence platform to charge you according to the terms until you
                cancel.
              </p>
              <div className={styles.footerLinks}>
                <span className={styles.footerText}>
                  Powered by <span className={styles.stripeLogo}>stripe</span>
                </span>
                <span style={{ color: "rgba(163, 163, 163, 1)" }}>|</span>
                <a href="#" className={styles.footerLink}>
                  Terms
                </a>
                <a href="#" className={styles.footerLink}>
                  Privacy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
