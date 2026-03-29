import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import AnimatedBackground from "@/components/AnimatedBackground";

const outfit = Outfit({ subsets:['latin'] });

export const metadata: Metadata = {
  title: "Jai Anand",
  description: "Explore the projects and skills of Jai Anand, a skilled software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className} suppressHydrationWarning>
        <CustomCursor />
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
