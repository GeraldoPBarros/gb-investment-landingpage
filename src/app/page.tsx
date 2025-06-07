"use client";

import { motion } from "framer-motion";

import { ArrowRight } from "lucide-react";

import HeroSection from "./components/hero-section/HeroSection";
import FeatureCards from "./components/feature-cards/FeatureCards";
import DataVisualization from "./components/data-visualization/DataVisualization";
import TrustSection from "./components/trust-section/TrustSection";

import { Button } from "./components/ui/button";

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

      {/* Data Visualization Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-900 to-gray-950"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Real-Time Portfolio Insights
          </h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
            Visualize your investments with powerful, interactive charts that
            help you make informed decisions.
          </p>
          <DataVisualization />
        </div>
      </motion.section>

      {/* Trust Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-950 to-black"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Bank-Level Security
          </h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
            Your financial data is protected with the most advanced encryption
            and security protocols available.
          </p>
          <TrustSection />
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full py-24 px-4 md:px-8 lg:px-16 bg-black"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Take Control of Your Financial Future?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of investors who are already using Ascend Wallet to
            track, manage, and grow their investments.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <p className="text-gray-500 mt-6">
            No credit card required. Free 30-day trial.
          </p>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="w-full py-8 px-4 md:px-8 lg:px-16 bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-white">Investment Wallet</h3>
            <p className="text-gray-400 text-sm">
              Your Financial Control Center
            </p>
          </div>

          <div className="flex space-x-8">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </a>
          </div>

          <div className="mt-6 md:mt-0">
            <p className="text-gray-500 text-sm">
              © 2025 Geraldo Barros. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
