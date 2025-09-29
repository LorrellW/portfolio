"use client"

import Image from "next/image";
import { Cairo_Play } from "next/font/google";
import AnimatedName from "./components/nameCycle";
import Link from "next/link";
import { useState } from "react";
import Links from "./components/Links"
import HeroVanta from "./components/HeroVanta";

  const cairo = Cairo_Play({
  subsets: ["latin"],
  variable: "--font-cario", // allows Tailwind integration
  weight: ["500"], // pick weights you want
  //display: "swap",
});



export default function Home() {

  

  return (
    <main>
      
      <header>
        <HeroVanta/>

      </header>
      {/* <div className="flex-row text-center w-16 h-16 bg-yellow-600 mb-14">
      <h1 className={`${cairo.className} text-3xl p-4 text-nowrap `}>Lorrell Winfield.</h1>
      <div className="absolute bg-yellow-300 w-32 h-20"/>
     </div>
     
      
       */}
       < AnimatedName/>
       <div className="grid grid-cols-3">
        <div></div>
        <div></div>
        <Links/>
         </div>
    </main>
  );
}
