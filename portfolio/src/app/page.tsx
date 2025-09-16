"use client"

import Image from "next/image";
import { Cairo_Play } from "next/font/google";
import AnimatedName from "./components/nameCycle";
import Link from "next/link";
import { useState } from "react";
import Links from "./components/Links"

  const cairo = Cairo_Play({
  subsets: ["latin"],
  variable: "--font-cario", // allows Tailwind integration
  weight: ["500"], // pick weights you want
  //display: "swap",
});



export default function Home() {


// const[isClicked, setIsClicked] = useState(false);

// const testing =()=>{
//   if (isClicked){
//     console.log("Button has been clicked")
//   }
  
}
  return (
    <main>
      <header>

      </header>
      <div className="flex-row text-center w-16 h-16 bg-yellow-600 mb-14">
      <h1 className={`${cairo.className} text-3xl p-4 text-nowrap `}>Lorrell Winfield.</h1>
      <div className="absolute bg-yellow-300 w-32 h-20"/>
     </div>
      < AnimatedName/>
        <Links/>
    </main>
  );
}
