"use client"

import { Zap, Shield, Brain, Rocket, Globe, Users } from "lucide-react"

export function FeaturesContent() {
  const features = [
    {
      icon: Zap,
      title: "Quantum Speed",
      description: "Lightning-fast processing with quantum-optimized algorithms",
    },
    {
      icon: Shield,
      title: "Fortress Security",
      description: "Military-grade protection with zero-trust architecture",
    },
    {
      icon: Brain,
      title: "Neural Intelligence",
      description: "Advanced AI that learns and adapts to your workflow",
    },
    {
      icon: Rocket,
      title: "Instant Deploy",
      description: "Deploy in seconds with our streamlined infrastructure",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Worldwide network ensuring optimal performance",
    },
    {
      icon: Users,
      title: "Team Sync",
      description: "Real-time collaboration across all dimensions",
    },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Quantum Features
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Discover the revolutionary capabilities that power the next generation of digital innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-slate-800/30 backdrop-blur-sm border border-blue-500/20 rounded-3xl hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:-translate-y-4"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
