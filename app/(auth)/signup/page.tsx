'use client';

import { AuthButton } from '@/components/auth/auth-button';
import { AuthDivider } from '@/components/auth/auth-divider';
import { AuthHeader } from '@/components/auth/auth-header';
import { AuthInput } from '@/components/auth/auth-input';
import { SocialLoginButtons } from '@/components/auth/social-login-buttons';
import Checkbox from '@/components/ui/checkbox';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type React from 'react';
import { useState } from 'react';

export default function SignupPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
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
    router.push('/welcome');
  };

  return (
    <div>
      {/* Subtitle */}
      <AuthHeader
        title="Create Your Account"
        subtitle="Join us and get started in minutes."
      />

      {/* Form */}
      <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
        {/* Fullname Input */}
        <AuthInput
          type="text"
          placeholder="Enter your fullname"
          value={formData.fullname}
          onChange={handleInputChange}
          name="fullname"
        />

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
          placeholder="Enter your  password"
          showToggle
          value={formData.password}
          onChange={handleInputChange}
          name="password"
        />

        {/* Confirm Password Input */}
        <AuthInput
          type="password"
          placeholder="Enter your confirm password"
          showToggle
          value={formData.confirmPassword}
          onChange={handleInputChange}
          name="confirmPassword"
        />

        {/* Terms Checkbox */}
        <div className="flex items-start gap-2 sm:gap-3 pt-1 sm:pt-2">
          {/* <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 rounded border-2 border-white/30 bg-transparent checked:bg-[rgba(196,174,182,1)] focus:ring-2 focus:ring-white/20 flex-shrink-0"
              /> */}
          <Checkbox
            checked={isChecked}
            onCheckedChange={(checked) => setIsChecked(checked as boolean)}
          />
          <label
            htmlFor="terms"
            className="text-white/80 text-xs sm:text-sm leading-relaxed"
            style={{
              fontFamily: 'Avenir Next, sans-serif',
              fontWeight: 400,
            }}
          >
            By signing up, you agree to our{' '}
            <Link href="/terms" className="text-white hover:underline">
              Terms & Privacy Policy.
            </Link>
          </label>
        </div>

        {/* Signup Button */}
        <AuthButton type="submit">Signup</AuthButton>
      </form>

      {/* Login Link */}
      <p
        className="text-center mt-4 sm:mt-6 text-white/80 text-sm sm:text-base"
        style={{
          fontFamily: 'Avenir Next, sans-serif',
          fontWeight: 400,
        }}
      >
        Already have an account?{' '}
        <Link
          href="/login"
          className="text-white hover:underline font-semibold"
        >
          Log In
        </Link>
      </p>

      <AuthDivider text="Or Login with" />
      <SocialLoginButtons />
    </div>
  );
}
