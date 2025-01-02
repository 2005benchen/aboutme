"use client";

import React, { useState, useEffect } from "react";
import "./style.css";
import "@/utils/suppressErrors"; // Import the suppressErrors utility


// Suppress specific React warnings and errors
if (typeof window !== "undefined") {
  const originalConsoleError = console.error;

  console.error = (...args) => {
    // Suppress the createUnhandledError and related errors
    if (
      typeof args[0] === "string" &&
      (args[0].includes("createUnhandledError") ||
        args[0].includes("handleClientError") ||
        args[0].includes("onUnhandledError"))
    ) {
      return; // Suppress this error
    }

    // Pass all other errors through
    originalConsoleError(...args);
  };
}

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") || "light";
      const isDarkTheme = savedTheme === "dark";
      setIsDark(isDarkTheme);
      document.documentElement.classList.toggle("dark", isDarkTheme);
      updateBadgeTheme(isDarkTheme ? "dark" : "light");
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    updateBadgeTheme(newTheme);
  };

  const updateBadgeTheme = (theme: "dark" | "light") => {
    const badgeContainer = document.querySelector("#linkedin-badge-container");

    if (badgeContainer) {
      badgeContainer.innerHTML = ""; // Clear the existing badge

      // Recreate the badge with the updated theme
      const badgeDiv = document.createElement("div");
      badgeDiv.className = "badge-base LI-profile-badge";
      badgeDiv.setAttribute("data-locale", "en_US");
      badgeDiv.setAttribute("data-size", "large");
      badgeDiv.setAttribute("data-theme", theme);
      badgeDiv.setAttribute("data-type", "HORIZONTAL");
      badgeDiv.setAttribute("data-vanity", "ben10chen");
      badgeDiv.setAttribute("data-version", "v1");

      badgeContainer.appendChild(badgeDiv);

      // Reload the LinkedIn badge script
      const script = document.createElement("script");
      script.src = "https://platform.linkedin.com/badges/js/profile.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  };

  return (
    <div
      onClick={toggleDarkMode}
      className={`toggle small${isDark ? " night" : ""}`}
      >
      <div className="notch">
        <div className="crater" />
        <div className="crater" />
      </div>
      <div>
        <div className="shape sm" />
        <div className="shape sm" />
        <div className="shape md" />
        <div className="shape lg" />
      </div>
    </div>
  );
};

export default DarkModeToggle;