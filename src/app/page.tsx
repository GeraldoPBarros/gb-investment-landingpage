"use client";

import { motion } from "framer-motion";

import { ArrowRight } from "lucide-react";
import HeroSection from "./components/hero-section/HeroSection";
import FeatureCards from "./components/feature-cards/FeatureCards";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      {/* Hero Section */}
      <HeroSection />

      {/* Feature Cards Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Powerful Features for Modern Investors
          </h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
            Investment Wallet combines cutting-edge technology with intuitive design
            to give you complete control over your financial future.
          </p>
          <FeatureCards />
        </div>
      </motion.section>
      
    </main>
  );
}
