import type { Metadata } from "next";
import "./globals.css";
import { Inter, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
  title: "Aftab Alam | Full-Stack Developer",
  description:
    "Portfolio of Aftab Alam, a full-stack developer with 3+ years of experience building real-time backend systems in TypeScript and Node.js, with React and Next.js on the frontend.",
  metadataBase: new URL("https://aftab-portfolio-teal.vercel.app"),
  openGraph: {
    title: "Aftab Alam | Full-Stack Developer",
    description:
      "Real-time backend systems in TypeScript and Node.js, plus React and Next.js. Led 4 projects at SDLC Corp, delivered 3.",
    url: "https://aftab-portfolio-teal.vercel.app",
    siteName: "Aftab Alam",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Aftab Alam | Full-Stack Developer",
    description:
      "Real-time backend systems in TypeScript and Node.js, plus React and Next.js.",
  },
  keywords:
    "full-stack developer, backend engineer, system design, scalable systems, event-driven architecture, Node.js, TypeScript, React, Next.js, Redis, WebSockets, Kafka, microservices",
  authors: [{ name: "Aftab Alam" }],
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
          "bg-gray-900 text-white antialiased font-sans",
        )}
      >
        {children}
      </body>
    </html>
  );
}
