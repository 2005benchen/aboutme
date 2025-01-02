if (typeof window !== "undefined" && process.env.NODE_ENV === "production") {
    const originalConsoleError = console.error;
  
    console.error = (...args) => {
      if (
        typeof args[0] === "string" &&
        (args[0].includes("createUnhandledError") ||
          args[0].includes("handleClientError") ||
          args[0].includes("onUnhandledError"))
      ) {
        // Suppress this error
        return;
      }
  
      // Pass all other errors through
      originalConsoleError(...args);
    };
  }
  