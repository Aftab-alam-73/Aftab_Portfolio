"use client";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { ExperienceSection } from "@/sections/Experience";
import { TapeSection } from "@/sections/Tape";
import { PrinciplesSection } from "@/sections/Principles";

export default function Home() {
  return (
    <div id="home">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <TapeSection />
      <PrinciplesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
