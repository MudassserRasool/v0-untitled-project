import Image from 'next/image';

export function AuthImage() {
  return (
    <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-8">
      <div className="relative w-full max-w-172.25 h-231.5 rounded-3xl overflow-hidden">
        <Image
          src="/images/website-login.png"
          alt="Woman exercising"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
