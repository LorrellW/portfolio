"use client"

import Image from "next/image";
import { Cairo_Play } from "next/font/google";
import AnimatedName from "./components/nameCycle";
import Link from "next/link";
import { useState } from "react";
import Links from "./components/Links"
import HeroVanta from "./components/HeroVanta";
import ThemeToggle from "./components/ThemeToggle";

  const cairo = Cairo_Play({
  subsets: ["latin"],
  variable: "--font-cario", // allows Tailwind integration
  weight: ["500"], // pick weights you want
  //display: "swap",
});

export default function Home() {

  return (
    <>
    <main>
      
      <header>
        
      </header>
      <h1 className={`${cairo.className} text-3xl p-4 text-nowrap `}>Lorrell Winfield.</h1> 
        <h2 className={`${cairo.className} p-4 ml-16  `}>Software Developer.</h2>         
       {/* < AnimatedName/> */}
       <div className="grid grid-cols-3 p-8">
        <div></div>
        <div className="pt-10"><Links/></div>
         </div>
    </main>
    <footer className="flex place-content-end p-8">
      <ThemeToggle/>
    </footer>
    </>
  );
}
