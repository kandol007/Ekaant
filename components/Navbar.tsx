'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// --- Type Definitions for Nav Data ---
type NavLink = {
  text: string;
  href: string;
};

type NavData = {
  logo: string;
  links: NavLink[];
};

const Navbar = () => {
  // State for the navigation data from JSON
  const [navData, setNavData] = useState<NavData | null>(null);
  // State for mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);
  // State to track scroll position
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to fetch navigation content
  useEffect(() => {
    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => {
        // Correctly set the entire 'nav' object
        setNavData(data.nav);
      });
  }, []);

  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state to true if user scrolls past 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    // Cleanup function to remove the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Render a placeholder or nothing while data is loading
  if (!navData) {
    return <header className="h-28" />; // Occupy space for the initial navbar position
  }

  return (
    <nav
      className={`fixed left-0 right-0 z-50 flex items-center justify-between p-4 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'top-0 bg-white shadow-md' // When scrolled: move to top, add background and shadow
          : 'top-10 bg-white'   // When at top: positioned lower, white background
      }`}
    >
      {/* Logo */}
      <Link href="#home">
        <Image
          src={navData.logo}
          alt="Ekaant Retreat Logo"
          width={50}
          height={50}
          priority // Prioritize loading the logo
        />
      </Link>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex items-center gap-20 font-bold">
        {navData.links.map((link) => (
          <li key={link.href}>
            <Link 
              href={link.href} 
              // Conditionally change text color based on scroll
              className={`transition-colors ${isScrolled ? 'text-black' : 'text-black'} hover:text-green-600`}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
      
      {/* Hamburger Menu Button for Mobile */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className={`${isScrolled ? 'text-black' : 'text-black'} focus:outline-none`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white md:hidden">
          <ul className="flex flex-col items-center p-4 text-lg font-medium text-black">
            {navData.links.map((link) => (
              <li key={link.href} className="w-full text-center py-3">
                <Link href={link.href} onClick={() => setIsOpen(false)}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
