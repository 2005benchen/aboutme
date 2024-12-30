"use client";

import React, { useState, useEffect } from 'react';

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage for theme preference
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement; // Target the <html> element
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark'); // Persist theme in local storage
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light'); // Persist theme in local storage
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
