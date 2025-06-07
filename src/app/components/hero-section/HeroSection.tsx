"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Animated background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        <svg
          className="absolute h-full w-full opacity-20"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {[...Array(10)].map((_, i) => (
            <motion.path
              key={i}
              d={`M0 ${50 + i * 5} Q ${25 + i * 2} ${45 + i * 3}, ${50 + i} ${55 + i * 2} T 100 ${50 + i * 4}`}
              stroke="rgba(59, 130, 246, 0.5)"
              strokeWidth="0.5"
              fill="transparent"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: 0.8,
                transition: { delay: i * 0.2, duration: 2, ease: "easeInOut" },
              }}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left side - Text content */}
          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              x: isVisible ? 0 : -50,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Investment
              </span>{" "}
              Wallet
            </h1>
            <p className="text-xl font-light text-gray-300">
              Your Financial Control Center. Smart. Secure. Seamless.
            </p>
            <p className="max-w-md text-gray-400">
              Track, manage, and grow your investments with powerful analytics
              and real-time insights. Take control of your financial future
              today.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-700 text-gray-800 hover:bg-gray-200"
                >
                  Learn More
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - App mockup */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : 50,
            }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Phone mockup */}
              <div className="relative mx-auto h-[600px] w-[300px] rounded-[36px] border-4 border-gray-800 bg-gray-900 shadow-2xl">
                {/* Screen content */}
                <div className="absolute inset-0 overflow-hidden rounded-[32px]">
                  <div className="h-full w-full bg-gradient-to-b from-gray-900 to-black p-4">
                    {/* App UI mockup */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-gray-400">
                          Total Balance
                        </div>
                        <div className="text-2xl font-bold text-white">
                          $24,518.35
                        </div>
                      </div>
                      <div className="rounded-full bg-blue-600/20 p-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Chart mockup */}
                    <div className="mt-8">
                      <div className="mb-2 flex justify-between">
                        <div className="text-sm font-medium text-gray-400">
                          Portfolio Growth
                        </div>
                        <div className="text-sm font-medium text-green-500">
                          +12.4%
                        </div>
                      </div>
                      <div className="h-40 rounded-lg bg-gray-800/50 p-2">
                        <svg className="h-full w-full" viewBox="0 0 100 40">
                          <motion.path
                            d="M0 35 L10 32 L20 34 L30 28 L40 30 L50 20 L60 22 L70 16 L80 10 L90 12 L100 5"
                            stroke="url(#gradient)"
                            strokeWidth="2"
                            fill="transparent"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                          />
                          <defs>
                            <linearGradient
                              id="gradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#3B82F6" />
                              <stop offset="100%" stopColor="#8B5CF6" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>

                    {/* Assets mockup */}
                    <div className="mt-8">
                      <div className="mb-2 text-sm font-medium text-gray-400">
                        Top Assets
                      </div>
                      <div className="space-y-3">
                        {[
                          {
                            name: "Bitcoin",
                            symbol: "BTC",
                            value: "$8,245.32",
                            change: "+3.2%",
                          },
                          {
                            name: "Ethereum",
                            symbol: "ETH",
                            value: "$2,184.15",
                            change: "+5.4%",
                          },
                          {
                            name: "Apple Inc.",
                            symbol: "AAPL",
                            value: "$4,320.80",
                            change: "+1.2%",
                          },
                        ].map((asset, index) => (
                          <motion.div
                            key={asset.symbol}
                            className="flex items-center justify-between rounded-lg bg-gray-800/30 p-3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 1 + index * 0.2,
                              duration: 0.5,
                            }}
                          >
                            <div className="flex items-center">
                              <div className="mr-3 h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-80" />
                              <div>
                                <div className="font-medium text-white">
                                  {asset.name}
                                </div>
                                <div className="text-xs text-gray-400">
                                  {asset.symbol}
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-medium text-white">
                                {asset.value}
                              </div>
                              <div className="text-xs text-green-500">
                                {asset.change}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-blue-600/10 blur-3xl" />
              <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-purple-600/10 blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
