// src/components/Layout.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import Head from "next/head";
import Image from "next/image"; // Use next/image instead of <img>
import "@/utils/suppressErrors"; // If needed
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle scroll position preservation
  useEffect(() => {
    // Function to restore scroll position
    const restoreScrollPosition = () => {
      const savedScrollPosition = sessionStorage.getItem("scrollPosition");
      if (savedScrollPosition) {
        // Parse the saved scroll position and scroll the window
        const scrollY = parseInt(savedScrollPosition, 10);
        window.scrollTo(0, scrollY);
        // Remove the saved scroll position to avoid repeated scrolling
        sessionStorage.removeItem("scrollPosition");
      }
    };

    // Restore scroll position on component mount
    restoreScrollPosition();

    // Initialize AOS after restoring scroll to prevent interference
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once - while scrolling down
      mirror: true, // Whether elements should animate out while scrolling past them
      // Optionally, you can disable AOS on specific conditions
      // disable: 'mobile', // Example: Disable AOS on mobile devices
    });

    // Function to save scroll position before the page unloads
    const handleBeforeUnload = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    };

    // Add event listener for beforeunload to save scroll position
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // Effect to handle scroll state for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check for scroll position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Ben Chen - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 min-h-[70px] p-4 flex justify-between items-center ${
          isScrolled
            ? "bg-white bg-opacity-50 backdrop-blur dark:bg-gray-800 dark:bg-opacity-50"
            : "bg-transparent"
        } text-black dark:text-gray-200`}
      >
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src="/ben.jpg"
            alt="Ben Chen Logo"
            className="rounded-full object-cover"
            width={40}
            height={40}
          />
          <h1 className="text-2xl ml-4">Ben Chen</h1>
        </div>
        {/* Navigation */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" legacyBehavior>
                <a className="hover:text-yellow-500 transition-colors duration-200">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about" legacyBehavior>
                <a className="hover:text-yellow-500 transition-colors duration-200">
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/resume" legacyBehavior>
                <a className="hover:text-yellow-500 transition-colors duration-200">
                  Resume
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact" legacyBehavior>
                <a className="hover:text-yellow-500 transition-colors duration-200">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        {/* Dark Mode Toggle */}
        <DarkModeToggle />
      </header>
      <main className="pt-20 min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
        {children}
      </main>
      <footer className="bg-gray-800 dark:bg-gray-900 text-white p-4 text-center">
        &copy; {new Date().getFullYear()} Ben Chen. All rights reserved.
      </footer>
    </>
  );
};

export default Layout;
