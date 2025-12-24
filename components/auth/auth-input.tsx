'use client';

import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Input } from '../ui/input';

interface AuthInputProps {
  type: 'text' | 'email' | 'password';
  placeholder: string;
  showToggle?: boolean;
  togglePassword?: () => void;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

export function AuthInput({
  type,
  placeholder,
  showToggle = false,
  value = '',
  onChange,
  togglePassword,
  name,
}: AuthInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = showToggle ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="relative">
      <Input
        type={inputType}
        placeholder={placeholder}
        name={name}
        className="w-full h-12 sm:h-13 px-3 sm:px-4 rounded-xl text-white placeholder:text-white/40 outline-none transition-all focus:ring-2 focus:ring-white/20 text-sm sm:text-base"
        style={{
          background: 'rgba(79, 79, 79, 1)',
          fontFamily: 'Avenir Next, sans-serif',
          fontWeight: 400,
        }}
        value={value}
        onChange={onChange}
      />
      {showToggle && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
        >
          {showPassword ? (
            <EyeOff size={18} className="sm:w-5 sm:h-5" />
          ) : (
            <Eye size={18} className="sm:w-5 sm:h-5" />
          )}
        </button>
      )}
    </div>
  );
}
