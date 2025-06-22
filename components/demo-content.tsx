"use client"

export function DemoContent() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Interactive Universe
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Step into our interactive 3D environment and experience the full power of NexusAI in action
          </p>
        </div>

        <div className="relative mb-16">
          <div className="text-center space-y-8">
            <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              LIVE DEMO
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience real-time AI processing, interactive 3D visualizations, and seamless workflow integration
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-sm border border-blue-400/20 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-3">Real-Time Processing</h3>
              <p className="text-gray-300">Watch AI algorithms process data in real-time with visual feedback</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-purple-400/20 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-3">3D Visualization</h3>
              <p className="text-gray-300">Interact with complex data through immersive 3D representations</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-slate-800/50 to-pink-900/30 backdrop-blur-sm border border-pink-400/20 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-3">Seamless Integration</h3>
              <p className="text-gray-300">Connect with your existing tools and workflows effortlessly</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-16 py-8 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-2xl font-bold text-2xl text-white hover:from-cyan-500 hover:via-blue-500 hover:to-purple-500 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <span className="relative z-10">Launch Demo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            </button>

            <button className="px-16 py-8 border-2 border-cyan-400/50 rounded-2xl font-bold text-2xl text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300">
              Schedule Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
