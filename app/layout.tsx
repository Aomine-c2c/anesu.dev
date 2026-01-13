import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anesu Romeo Mutimbire | Full Stack Developer",
  description: "Portfolio of Anesu Romeo Mutimbire - Computer Science student and web developer based in Zimbabwe, specializing in Python, Django, React, and modern web technologies.",
  keywords: ["web developer", "full stack", "Django", "React", "Python", "Zimbabwe", "portfolio"],
  authors: [{ name: "Anesu Romeo Mutimbire" }],
  openGraph: {
    title: "Anesu Romeo Mutimbire | Full Stack Developer",
    description: "Computer Science student and web developer specializing in building robust backend systems and clean, modern frontends.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
