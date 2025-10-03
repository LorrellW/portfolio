// file: page.tsx
"use client"

import { useState, useEffect } from "react"; // Import hooks
import { Cairo_Play } from "next/font/google";
import Link from "next/link";
import Links from "./components/Links";
import ThemeToggle from "./components/ThemeToggle";
import Loading from "./components/Loading"; // Import the new component

const cairo = Cairo_Play({
  subsets: ["latin"],
  variable: "--font-cario",
  weight: ["400", "700"],
});

export default function Home() {
  // 1. Add state to track loading status
  const [isLoading, setIsLoading] = useState(true);

  // 2. Use useEffect to handle the timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Set loading time to 2.5 seconds

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      {/* The loading screen is always in the DOM but visibility is controlled by its own state */}
      <Loading isLoading={isLoading} />

      {/* 3. Wrap main content to control its fade-in */}
      <div className={`transition-opacity duration-1000 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <header className="absolute top-0 right-0 p-4 md:p-8">
          <ThemeToggle />
        </header>

        <main className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
          <div className="max-w-2xl">
            <h1 className={`${cairo.className} text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400`}>
              Lorrell Winfield.
            </h1>

            <h2 className="text-xl md:text-2xl mt-2 mb-6">
              Software Developer
            </h2>

            <p className="text-md md:text-lg text-foreground/80 mb-8">
              I build responsive, accessible, and engaging web experiences. Passionate about clean code, creative problem-solving, and bringing digital ideas to life.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link href="/projects" className="w-full sm:w-auto px-6 py-3 font-semibold text-white bg-gray-800 rounded-md hover:bg-gray-700 transition-colors dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300">
                  View My Work
              </Link>
              <Link href="/contact" className="w-full sm:w-auto px-6 py-3 font-semibold text-foreground border border-foreground/50 rounded-md hover:bg-foreground/5 transition-colors">
                  Get In Touch
              </Link>
            </div>
          </div>

          <div className=" ">
            <Links />
          </div>
        </main>
      </div>
    </>
  );
}