'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const generateStars = (num: number) => Array.from({ length: num }, () => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1
}));

export default function NotFound() {
  const [stars, setStars] = useState<{ x: number; y: number; size: number }[]>([]);

  useEffect(() => {
    setStars(generateStars(200));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-indigo-900 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Starfield */}
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            top: `${star.y}%`,
            left: `${star.x}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div 
        className="max-w-max mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          className="text-base font-semibold text-blue-400"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}        >
          404
        </motion.p>
        
        <motion.h1 
          className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl"
          initial={{ letterSpacing: '2rem', opacity: 0 }}
          animate={{ letterSpacing: 'normal', opacity: 1 }}
        >
          Page not found
        </motion.h1>
        
        <motion.p 
          className="mt-6 text-base leading-7 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </motion.p>
        
        <motion.div 
          className="mt-10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href="/"
            className="rounded-md bg-white px-6 py-3 text-base font-semibold text-red-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300"
          >
            Go back home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
