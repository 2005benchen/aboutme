"use client";

import { useEffect } from "react";

export default function SuppressClientErrors() {
  useEffect(() => {
    const originalConsoleError = console.error;
    console.error = (...args) => {
      if (
        typeof args[0] === "string" &&
        (
          args[0].includes("createUnhandledError") ||
          args[0].includes("handleClientError")   ||
          args[0].includes("onUnhandledError")
        )
      ) {
        // Silently ignore these particular errors
        return;
      }

      // Otherwise, call the original console.error
      originalConsoleError(...args);
    };

    // Cleanup on unmount so we don’t affect other pages
    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  return null; // This component doesn't render anything
}
