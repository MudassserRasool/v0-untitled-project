'use client';

import { AuthButton } from '@/components/auth/auth-button';
import { AuthDivider } from '@/components/auth/auth-divider';
import { AuthHeader } from '@/components/auth/auth-header';
import { AuthInput } from '@/components/auth/auth-input';
import { SocialLoginButtons } from '@/components/auth/social-login-buttons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type React from 'react';
import { useState } from 'react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    router.push('/welcome');
  };

  return (
    <div>
      {/* Header */}
      <AuthHeader title="Login" subtitle="Login to continue to your account." />

      {/* Form */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Email Input */}
        <AuthInput
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
          name="email"
        />

        {/* Password Input */}
        <AuthInput
          type="password"
          placeholder="Password"
          showToggle
          value={formData.password}
          onChange={handleInputChange}
          name="password"
        />

        {/* Forget Password Link */}
        <div className="flex justify-end pt-1">
          <Link
            href="/forgot-password"
            className="text-white/80 hover:text-white transition-colors text-sm sm:text-sm"
            style={{
              fontWeight: 400,
            }}
          >
            Forget Password?
          </Link>
        </div>

        {/* Login Button */}
        <AuthButton type="submit">Login</AuthButton>
      </form>

      {/* Signup Link */}
      <p
        className="text-center mt-6 text-white/80 text-sm sm:text-base"
        style={{
          fontFamily: 'Avenir Next, sans-serif',
          fontWeight: 400,
        }}
      >
        Not a Member?{' '}
        <Link
          href="/signup"
          className="text-white hover:underline font-semibold"
        >
          Create an Account
        </Link>
      </p>

      <AuthDivider text="Or Signup with" />
      <SocialLoginButtons />
    </div>
  );
}
