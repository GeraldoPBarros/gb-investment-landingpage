"use client";

import { motion } from "framer-motion";

import { ArrowRight } from "lucide-react";
import HeroSection from "./components/hero-section/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      {/* Hero Section */}
      
      <HeroSection />
      
    </main>
  );
}
