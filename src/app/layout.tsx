//aboutme/src/app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import "@/utils/suppressErrors"; // If you have a suppressErrors utility
// Remove geistSans and geistMono if you're not using them:

export const metadata: Metadata = {
  title: "Ben Chen!",
  description: "UCLA-Grad Security Engineer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Ben Chen - Portfolio</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}