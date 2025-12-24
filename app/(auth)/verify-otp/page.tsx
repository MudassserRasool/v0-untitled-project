'use client';

import type React from 'react';

import { AuthButton } from '@/components/auth/auth-button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function VerifyOtpPage() {
  const router = useRouter();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value[0];

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/reset-password');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-[431px]">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <div className="w-16 h-16 rounded-xl flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
        </div>

        {/* Heading */}
        <h1
          className="text-white mb-6"
          style={{
            fontFamily: 'Avenir Next, sans-serif',
            fontWeight: 600,
            fontSize: '42px',
            lineHeight: '54px',
            letterSpacing: '0%',
          }}
        >
          Enter OTP
        </h1>

        {/* Description */}
        <p
          className="text-white/80 mb-12"
          style={{
            fontFamily: 'Avenir Next, sans-serif',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '160%',
            letterSpacing: '0.4%',
          }}
        >
          Please enter your phone number to receive the OTP.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* OTP Inputs */}
          <div className="flex gap-3 justify-between">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-[60px] h-[60px] text-center text-white text-2xl font-semibold rounded-2xl outline-none transition-all focus:ring-2 focus:ring-white/40 border-2"
                style={{
                  background: 'rgba(79, 79, 79, 1)',
                  borderColor: digit
                    ? 'rgba(196, 174, 182, 0.6)'
                    : 'rgba(255, 255, 255, 0.1)',
                  fontFamily: 'Avenir Next, sans-serif',
                }}
              />
            ))}
          </div>

          {/* Verify Button */}
          <AuthButton type="submit">Verify OTP</AuthButton>

          {/* Resend Link */}
          <div className="flex justify-between items-center">
            <p
              className="text-white/80"
              style={{
                fontFamily: 'Avenir Next, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
              }}
            >
              Haven't received OTP yet?
            </p>
            <button
              type="button"
              className="text-white/60 hover:text-white transition-colors"
              style={{
                fontFamily: 'Avenir Next, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
              }}
            >
              Resend
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
