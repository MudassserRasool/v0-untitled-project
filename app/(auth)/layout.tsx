import { AuthImage } from '@/components/auth/auth-image';
import type { Metadata } from 'next';
import type React from 'react';

export const metadata: Metadata = {
  title: 'Authentication - Women Self Defence',
  description: 'Secure authentication for Women Self Defence app',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: 'linear-gradient(180deg, #26252A 0%, #463E4B 100%)',
      }}
    >
      <div className="flex min-h-screen">
        {/* Left side - Image */}
        <AuthImage />

        {/* Right side - Form */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 md:pl-2 md:pr-8 py-6 sm:py-8">
          <div className="w-full max-w-120">{children}</div>
        </div>
      </div>
    </div>
  );
}
