"use client";

import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      const isDarkTheme = savedTheme === "dark";
      setIsDark(isDarkTheme);
      document.documentElement.classList.toggle("dark", isDarkTheme);
      updateBadgeTheme(isDarkTheme ? "dark" : "light");
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = !isDark ? "dark" : "light";
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    updateBadgeTheme(newTheme);
  };

  const updateBadgeTheme = (theme: "dark" | "light") => {
    const badgeContainer = document.querySelector("#linkedin-badge-container");

    if (badgeContainer) {
      // Clear the badge container
      badgeContainer.innerHTML = "";

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

      // Reinitialize the LinkedIn badge script
      const script = document.createElement("script");
      script.src = "https://platform.linkedin.com/badges/js/profile.js";
      script.async = true;
      script.defer = true;

      document.body.appendChild(script);
    }
  };

  return (
    <button onClick={toggleDarkMode} className="p-2 rounded">
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
