"use client";

import React from "react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import Head from "next/head";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Ben Chen - Portfolio</title>
        <link rel="icon" href="/favicone.ico" />
        <meta name="description" content="Welcome to Ben Chen's portfolio website." />
      </Head>
      <header className="bg-gray-800 dark:bg-gray-900 text-white dark:text-gray-200 p-4 flex justify-between items-center">
        {/* Add logo */}
        <div className="flex items-center">
          <img
            src="/ben.jpg" // Ensure ben.jpg is in the public folder
            alt="Ben Chen Logo"
            className="h-10 w-10 mr-4"
          />
          <h1 className="text-2xl">Ben Chen</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/resume">Resume</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <DarkModeToggle />
      </header>
      <main className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
        {children}
      </main>
      <footer className="bg-gray-800 dark:bg-gray-900 text-white p-4 text-center">
        &copy; {new Date().getFullYear()} Ben Chen. All rights reserved.
      </footer>
    </>
  );
};

export default Layout;
