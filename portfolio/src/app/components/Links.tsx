"use client";

import Link from "next/link";
import { Exo_2 } from "next/font/google";

// Load Exo 2 so .title's variable-font hover works
const exo = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo",
});

export default function Links() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className={`${exo.className} title`}>
        <Link href="#about">« About Me »</Link>
      </div>

      <div className={`${exo.className} title`}>
        <Link href="#projects">« Projects »</Link>
      </div>

      <div className={`${exo.className} title`}>
        <Link href="#contact">« Contact »</Link>
      </div>
    </div>
  );
}
