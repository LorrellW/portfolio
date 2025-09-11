'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Orbitron, Poppins, Playfair_Display, Bebas_Neue, Oswald, Lora, Roboto_Mono, Fira_Code, Bodoni_Moda_SC } from 'next/font/google'

// Load 10 fonts (pick any you like)
const orbitron = Orbitron({ subsets: ['latin'], weight: ['400','700'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400','600'] })
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400','700'] })
const bebas = Bebas_Neue({ subsets: ['latin'], weight: ['400'] })
const oswald = Oswald({ subsets: ['latin'], weight: ['400','600'] })
const lora = Lora({ subsets: ['latin'], weight: ['400','700'] })
const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: ['400','700'] })
const firaCode = Fira_Code({ subsets: ['latin'], weight: ['400','700'] })
const bodoni = Bodoni_Moda_SC({ subsets: ['latin'], weight: ['400','700'] })

const FONTS = [
  orbitron.className,
  poppins.className,
  playfair.className,
  bebas.className,
  oswald.className,
  lora.className,
  robotoMono.className,
  firaCode.className,
  bodoni.className,
]

export default function AnimatedName({
  text = 'Frontend Developer',
  intervalMs = 1000,     // how long each font is shown
  fadeMs = 100,          // cross-fade duration
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
    <div className="relative mx-auto min-w-[18ch] text-center">
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
          transition={{ duration: fadeMs / 1000, ease: 'easeInOut' }}
          aria-hidden
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
