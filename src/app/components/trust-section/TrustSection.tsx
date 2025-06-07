"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, CheckCircle, Eye } from "lucide-react";
import { Card, CardContent } from "../ui/card";

import ISOCImage from "../../../assets/iso-certified.png";
import GDPRCImage from "../../../assets/gdpr-compliant.png";
import SOC2CImage from "../../../assets/soc2-cerfified.png";
import PCIDSSImage from "../../../assets/pcidss-compliant.png";

const TrustSection = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Security You Can Trust
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Your financial data deserves the highest level of protection. Ascend
            Wallet employs industry-leading security measures to keep your
            investments safe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border border-blue-800/30 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-4">
                Our Security Promise
              </h3>
              <p className="text-slate-300 mb-6">
                Ascend Wallet is built with security as a foundational
                principle. We employ end-to-end encryption, regular security
                audits, and follow industry best practices to ensure your data
                remains protected.
              </p>
              <div className="space-y-3">
                {securityPromises.map((promise, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-200">{promise}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0 w-full md:w-1/3 relative">
              <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl"></div>
              <motion.div
                className="relative z-10 aspect-square flex items-center justify-center"
                animate={{
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.05, 1, 1.05, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  ease: "easeInOut",
                }}
              >
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-blue-500/30 to-indigo-600/30 border border-blue-400/20 flex items-center justify-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-600/40 to-indigo-700/40 border border-blue-400/30 flex items-center justify-center">
                    <Shield className="w-16 h-16 md:w-20 md:h-20 text-blue-300" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 flex flex-wrap justify-center gap-8">
          {trustIndicators.map((indicator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <img
                src={indicator.logo}
                alt={indicator.name}
                className="h-12 md:h-16 opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
              <p className="text-xs text-slate-400 mt-2">{indicator.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const securityFeatures = [
  {
    title: "End-to-End Encryption",
    description:
      "All your financial data is encrypted using industry-standard protocols, ensuring your information remains private and secure.",
    icon: <Lock className="w-6 h-6 text-blue-400" />,
  },
  {
    title: "Biometric Authentication",
    description:
      "Access your wallet securely using fingerprint, face recognition, or other biometric authentication methods.",
    icon: <Eye className="w-6 h-6 text-blue-400" />,
  },
  {
    title: "Fraud Protection",
    description:
      "Advanced algorithms monitor for suspicious activities and alert you immediately if any unusual behavior is detected.",
    icon: <Shield className="w-6 h-6 text-blue-400" />,
  },
  {
    title: "Regular Security Audits",
    description:
      "Our systems undergo rigorous security testing by independent experts to identify and address potential vulnerabilities.",
    icon: <CheckCircle className="w-6 h-6 text-blue-400" />,
  },
];

const securityPromises = [
  "Your data is never sold to third parties",
  "SOC 2 Type II certified security practices",
  "Bank-level 256-bit AES encryption",
  "Two-factor authentication for all accounts",
];

const trustIndicators = [
  {
    name: "ISO 27001 Certified",
    logo: ISOCImage.src,
  },
  {
    name: "GDPR Compliant",
    logo: GDPRCImage.src,
  },
  {
    name: "SOC 2 Certified",
    logo: SOC2CImage.src,
  },
  {
    name: "PCI DSS Compliant",
    logo: PCIDSSImage.src,
  },
];

export default TrustSection;
