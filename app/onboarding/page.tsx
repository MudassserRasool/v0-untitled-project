'use client';

import AppLayout from '@/components/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { GraduationCap, TrendingUp, Users } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// Define onboarding steps data structure
const onboardingSteps = [
  {
    step: 1,
    title: 'Welcome',
    heading: 'Welcome to Train F1',
    description:
      'your are about to begin a journey, that will transform how do u think about your own life safety and capability.',
    type: 'welcome' as const,
    features: [
      {
        icon: GraduationCap,
        label: 'Expert-led curriculum',
      },
      {
        icon: Users,
        label: 'Supportive Community',
      },
      {
        icon: TrendingUp,
        label: 'Personalized journey',
      },
    ],
    buttonText: 'Get started',
  },
  {
    step: 2,
    title: 'Pathway Selection',
    heading: 'What brings you to Train F1?',
    description: '',
    type: 'question' as const,
    options: [
      'I Want To Feel Safer – Firearms May Or May Not Be Part Of That',
      "I'm Curious About Firearms But Haven't Decided",
      "I'm Ready To Buy My First Firearm",
      "I Own A Firearm But Haven't Really Used It",
      "I'm Experienced And Looking To Improve",
    ],
    buttonText: 'Continue',
  },
  {
    step: 3,
    title: 'Experience Level',
    heading: "What's your current experience level?",
    description: '',
    type: 'question' as const,
    options: [
      'Complete Beginner – Never Handled a Firearm',
      "I've Tried Shooting Once or Twice",
      'I Own a Gun But Rarely Practice',
      'Regular Shooter Looking to Improve Skills',
      'Advanced – Interested in Specialized Training',
    ],
    buttonText: 'Continue',
  },
  {
    step: 4,
    title: 'Experience Level',
    heading: "What's your current experience level?",
    description: '',
    type: 'question' as const,
    options: [
      'Complete Beginner – Never Handled a Firearm',
      "I've Tried Shooting Once or Twice",
      'I Own a Gun But Rarely Practice',
      'Regular Shooter Looking to Improve Skills',
      'Advanced – Interested in Specialized Training',
    ],
    buttonText: 'Continue',
  },
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const router = useRouter();

  const step = onboardingSteps[currentStep];

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
    } else {
      // Navigate to main app after last step
      router.push('/dashboard');
    }
  };

  return (
    <AppLayout>
      {/* Step indicator */}
      <div className="text-center mb-12">
        <p
          className="text-[#C9A17B]"
          style={{
            fontFamily: 'Avenir Next, sans-serif',
            fontWeight: 500,
            fontSize: '18px',
          }}
        >
          Step {step.step}: {step.title}
        </p>
      </div>

      {/* Content Container */}
      <div className="flex items-center justify-center px-4 pb-20">
        <div
          className="w-full max-w-255 rounded-3xl p-12"
          style={{
            background: 'linear-gradient(180deg, #26252A 0%, #463E4B 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <div className="mb-12">
            <div className="flex gap-2">
              {onboardingSteps.map((_, index) => (
                <div
                  key={index}
                  className="h-1 flex-1 rounded-full transition-all duration-500"
                  style={{
                    background:
                      index < currentStep
                        ? 'rgba(196, 174, 182, 1)'
                        : 'rgba(255, 255, 255, 0.1)',
                  }}
                />
              ))}
            </div>
          </div>

          {step.type === 'welcome' ? (
            <div className="text-center">
              <h2
                className="text-white mb-6"
                style={{
                  fontFamily: 'Avenir Next, sans-serif',
                  fontWeight: 600,
                  fontSize: '42px',
                  lineHeight: '54px',
                }}
              >
                {step.heading}
              </h2>

              <p
                className="text-white/70 mb-12 max-w-2xl mx-auto"
                style={{
                  fontFamily: 'Avenir Next, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '160%',
                }}
              >
                {step.description}
              </p>

              {/* Features */}
              <div className="flex justify-center gap-12 mb-12">
                {step.features?.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-4"
                    >
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{
                          background: 'rgba(196, 174, 182, 0.2)',
                          border: '2px solid rgba(196, 174, 182, 0.5)',
                        }}
                      >
                        <IconComponent className="w-8 h-8 text-black" />
                      </div>
                      <p
                        className="text-white/80 text-center max-w-30"
                        style={{
                          fontFamily: 'Avenir Next, sans-serif',
                          fontWeight: 400,
                          fontSize: '16px',
                          lineHeight: '160%',
                        }}
                      >
                        {feature.label}
                      </p>
                    </div>
                  );
                })}
              </div>

              <Button
                onClick={handleNext}
                className="mx-auto h-13 px-16 rounded-xl text-black font-semibold transition-all hover:opacity-90 active:scale-[0.98]"
                style={{
                  background: 'rgba(196, 174, 182, 1)',
                  boxShadow:
                    '0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  fontFamily: 'Avenir Next, sans-serif',
                  fontWeight: 600,
                  fontSize: '16px',
                }}
              >
                {step.buttonText}
              </Button>
            </div>
          ) : (
            <div>
              <h2
                className="text-white mb-12 text-center"
                style={{
                  fontFamily: 'Avenir Next, sans-serif',
                  fontWeight: 600,
                  fontSize: '36px',
                  lineHeight: '48px',
                }}
              >
                {step.heading}
              </h2>

              {/* Options */}
              <div className="space-y-4 mb-12 max-w-2xl mx-auto">
                {step.options?.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedOption(option)}
                    className="w-full text-left p-4 rounded-lg transition-all hover:border-[rgba(196,174,182,0.5)] cursor-pointer"
                    style={{
                      background:
                        selectedOption === option
                          ? 'rgba(196, 174, 182, 0.1)'
                          : 'rgba(79, 79, 79, 0.3)',
                      border:
                        selectedOption === option
                          ? '2px solid rgba(196, 174, 182, 1)'
                          : '2px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0"
                        style={{
                          borderColor:
                            selectedOption === option
                              ? 'rgba(196, 174, 182, 1)'
                              : 'rgba(255, 255, 255, 0.3)',
                        }}
                      >
                        <div
                          className="w-3 h-3 rounded-full border-2"
                          style={{
                            borderColor:
                              selectedOption === option
                                ? 'rgba(196, 174, 182, 1)'
                                : 'rgba(255, 255, 255, 0.3)',
                            background:
                              selectedOption === option
                                ? 'rgba(196, 174, 182, 1)'
                                : 'transparent',
                          }}
                        />
                      </div>
                      <span
                        className="text-white"
                        style={{
                          fontFamily: 'Avenir Next, sans-serif',
                          fontWeight: 400,
                          fontSize: '16px',
                        }}
                      >
                        {option}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleNext}
                  disabled={!selectedOption}
                  className="h-13 px-12 rounded-xl text-black font-semibold transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: 'rgba(196, 174, 182, 1)',
                    boxShadow:
                      '0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    fontFamily: 'Avenir Next, sans-serif',
                    fontWeight: 600,
                    fontSize: '16px',
                  }}
                >
                  {step.buttonText}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
