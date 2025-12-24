interface AuthDividerProps {
  text: string;
}

export function AuthDivider({ text }: AuthDividerProps) {
  return (
    <div className="relative my-6 sm:my-8">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-[#4f4f4f]"></div>
      </div>
      <div className="relative flex justify-center text-xs sm:text-sm">
        <span
          className="px-3 sm:px-4 bg-[#3C3741] text-[#a3a3a3]"
          style={{
            fontFamily: 'Avenir Next, sans-serif',
          }}
        >
          {text}
        </span>
      </div>
    </div>
  );
}
