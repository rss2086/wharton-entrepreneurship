"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Add scroll effect with smoother transition
  useEffect(() => {
    // Set initial state to prevent flicker
    const progress = Math.min(1, window.scrollY / 100);
    setScrollProgress(progress);
    setScrolled(window.scrollY > 10);
    
    const handleScroll = () => {
      // Calculate scroll progress as a value between 0 and 1
      const progress = Math.min(1, window.scrollY / 100);
      setScrollProgress(progress);
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Interpolate background opacity based on scroll progress
  const bgOpacity = Math.max(0.5, 0.8 * scrollProgress);
  const blurValue = 8 * scrollProgress;

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? "border-indigo-900/30" 
          : ""
      }`}
      style={{
        background: `linear-gradient(to right, rgba(0, 0, 0, ${scrolled ? bgOpacity + 0.2 : 1}), rgba(15, 23, 42, ${scrolled ? bgOpacity + 0.2 : 1}), rgba(49, 46, 129, ${scrolled ? bgOpacity + 0.2 : 1}))`,
        backdropFilter: scrolled ? `blur(${blurValue}px)` : "none"
      }}
    >
      {/* Subtle star background */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-4 relative ">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="flex flex-col">
              <span className="font-bold text-[#ff4b4b] text-lg leading-tight group-hover:text-white transition-colors">Wharton</span>
              <span className="text-sm text-gray-300 leading-tight">Entrepreneurship Club</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/programs">Programs</NavLink>
            <NavLink href="/events">Events</NavLink>
            <NavLink href="/team">Our Team</NavLink>
            <NavLink href="/startup-week">Startup Week</NavLink>
            <NavLink href="/ventures">Ventures</NavLink>
            <NavLink href="/sponsorships">Sponsorships</NavLink>
            <NavLink href="/resources">Resources</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav 
            className="md:hidden mt-4 pb-4 space-y-0 border-t border-indigo-900/30 pt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            <MobileNavLink href="/" onClick={toggleMenu}>Home</MobileNavLink>
            <MobileNavLink href="/about" onClick={toggleMenu}>About Us</MobileNavLink>
            <MobileNavLink href="/programs" onClick={toggleMenu}>Programs</MobileNavLink>
            <MobileNavLink href="/events" onClick={toggleMenu}>Events</MobileNavLink>
            <MobileNavLink href="/team" onClick={toggleMenu}>Our Team</MobileNavLink>
            <MobileNavLink href="/startup-week" onClick={toggleMenu}>Startup Week</MobileNavLink>
            <MobileNavLink href="/ventures" onClick={toggleMenu}>Ventures</MobileNavLink>
            <MobileNavLink href="/sponsorships" onClick={toggleMenu}>Sponsorships</MobileNavLink>
            <MobileNavLink href="/resources" onClick={toggleMenu}>Resources</MobileNavLink>
            <MobileNavLink href="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
          </motion.nav>
        )}
      </div>
    </header>
  );
}

// Desktop Navigation Link
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-gray-300 hover:text-white text-sm font-medium transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

// Mobile Navigation Link
function MobileNavLink({ 
  href, 
  onClick, 
  children 
}: { 
  href: string; 
  onClick: () => void;
  children: React.ReactNode 
}) {
  return (
    <Link
      href={href}
      className="block text-gray-300 hover:text-white hover:bg-indigo-900/30 font-medium transition-colors py-3 px-4 border-b border-indigo-900/20 last:border-b-0 rounded-md"
      onClick={onClick}
    >
      {children}
    </Link>
  );
} 