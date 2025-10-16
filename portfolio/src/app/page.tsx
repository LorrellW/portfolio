// file: page.tsx

"use client"

import { useState, useEffect } from "react";
import { Cairo_Play } from "next/font/google";
import Link from "next/link";
import Links from "./components/Links";
import Loading from "./components/Loading";


const cairo = Cairo_Play({
  subsets: ["latin"],
  variable: "--font-cario",
  weight: ["400", "700"],
});


export default function Home() {
  // HYDRATION FIX: Initialize isLoading to a fixed value (true) for all SSR renders.
  const [isLoading, setIsLoading] = useState(true);
  // NEW STATE: Prevents flicker by hiding content until localStorage check is done.
  const [isClientReady, setIsClientReady] = useState(false);

  useEffect(() => {
    // This block runs exclusively on the client, AFTER hydration has completed.
    if (typeof window !== 'undefined') {
        
        // 1. Check client storage to see if the animation has been played before.
        if (localStorage.getItem('hasVisited')) {
            setIsLoading(false); // Skip animation entirely on repeat visits
           // Set ready immediately to render content without flash
           setIsClientReady(true);
            return; // Exit the effect, no timer needed
        }

        // 2. First visit: Run the animation timer (set to 1700ms for smooth transition).
        const timer = setTimeout(() => {
            setIsLoading(false);
            // Set the flag in localStorage after the animation completes
            localStorage.setItem('hasVisited', 'true');
           // Set ready after the full animation duration
           setIsClientReady(true);
        }, 1700);

        return () => clearTimeout(timer);
    }
  }, []); 

  // FLICKER FIX: If we are still waiting for the client check to finish,
  // show a minimal, un-animated full-screen overlay to hide content and complex loader.
  if (!isClientReady) {
    return (
        <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
            {/* Minimal loading circle for instantaneous flicker protection */}
            <svg className="animate-spin h-6 w-6 text-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </div>
    );
  }

  return (
    <>
      <Loading isLoading={isLoading} />
      <div className={`transition-opacity duration-2000 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <header className="absolute top-0 right-0 p-4 md:p-8 lg:p-8 z-20">
        </header>

        {/* 1. Add bottom padding to prevent content from being hidden by the fixed footer */}

        <main className="flex flex-col items-center justify-center min-h-screen p-4 pb-22 text-center">
          <div className="md:max-w-2xl pt-20">
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
              <Link href="/contactMe" className="w-full sm:w-auto px-6 py-3 font-semibold text-foreground border border-foreground/50 rounded-md hover:bg-foreground/5 transition-colors">
                Get In Touch
              </Link>
            </div>
            <Links />
          </div>
        </main>
      </div>

      {/* 2. Footer is moved out of the main flow and given fixed positioning */}
      <footer className={`fixed bottom-0 left-0 right-0 flex flex-col items-end gap-4 py-6 p-8 transition-opacity duration-1000 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
      </footer>
    </>
  );
}

