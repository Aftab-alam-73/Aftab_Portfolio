import type { Metadata } from "next";
import "./globals.css";
import { Inter, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";


export const metadata: Metadata = {
  title: 'Aftab Alam | Full-Stack Developer',
  description: 'Portfolio of Aftab Alam, a full-stack developer specializing in building scalable web applications.',
  keywords: 'full-stack developer, React, Next.js, Node.js, web developer, JavaScript developer, MERN stack',
  authors: [{ name: 'Aftab Alam' }],
};
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
