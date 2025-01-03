export {};

declare global {
  interface Window {
    __sociableKitInitialized?: boolean;

    SociableKit?: {
      init: () => void;
      // Add other methods or properties if needed
    };
  }
}
