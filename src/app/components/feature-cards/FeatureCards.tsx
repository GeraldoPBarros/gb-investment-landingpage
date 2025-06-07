"use client";

import React, { useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { motion } from "framer-motion";
import { LineChart, Shield, Wallet, BarChart3, Zap, Globe } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description = "" }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <Card
      ref={cardRef}
      className="bg-card opacity-0 translate-y-10 transition-all duration-700 ease-out h-full"
    >
      <CardHeader>
        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default function FeatureCards() {
  const features: FeatureCardProps[] = [
    {
      icon: <LineChart className="h-6 w-6 text-primary" />,
      title: "Portfolio Tracking",
      description:
        "Real-time monitoring of all your investments in one place with detailed performance analytics.",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Bank-Level Security",
      description:
        "Advanced encryption and multi-factor authentication to keep your financial data protected.",
    },
    {
      icon: <Wallet className="h-6 w-6 text-primary" />,
      title: "Multi-Asset Support",
      description:
        "Track stocks, crypto, ETFs, mutual funds, and more all within a single unified interface.",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: "Advanced Analytics",
      description:
        "Gain insights with customizable reports, risk assessments, and performance comparisons.",
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Smart Alerts",
      description:
        "Receive personalized notifications about market changes, price targets, and investment opportunities.",
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Global Markets",
      description:
        "Access and track investments across international markets with real-time currency conversion.",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
