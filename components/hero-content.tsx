"use client"

export function HeroContent() {
  return (
    <section className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Welcome to
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">NexusAI</span>
        </h1>

        <p className="text-2xl md:text-3xl text-gray-300 mb-12 leading-relaxed">
          Experience the future of AI-powered innovation that transforms your digital landscape
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group relative px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-bold text-xl text-white hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
            <span className="relative z-10">Begin Journey</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
          </button>

          <button className="px-12 py-6 border-2 border-blue-400/50 rounded-2xl font-bold text-xl text-blue-400 hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300">
            Explore Demo
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-bounce" />
          </div>
          <p className="text-blue-400 text-sm mt-2">Scroll to explore</p>
        </div>
      </div>
    </section>
  )
}
