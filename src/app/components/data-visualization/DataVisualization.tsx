"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  DollarSign,
  PieChart,
  BarChart3,
} from "lucide-react";

interface DataPoint {
  date: string;
  value: number;
}

interface AssetAllocation {
  name: string;
  percentage: number;
  color: string;
}

const DataVisualization = () => {
  const [activeTab, setActiveTab] = useState("portfolio");
  const [hoveredPoint, setHoveredPoint] = useState<DataPoint | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Mock data for portfolio performance
  const portfolioData: DataPoint[] = [
    { date: "Jan", value: 5000 },
    { date: "Feb", value: 5200 },
    { date: "Mar", value: 4800 },
    { date: "Apr", value: 5100 },
    { date: "May", value: 5600 },
    { date: "Jun", value: 6200 },
    { date: "Jul", value: 6800 },
    { date: "Aug", value: 7100 },
    { date: "Sep", value: 7400 },
    { date: "Oct", value: 7800 },
    { date: "Nov", value: 8300 },
    { date: "Dec", value: 8900 },
  ];

  // Mock data for asset allocation
  const assetAllocation: AssetAllocation[] = [
    { name: "Stocks", percentage: 45, color: "#3b82f6" },
    { name: "Crypto", percentage: 25, color: "#10b981" },
    { name: "Bonds", percentage: 15, color: "#f59e0b" },
    { name: "Cash", percentage: 10, color: "#6366f1" },
    { name: "Other", percentage: 5, color: "#ec4899" },
  ];

  // Calculate max value for scaling
  const maxValue = Math.max(...portfolioData.map((item) => item.value));

  // Animate chart on mount
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Track Your Investments in Real-Time
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Powerful visualization tools to help you understand your portfolio
            performance and make informed decisions.
          </p>
        </div>

        <Card className="bg-gray-900 border-gray-800 overflow-hidden">
          <Tabs
            defaultValue="portfolio"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <div className="p-4 border-b border-gray-800">
              <TabsList className="grid grid-cols-3 bg-gray-800">
                <TabsTrigger
                  value="portfolio"
                  className="data-[state=active]:bg-blue-600"
                >
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Portfolio
                </TabsTrigger>
                <TabsTrigger
                  value="allocation"
                  className="data-[state=active]:bg-blue-600"
                >
                  <PieChart className="mr-2 h-4 w-4" />
                  Allocation
                </TabsTrigger>
                <TabsTrigger
                  value="performance"
                  className="data-[state=active]:bg-blue-600"
                >
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Performance
                </TabsTrigger>
              </TabsList>
            </div>

            <CardContent className="p-6">
              <TabsContent value="portfolio" className="mt-0">
                <div className="h-80 relative">
                  {/* Portfolio chart */}
                  <div className="absolute top-0 left-0 w-full h-full flex items-end">
                    {portfolioData.map((point, index) => {
                      const height = (point.value / maxValue) * 100;
                      const delay = index * 0.05;

                      return (
                        <div
                          key={index}
                          className="flex-1 mx-1 relative group"
                          onMouseEnter={() => setHoveredPoint(point)}
                          onMouseLeave={() => setHoveredPoint(null)}
                        >
                          <div
                            className="bg-blue-500 hover:bg-blue-400 transition-all duration-300 rounded-t-sm"
                            style={{
                              height: isAnimating ? "0%" : `${height}%`,
                              transition: `height 1s ease-out ${delay}s`,
                            }}
                          />

                          {/* Tooltip */}
                          {hoveredPoint === point && (
                            <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded text-xs whitespace-nowrap z-10">
                              <p className="font-bold">{point.date}</p>
                              <p>${point.value.toLocaleString()}</p>
                            </div>
                          )}

                          <span className="absolute bottom-0 left-0 right-0 text-center text-xs text-gray-500 mt-1">
                            {point.date}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Y-axis labels */}
                  <div className="absolute top-0 left-0 h-full flex flex-col justify-between text-xs text-gray-500 pr-2">
                    <span>${maxValue.toLocaleString()}</span>
                    <span>${(maxValue * 0.75).toLocaleString()}</span>
                    <span>${(maxValue * 0.5).toLocaleString()}</span>
                    <span>${(maxValue * 0.25).toLocaleString()}</span>
                    <span>$0</span>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Total Value</p>
                    <p className="text-2xl font-bold text-white flex items-center">
                      <DollarSign className="h-5 w-5 text-blue-500 mr-1" />
                      {portfolioData[
                        portfolioData.length - 1
                      ].value.toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Monthly Change</p>
                    <p className="text-2xl font-bold flex items-center text-green-500">
                      <ArrowUpRight className="h-5 w-5 mr-1" />
                      7.2%
                    </p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Annual Return</p>
                    <p className="text-2xl font-bold flex items-center text-green-500">
                      <ArrowUpRight className="h-5 w-5 mr-1" />
                      78%
                    </p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Assets</p>
                    <p className="text-2xl text-white font-bold">5 Types</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="allocation" className="mt-0">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 h-80">
                  {/* Pie chart visualization */}
                  <div className="relative w-64 h-64">
                    {assetAllocation.map((asset, index) => {
                      // Calculate the SVG arc parameters
                      const startAngle =
                        assetAllocation
                          .slice(0, index)
                          .reduce((sum, item) => sum + item.percentage, 0) *
                        3.6; // 3.6 = 360/100
                      const endAngle = startAngle + asset.percentage * 3.6;

                      // Convert to radians
                      const startRad = ((startAngle - 90) * Math.PI) / 180;
                      const endRad = ((endAngle - 90) * Math.PI) / 180;

                      // Calculate the SVG arc path
                      const x1 = 32 + 30 * Math.cos(startRad);
                      const y1 = 32 + 30 * Math.sin(startRad);
                      const x2 = 32 + 30 * Math.cos(endRad);
                      const y2 = 32 + 30 * Math.sin(endRad);

                      // Determine if the arc should be drawn as a large arc
                      const largeArcFlag = asset.percentage > 50 ? 1 : 0;

                      return (
                        <div key={index} className="absolute inset-0">
                          <svg viewBox="0 0 64 64" className="w-full h-full">
                            <path
                              d={`M 32 32 L ${x1} ${y1} A 30 30 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                              fill={asset.color}
                              stroke="#111"
                              strokeWidth="0.5"
                              className="hover:opacity-90 transition-opacity cursor-pointer"
                            />
                          </svg>
                        </div>
                      );
                    })}
                  </div>

                  {/* Legend */}
                  <div className="space-y-4">
                    {assetAllocation.map((asset, index) => (
                      <div key={index} className="flex items-center">
                        <div
                          className="w-4 h-4 mr-3 rounded-sm"
                          style={{ backgroundColor: asset.color }}
                        />
                        <span className="text-sm text-white">{asset.name}</span>
                        <span className="ml-[5px] font-bold text-white">
                          {asset.percentage}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="performance" className="mt-0">
                <div className="h-80 flex items-end justify-around">
                  {/* Performance comparison bars */}
                  <div className="flex flex-col items-center w-1/4">
                    <div className="h-64 w-20 bg-gray-800 relative overflow-hidden rounded-t-lg">
                      <div
                        className="absolute bottom-0 w-full bg-blue-500 transition-all duration-1000"
                        style={{ height: isAnimating ? "0%" : "65%" }}
                      />
                    </div>
                    <p className="mt-2 text-sm text-white">Your Portfolio</p>
                    <p className="text-green-500 font-bold">+65%</p>
                  </div>

                  <div className="flex flex-col items-center w-1/4">
                    <div className="h-64 w-20 bg-gray-800 relative overflow-hidden rounded-t-lg">
                      <div
                        className="absolute bottom-0 w-full bg-gray-500 transition-all duration-1000"
                        style={{ height: isAnimating ? "0%" : "42%" }}
                      />
                    </div>
                    <p className="mt-2 text-sm text-white">S&P 500</p>
                    <p className="text-green-500 font-bold">+42%</p>
                  </div>

                  <div className="flex flex-col items-center w-1/4">
                    <div className="h-64 w-20 bg-gray-800 relative overflow-hidden rounded-t-lg">
                      <div
                        className="absolute bottom-0 w-full bg-gray-500 transition-all duration-1000"
                        style={{ height: isAnimating ? "0%" : "28%" }}
                      />
                    </div>
                    <p className="mt-2 text-sm text-white">NASDAQ</p>
                    <p className="text-green-500 font-bold">+28%</p>
                  </div>

                  <div className="flex flex-col items-center w-1/4">
                    <div className="h-64 w-20 bg-gray-800 relative overflow-hidden rounded-t-lg">
                      <div
                        className="absolute bottom-0 w-full bg-red-500 transition-all duration-1000"
                        style={{ height: isAnimating ? "0%" : "12%" }}
                      />
                    </div>
                    <p className="mt-2 text-sm text-white">Bonds</p>
                    <p className="text-red-500 font-bold">-12%</p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-lg font-bold text-white">
                    Your portfolio is outperforming major indices
                  </p>
                  <p className="text-gray-400">
                    Annual comparison based on current allocation
                  </p>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
};

export default DataVisualization;
