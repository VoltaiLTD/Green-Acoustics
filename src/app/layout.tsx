import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import your global components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Green Acoustics | The Architecture of Silence",
  description: "Nigeria's premier acoustic engineering, 3D rendering, and panel fabrication firm based in Lagos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {/* Next.js injects the current page into 'children' */}
        {children} 
        <Footer />
      </body>
    </html>
  );
}