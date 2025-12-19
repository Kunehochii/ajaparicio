import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anthony John Aparicio | Portfolio",
  description: "Junior Backend Engineer specializing in the PERN stack and Flutter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased bg-slate-900 text-slate-200 font-sans selection:bg-cyan-500/30`}
      >
        {children}
      </body>
    </html>
  );
}
