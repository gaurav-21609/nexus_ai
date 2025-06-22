"use client"

import { useState } from "react"
import { Play, Pause, RotateCcw } from "lucide-react"

export function InteractiveDemo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
    // In a real implementation, this would control the demo animation
  }

  const resetDemo = () => {
    setIsPlaying(false)
    setProgress(0)
  }

  return (
    <section id="demo" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Interactive Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take our platform for a test drive with this interactive demo that showcases real-world scenarios and
            capabilities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Demo Container */}
          <div className="relative bg-gradient-to-br from-slate-800/80 to-blue-900/40 backdrop-blur-sm border border-blue-400/20 rounded-3xl p-8 md:p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl" />

            <div className="relative z-10">
              {/* Demo Screen */}
              <div className="aspect-video bg-slate-900/80 rounded-2xl border border-blue-400/30 mb-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    {isPlaying ? (
                      <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Play className="w-12 h-12 text-white ml-1" />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {isPlaying ? "Demo Running..." : "Ready to Start"}
                  </h3>
                  <p className="text-gray-300">
                    {isPlaying ? "Experience our platform in action" : "Click play to begin the interactive demo"}
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Progress</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Controls */}
              <div className="flex justify-center space-x-4">
                <button
                  onClick={togglePlay}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold text-white hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    <span>{isPlaying ? "Pause Demo" : "Start Demo"}</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                </button>

                <button
                  onClick={resetDemo}
                  className="px-8 py-4 border-2 border-blue-400/50 rounded-xl font-semibold text-blue-400 hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300 flex items-center space-x-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  <span>Reset</span>
                </button>
              </div>

              {/* Call to Action */}
              <div className="text-center mt-12">
                <p className="text-gray-300 mb-6">
                  Ready to experience the full platform? Start your free trial today.
                </p>
                <button className="group relative px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-lg text-white hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105">
                  <span className="relative z-10">Start Free Trial</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
