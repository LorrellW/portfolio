"use client"; // Needs to be a client component for the ThemeToggle and interactivity

import ThemeToggle from "./ThemeToggle";
import Links from "./Links";
import Link from "next/link"; // Assuming HomeLinkLogo is just a Link/Logo component

// Assuming HomeLinkLogo component is imported as a wrapper for your site name/logo
// Since I don't have the code for HomeLinkLogo, I'll use a simple text link for the home page.

export default function Header() {
  return (
    <header
      className="sticky text-nowrap
        top-0 left-0 right-0 z-50 
        flex justify-between items-center 
        py-4 px-6 md:px-12 
        backdrop-blur-md bg-background/80 
        border-b  shadow-sm
        transition-all duration-300
      ">

      {/* Left Section: Logo/Home Link */}
      <div className="flex">
        {/* Using a simple text link placeholder for the logo area */}
        <Link href="/" className="text-2xl font-bold text-foreground hover:text-purple-800 transition-colors tracking-tight">
          LW
        </Link>
      </div>

      {/* Center Section: Main Navigation Links (Hidden on small screens) */}
      <nav className="hidden md:flex flex-1 justify-center">
        <Links />
      </nav>

      {/* Right Section: Theme Toggle / Mobile Menu (if implemented) */}
      <div className="flex items-center space-x-4">
        <div></div>
      </div>
    </header>
  );
}
