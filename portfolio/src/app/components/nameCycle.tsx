'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Big_Shoulders_Inline_Text,Bebas_Neue, Oswald, Lora, Stick_No_Bills, Doto, } from 'next/font/google'

// Load 10 fonts (pick any you like)
 const shoulders = Big_Shoulders_Inline_Text({ subsets: ['latin'], weight: ['400','400'] })
 const bebas = Bebas_Neue({ subsets: ['latin'], weight: ['400', '400'] })
 const oswald = Oswald({ subsets: ['latin'], weight: ['400','200'] })
 const stickno = Stick_No_Bills({ subsets: ['latin'], weight: ['400','200'] })
const doto = Doto({ subsets: ['latin'], weight: ['100','100'] })

const FONTS = [
   shoulders.className,
   bebas.className,
   oswald.className,
   stickno.className,
  doto.className,
]

export default function AnimatedName({
  text = 'Front-End Developer',
  intervalMs = 4000,     // how long each font is shown
  fadeMs = 400,          // cross-fade duration
}: {
  text?: string
  intervalMs?: number
  fadeMs?: number
}) {
  const [index, setIndex] = useState(0)
  const nextIndex = (index + 1) % FONTS.length

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % FONTS.length), intervalMs)
    return () => clearInterval(id)
  }, [intervalMs])

  return (
    <div className=" relative mx-auto min-w-[18ch] text-center text-white">
      {/* Back layer (current) */}
      <span className={`${FONTS[index]} block text-5xl md:text-7xl tracking-tight`}>
        {text}
      </span>

      {/* Front layer (next) cross-fading in */}
      <AnimatePresence initial={false}>
        <motion.span
          key={nextIndex}
          className={`${FONTS[nextIndex]} absolute inset-0 block text-5xl md:text-7xl tracking-tight`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: fadeMs / 100, ease: 'easeIn' }}
          aria-hidden
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
