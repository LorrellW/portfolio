"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type LogoSplashProps = { durationMs?: number; onDone?: () => void };

export default function LogoSplash({ durationMs = 1400, onDone }: LogoSplashProps) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-background text-foreground grid place-items-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <div className="relative w-[220px] h-[220px]">
        <Image
          src="/logo1.png"                 // <-- corrected filename
          alt="LW mark"
          fill
          className="object-contain pointer-events-none select-none"
          priority
        />

        <motion.div
          className="absolute left-1/2 -translate-x-1/2 bottom-[10%] w-[2px] bg-foreground"
          initial={{ height: 0 }}
          animate={{ height: "80%" }}
          transition={{ duration: durationMs / 1000, ease: "easeInOut" }}
          onAnimationComplete={() => {
            setTimeout(() => { setVisible(false); onDone?.(); }, 150);
          }}
        />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[8%] h-[6px] w-[2px] bg-foreground opacity-60" />
      </div>
    </motion.div>
  );
}
