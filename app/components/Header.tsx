"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Add scroll effect with smoother transition
  useEffect(() => {
    // Set initial state to prevent flicker
    setScrolled(window.scrollY > 50);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled 
          ? "bg-white shadow-md" 
          : isHomePage 
            ? "bg-transparent" 
            : "bg-slate-900"
      }`}
    >
      <div className="container mx-auto px-4 py-4 relative">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/eclub-logo.png"
              alt="Wharton Entrepreneurship Club Logo"
              width={40}
              height={40}
              className={`w-10 h-10 transition-all duration-300 ${
                scrolled ? "" : "invert brightness-150"
              }`}
            />
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-tight transition-colors duration-300 ${
                scrolled ? "text-blue-700" : "text-[#ff4b4b] group-hover:text-white"
              }`}>Wharton</span>
              <span className={`text-sm leading-tight transition-colors duration-300 ${
                scrolled ? "text-gray-600" : "text-gray-300"
              }`}>Entrepreneurship Club</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink href="/" scrolled={scrolled}>Home</NavLink>
            <NavLink href="/about" scrolled={scrolled}>About Us</NavLink>
            <NavLink href="/programs" scrolled={scrolled}>Programs</NavLink>
            <NavLink href="/events" scrolled={scrolled}>Events</NavLink>
            <NavLink href="/team" scrolled={scrolled}>Our Team</NavLink>
            <NavLink href="/startup-week" scrolled={scrolled}>Startup Week</NavLink>
            <NavLink href="/ventures" scrolled={scrolled}>Ventures</NavLink>
            
            {/* Join button with highlight */}
            <Link
              href="https://groups.wharton.upenn.edu/student_community?club_id=11514"
              className={`ml-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
                scrolled 
                  ? "bg-blue-600 hover:bg-blue-700 text-white" 
                  : "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white"
              }`}
            >
              Join E-Club
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden focus:outline-none p-2 rounded-md transition-colors ${
              scrolled 
                ? "text-blue-700 hover:bg-blue-50" 
                : "text-white bg-indigo-900/30 hover:bg-indigo-900/50"
            }`}
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
            className={`md:hidden mt-4 pb-4 space-y-0 pt-4 rounded-b-lg shadow-xl ${
              scrolled 
                ? "bg-white border-t border-gray-200" 
                : "bg-gradient-to-b from-slate-900/95 to-black/95 backdrop-blur-md border-t border-indigo-900/30"
            }`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            <MobileNavLink href="/" onClick={toggleMenu} scrolled={scrolled}>Home</MobileNavLink>
            <MobileNavLink href="/about" onClick={toggleMenu} scrolled={scrolled}>About Us</MobileNavLink>
            <MobileNavLink href="/programs" onClick={toggleMenu} scrolled={scrolled}>Programs</MobileNavLink>
            <MobileNavLink href="/events" onClick={toggleMenu} scrolled={scrolled}>Events</MobileNavLink>
            <MobileNavLink href="/team" onClick={toggleMenu} scrolled={scrolled}>Our Team</MobileNavLink>
            <MobileNavLink href="/startup-week" onClick={toggleMenu} scrolled={scrolled}>Startup Week</MobileNavLink>
            <MobileNavLink href="/ventures" onClick={toggleMenu} scrolled={scrolled}>Ventures</MobileNavLink>
            <MobileNavLink href="/sponsorships" onClick={toggleMenu} scrolled={scrolled}>Sponsorships</MobileNavLink>
            <MobileNavLink href="/resources" onClick={toggleMenu} scrolled={scrolled}>Resources</MobileNavLink>
            <MobileNavLink href="/contact" onClick={toggleMenu} scrolled={scrolled}>Contact</MobileNavLink>
            
            {/* Mobile Join Button */}
            <div className="px-4 pt-2">
              <Link
                href="https://groups.wharton.upenn.edu/student_community?club_id=11514"
                className={`block w-full text-center px-4 py-3 rounded-md font-medium transition-all duration-300 shadow-md ${
                  scrolled 
                    ? "bg-blue-600 hover:bg-blue-700 text-white" 
                    : "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white"
                }`}
                onClick={toggleMenu}
              >
                Join E-Club
              </Link>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
}

// Desktop Navigation Link
function NavLink({ href, children, scrolled }: { href: string; children: React.ReactNode; scrolled: boolean }) {
  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors relative group flex items-center ${
        scrolled 
          ? "text-gray-700 hover:text-blue-700" 
          : "text-gray-300 hover:text-white"
      }`}
    >
      {children}
      <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
        scrolled 
          ? "bg-blue-600" 
          : "bg-gradient-to-r from-blue-400 to-indigo-500"
      }`}></span>
    </Link>
  );
}

// Mobile Navigation Link
function MobileNavLink({ 
  href, 
  onClick, 
  children,
  scrolled
}: { 
  href: string; 
  onClick: () => void;
  children: React.ReactNode;
  scrolled: boolean;
}) {
  return (
    <Link
      href={href}
      className={`block font-medium transition-colors py-3 px-4 border-b last:border-b-0 rounded-md ${
        scrolled 
          ? "text-gray-700 hover:text-blue-700 hover:bg-blue-50 border-gray-200" 
          : "text-gray-300 hover:text-white hover:bg-indigo-900/30 border-indigo-900/20"
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
} 