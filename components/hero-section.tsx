"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { DigitalAssistant } from "./digital-assistant"
import { HolographicDashboard } from "./holographic-dashboard"
import { ParallaxBackground } from "./parallax-background"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
          <Suspense fallback={null}>
            <ParallaxBackground />
            <DigitalAssistant position={[2, -0.5, 0]} />
            <HolographicDashboard position={[-1, 0.5, 1]} />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              The Future of
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Digital Innovation
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Experience next-generation AI-powered solutions that transform how you work, create, and innovate in the
            digital landscape.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-lg text-white hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <span className="relative z-10">Start Your Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            </button>

            <button className="px-8 py-4 border-2 border-blue-400/50 rounded-xl font-semibold text-lg text-blue-400 hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10M+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">150+</div>
              <div className="text-gray-400">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
