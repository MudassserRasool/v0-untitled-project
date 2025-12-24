import Image from 'next/image';
import { Button } from '../ui/button';

export function SocialLoginButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
      <Button className="flex-1 h-12 sm:h-13 bg-white rounded-xl flex items-center justify-center gap-2 font-medium transition-all hover:bg-white/90 active:scale-[0.98]">
        <Image
          src="/icons/google.svg"
          alt="Google"
          width={20}
          height={20}
          className="w-4 h-4 sm:w-5 sm:h-5"
        />
        <span
          className="text-sm sm:text-base"
          style={{
            fontFamily: 'Avenir Next, sans-serif',
            fontWeight: 500,
            color: '#000',
          }}
        >
          Continue with Google
        </span>
      </Button>
      <Button className="flex-1 h-12 sm:h-13 bg-white rounded-xl flex items-center justify-center gap-2 font-medium transition-all hover:bg-white/90 active:scale-[0.98]">
        <Image
          src="/icons/apple.svg"
          alt="Apple"
          width={20}
          height={20}
          className="w-4 h-4 sm:w-5 sm:h-5"
        />
        <span
          className="text-sm sm:text-base"
          style={{
            fontFamily: 'Avenir Next, sans-serif',
            fontWeight: 500,
            color: '#000',
          }}
        >
          Continue with Apple
        </span>
      </Button>
    </div>
  );
}
