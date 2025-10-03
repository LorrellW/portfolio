// file: app/components/Loading.tsx
"use client";

interface LoadingProps {
  isLoading: boolean;
}

export default function Loading({ isLoading }: LoadingProps) {
  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center bg-background
        transition-opacity duration-2000 ease-in-out
        ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
    >
        <div className="absolute top-10 left-0 w-full h-full flex flex-col items-center justify-center">
            Loading...
        </div>
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-foreground border-t-transparent"> </div>
    </div>
  );
}