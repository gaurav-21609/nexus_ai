"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { InteractiveProduct } from "./interactive-product";

export function ProductShowcase() {
  const [activeFeature, setActiveFeature] = useState(0);

  const productFeatures = [
    {
      title: "Advanced Analytics",
      description:
        "Real-time insights and predictive analytics powered by machine learning algorithms.",
    },
    {
      title: "Seamless Integration",
      description:
        "Connect with over 1000+ tools and platforms through our robust API ecosystem.",
    },
    {
      title: "Intelligent Automation",
      description:
        "Automate complex workflows with AI-driven decision making and smart triggers.",
    },
  ];

  return (
    <section id="product" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Product Excellence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience our revolutionary platform through an interactive 3D
            showcase that demonstrates real-world capabilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 lg:h-[500px]">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
              <Suspense fallback={null}>
                <InteractiveProduct activeFeature={activeFeature} />
              </Suspense>
            </Canvas>
          </div>

          <div className="space-y-6">
            {productFeatures.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeFeature === index
                    ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-2 border-blue-400/50"
                    : "bg-slate-800/30 border border-slate-700/50 hover:border-blue-500/30"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <h3 className="text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}

            <button className="w-full mt-8 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-white hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105">
              Explore Full Platform
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
