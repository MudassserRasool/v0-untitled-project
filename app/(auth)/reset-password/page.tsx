'use client';

import type React from 'react';

import { AuthButton } from '@/components/auth/auth-button';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ResetPasswordPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/success');
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
          Reset Password
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
          Please enter your new password to reset.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* New Password Input */}
          <div>
            <label
              className="block text-white/90 mb-3"
              style={{
                fontFamily: 'Avenir Next, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
              }}
            >
              New Password <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter new password"
                required
                className="w-107.75 h-17.5 px-6 pr-16 rounded-2xl text-white placeholder:text-white/40 outline-none transition-all focus:ring-2 focus:ring-white/20 border-2 border-white/10"
                style={{
                  background: 'rgba(79, 79, 79, 1)',
                  fontFamily: 'Avenir Next, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                style={{
                  border: '1.5px solid rgba(5, 9, 20, 0.6)',
                  borderRadius: '6px',
                  padding: '8px',
                }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Confirm Password Input */}
          <div>
            <label
              className="block text-white/90 mb-3"
              style={{
                fontFamily: 'Avenir Next, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
              }}
            >
              Confirm Password <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm new password"
                required
                className="w-[431px] h-[70px] px-6 pr-16 rounded-2xl text-white placeholder:text-white/40 outline-none transition-all focus:ring-2 focus:ring-white/20 border-2 border-white/10"
                style={{
                  background: 'rgba(79, 79, 79, 1)',
                  fontFamily: 'Avenir Next, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                }}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                style={{
                  border: '1.5px solid rgba(5, 9, 20, 0.6)',
                  borderRadius: '6px',
                  padding: '8px',
                }}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Reset Button */}
          <div className="pt-6">
            <AuthButton type="submit">Reset Password</AuthButton>
          </div>
        </form>
      </div>
    </div>
  );
}
