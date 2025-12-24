import Image from 'next/image';

interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

export function AuthHeader({ title, subtitle }: AuthHeaderProps) {
  return (
    <div className="mb-6 sm:mb-8 flex flex-col items-start gap-2 sm:gap-3">
      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center shrink-0">
        <Image
          src="/logo.png"
          alt="Logo"
          width={64}
          height={64}
          className="object-contain w-12 h-12 sm:w-16 sm:h-16"
        />
      </div>
      <h1
        className="text-white text-3xl sm:text-[42px] leading-tight sm:leading-13.5"
        style={{
          fontFamily: 'Avenir Next, sans-serif',
          fontWeight: 600,
          letterSpacing: '0%',
        }}
      >
        {title}
      </h1>
      <p
        className="text-white/80 text-sm sm:text-base"
        style={{
          fontFamily: 'Avenir Next, sans-serif',
          fontWeight: 400,
          lineHeight: '160%',
          letterSpacing: '0.4%',
        }}
      >
        {subtitle}
      </p>
    </div>
  );
}
