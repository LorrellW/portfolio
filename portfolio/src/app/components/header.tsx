"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Links from "./Links";

export default function Header() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Prevent body scroll while mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <header
      className={`sticky text-nowrap top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-6 md:px-6 backdrop-blur-lg bg-background/80 border-b shadow-sm transition-all duration-300`}
    >
      {/* Left Section: Logo/Home Link */}
      <div className="flex items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-foreground hover:text-purple-800 transition-colors tracking-tight"
        >
          LW
        </Link>
      </div>

      {/* Center Section: Main Navigation Links (Hidden on small screens) */}
      <nav className="hidden md:flex flex-1 justify-center">
        <Links />
      </nav>

      {/* Right Section: Theme Toggle / Mobile Menu (Hamburger) */}
      <div className="flex items-center space-x-4">
        {/* Hamburger button only visible on small screens. Always shows hamburger icon; X is inside modal. */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-foreground/20"
        >
          <span className="sr-only">Toggle menu</span>
          {/* Always Hamburger icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M3 7h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 17h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Modal Overlay - solid modal and solid overlay */}
      {open && (
        <div
          ref={modalRef}
          onClick={() => setOpen(false)}
          className="absolute left-0 inset-0 z-50 flex items-start justify-end  py-6 bg-background text-foreground"
        >
          {/* Modal panel: stop click propagation so clicks inside don't close */}
          <div
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            className="w-[150px] max-w-xs min-w-xs mt-12 rounded-2xl p-8 shadow-2xl bg-slate-500 border border-foreground/6 text-foreground"
          >
            {/* Close (X) button inside modal header */}
            <div className="flex justify-end">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-foreground/20"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Mobile Links - re-use Links component in vertical mode
                Pass onLinkClick so Links can close the modal after navigation */}
            <div className="mt-0">
              <Links isMobileMenu onLinkClick={() => setOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
