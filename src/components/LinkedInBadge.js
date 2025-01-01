"use client";

import React, { useEffect } from "react";

const LinkedInBadge = ({ theme }) => {
  useEffect(() => {
    const badgeContainer = document.querySelector("#linkedin-badge-container");

    if (badgeContainer) {
      // Clear existing badge content
      badgeContainer.innerHTML = "";

      // Create the LinkedIn badge element
      const badgeDiv = document.createElement("div");
      badgeDiv.className = "badge-base LI-profile-badge";
      badgeDiv.setAttribute("data-locale", "en_US");
      badgeDiv.setAttribute("data-size", "large");
      badgeDiv.setAttribute("data-theme", theme);
      badgeDiv.setAttribute("data-type", "HORIZONTAL");
      badgeDiv.setAttribute("data-vanity", "ben10chen");
      badgeDiv.setAttribute("data-version", "v1");

      badgeContainer.appendChild(badgeDiv);

      // Load the LinkedIn badge script only if it's not already loaded
      if (!document.querySelector('script[src="https://platform.linkedin.com/badges/js/profile.js"]')) {
        const script = document.createElement("script");
        script.src = "https://platform.linkedin.com/badges/js/profile.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      }
    }
  }, [theme]);

  return (
    <div id="linkedin-badge-container" className="my-6 mx-auto flex justify-center"></div>
  );
};

export default LinkedInBadge;
