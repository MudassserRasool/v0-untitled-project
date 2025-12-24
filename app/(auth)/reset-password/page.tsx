'use client';

import type React from 'react';

import { AuthButton } from '@/components/auth/auth-button';
import { AuthInput } from '@/components/auth/auth-input';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ResetPasswordPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
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
          {/* Password Input */}
          <AuthInput
            type="password"
            placeholder="Enter your  new password"
            showToggle
            value={formData.password}
            onChange={handleInputChange}
            name="password"
          />

          {/* Confirm Password Input */}
          <AuthInput
            type="password"
            placeholder="Confirm your new password"
            showToggle
            value={formData.confirmPassword}
            onChange={handleInputChange}
            name="confirmPassword"
          />

          {/* Reset Button */}
          <div className="pt-6">
            <AuthButton type="submit">Reset Password</AuthButton>
          </div>
        </form>
      </div>
    </div>
  );
}
