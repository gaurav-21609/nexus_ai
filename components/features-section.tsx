"use client";

import { useEffect, useRef } from "react";
import { Zap, Shield, Brain, Rocket, Globe, Users } from "lucide-react";

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll(".feature-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Zap,
      title: "Lightning Performance",
      description:
        "Experience blazing-fast processing with our quantum-optimized infrastructure that scales automatically.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Military-grade encryption and zero-trust architecture protect your data across all touchpoints.",
      color: "from-green-400 to-blue-500",
    },
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description:
        "Advanced machine learning algorithms adapt and learn from your workflows to optimize performance.",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: Rocket,
      title: "Rapid Deployment",
      description:
        "Deploy in minutes, not hours. Our streamlined setup gets you running at full capacity instantly.",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Global Scale",
      description:
        "Worldwide infrastructure ensures low latency and high availability across all continents.",
      color: "from-indigo-400 to-purple-500",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Seamless real-time collaboration tools that keep your team synchronized and productive.",
      color: "from-pink-400 to-red-500",
    },
  ];

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the cutting-edge capabilities that make our platform the
            choice of industry leaders worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group relative p-8 bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div
                  className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-blue-300 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
