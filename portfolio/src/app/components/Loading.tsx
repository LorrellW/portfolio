// file: app/components/Loading.tsx
"use client";

interface LoadingProps {
  isLoading: boolean;
}

export default function Loading({ isLoading }: LoadingProps) {
  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center bg-black
        transition-opacity duration-1000 ease-in-out
        ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
    >
      {/* --- This is your new loader --- */}
      <div className="logo-container">
        <span className="letter">L</span>
        <div className="progress-line"></div>
        <span className="letter">W</span>
      </div>
      
    </div>
  );
}