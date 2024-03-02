import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

const inter = Barlow({ subsets:['latin'],weight:'400' });

export const metadata: Metadata = {
  title: "Jai Anand",
  description: "Explore the projects and skills of Jai Anand, a skilled software engineer. Check out the latest updates and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      
    </html>
  );
}
