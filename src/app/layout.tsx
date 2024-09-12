// layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Importing the custom fonts you are using
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for your app
export const metadata: Metadata = {
  title: "PLAY.AI - The Voice Interface of A.I.",
  description: "Engage in dynamic conversations with AI using PLAY.AI.",
};

// Main layout function, which wraps the app
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
