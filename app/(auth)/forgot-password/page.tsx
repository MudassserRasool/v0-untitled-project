'use client';

import type React from 'react';

import { AuthButton } from '@/components/auth/auth-button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ForgotPasswordPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/verify-otp');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-107.75">
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
          Update Password?
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
          Please enter your email to receive the OTP.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Email Input */}
          <div>
            <label
              className="block text-white/90 mb-3"
              style={{
                fontFamily: 'Avenir Next, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
              }}
            >
              Email <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              required
              className="w-[431px] h-[70px] px-6 rounded-2xl text-white placeholder:text-white/40 outline-none transition-all focus:ring-2 focus:ring-white/20 border-2 border-white/10"
              style={{
                background: 'rgba(79, 79, 79, 1)',
                fontFamily: 'Avenir Next, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
              }}
            />
          </div>

          {/* Continue Button */}
          <AuthButton type="submit">Continue</AuthButton>
        </form>
      </div>
    </div>
  );
}
