import type React from 'react';
import { Button } from '../ui/button';
interface AuthButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

export function AuthButton({
  children,
  type = 'button',
  onClick,
}: AuthButtonProps) {
  return (
    <Button
      type={type}
      className="w-full h-12 sm:h-13 rounded-xl text-black font-semibold transition-all hover:opacity-90 active:scale-[0.98] text-sm sm:text-base"
      onClick={onClick}
      style={{
        background: 'rgba(196, 174, 182, 1)',
        boxShadow:
          '0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Avenir Next, sans-serif',
        fontWeight: 600,
      }}
    >
      {children}
    </Button>
  );
}
