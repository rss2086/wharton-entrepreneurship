'use client'

import { motion } from 'framer-motion'
import { logos } from '@/app/config/images'
import Image from 'next/image'
import clsx from 'clsx'

export function LogoMarquee({ className = "", whiteLogos = true }: { className?: string, whiteLogos?: boolean }) {
  const logoArray = Object.values(logos)
  // Filter out any specific logos if needed
  const filteredLogos = logoArray

  return (
    <section className={clsx("relative overflow-hidden py-3 bg-transparent", className)}>
      <motion.h3 
        className="text-center font-light mb-4 tracking-widest uppercase text-blue-300 text-sm md:text-base"
        initial={{ opacity: 1 }}
      >
        <span className="relative">
          <span className="absolute -top-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></span>
          Proud to be trusted by the following organizations
          <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></span>
        </span>
      </motion.h3>
      
      <div className="relative w-full overflow-hidden">
        <div className="flex">
          <motion.div
            className="flex space-x-12 min-w-max" 
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                duration: 40,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              },
            }}
          >
            {filteredLogos.map((logo, index) => (
              <div
                key={`logo-${index}`}
                className="flex-shrink-0 w-28 h-14 relative group"
              >
                <Image
                  src={logo}
                  alt="Company logo"
                  fill
                  sizes="112px"
                  className={clsx(
                    "object-contain transition-all duration-300 scale-95 group-hover:scale-100",
                    whiteLogos && "brightness-0 invert group-hover:brightness-0 group-hover:invert"
                  )}
                />
              </div>
            ))}
            
            {/* Duplicate set of logos for seamless looping */}
            {filteredLogos.map((logo, index) => (
              <div
                key={`logo-dup-${index}`}
                className="flex-shrink-0 w-28 h-14 relative group"
              >
                <Image
                  src={logo}
                  alt="Company logo"
                  fill
                  sizes="112px"
                  className={clsx(
                    "object-contain transition-all duration-300 scale-95 group-hover:scale-100",
                    whiteLogos && "brightness-0 invert group-hover:brightness-0 group-hover:invert"
                  )}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 