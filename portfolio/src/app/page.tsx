// file: page.tsx

"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import Loading from "./components/Loading";



export default function Home() {
  // HYDRATION FIX: Initialize isLoading to a fixed value (true) for all SSR renders.
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This block runs exclusively on the client, AFTER hydration has completed.
    if (typeof window !== 'undefined') {
        
        // 1. Check client storage to see if the animation has been played before.
        if (localStorage.getItem('hasVisited')) {
            setIsLoading(false); // Skip animation entirely on repeat visits
            return; // Exit the effect, no timer needed
        }

        // 2. First visit: Run the animation timer (set to 1700ms for smooth transition).
        const timer = setTimeout(() => {
            setIsLoading(false);
            // Set the flag in localStorage after the animation completes
            localStorage.setItem('hasVisited', 'true');
        }, 1700);

        return () => clearTimeout(timer);
    }
  }, []); 

  return (
    <>
      <Loading isLoading={isLoading} />
      <div className={`transition-opacity duration-2000 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <header className="absolute top-0 right-0 p-4 md:p-8 lg:p-8 z-20">
        </header>

        {/* 1. Add bottom padding to prevent content from being hidden by the fixed footer */}

        <main className="flex flex-col items-center justify-center p-4 pb-22 text-center">
          <div className="md:max-w-2xl pt-20">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-blend-color bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500`">
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
          </div>
        </main>
      </div>

      {/* 2. Footer is moved out of the main flow and given fixed positioning */}
      <footer className={` bottom-0 left-0 right-0 flex flex-col items-end gap-4 py-6 p-8 transition-opacity duration-1000 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
      </footer>
    </>
  );
}

