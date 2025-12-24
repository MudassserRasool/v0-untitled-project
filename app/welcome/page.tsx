'use client';

import { AuthButton } from '@/components/auth/auth-button';
import AppLayout from '@/components/layouts/app-layout';
import { useRouter } from 'next/navigation';

export default function WelcomePage() {
  const router = useRouter();

  const handleBegin = () => {
    router.push('/onboarding');
  };

  return (
    <AppLayout>
      <div className="flex flex-col items-center justify-between min-h-screen px-4 py-8 sm:py-12 md:py-16">
        {/* Center Content */}
        <div className="flex flex-col items-center justify-center flex-1 w-full max-w-md space-y-6 sm:space-y-8 md:space-y-12">
          {/* F1 Logo */}
          <div
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center"
            style={{
              border: '2px solid rgba(255, 255, 255, 0.3)',
              background: 'rgba(255, 255, 255, 0.05)',
            }}
          >
            <span
              className="text-white text-xl sm:text-2xl md:text-3xl"
              style={{
                fontFamily: 'Avenir Next, sans-serif',
                fontWeight: 600,
              }}
            >
              F1
            </span>
          </div>

          {/* Main Heading */}
          <h2
            className="text-white text-3xl sm:text-4xl md:text-5xl text-center"
            style={{
              fontFamily: 'Avenir Next, sans-serif',
              fontWeight: 600,
              lineHeight: '1.2',
            }}
          >
            You Belong Here.
          </h2>

          {/* Subtext */}
          <p
            className="text-[#a3a3a3] text-sm sm:text-base md:text-lg text-center  "
            style={{
              fontFamily: 'Avenir Next, sans-serif',
              fontWeight: 400,
              lineHeight: '1.5',
            }}
          >
            Lets discover your path together it only takes a few minutes
          </p>

          {/* Begin Button */}
          <AuthButton onClick={handleBegin}>Begin</AuthButton>
        </div>

        {/* Bottom Spacer */}
        <div className="w-full h-8 sm:h-12" />
      </div>
    </AppLayout>
  );
}
