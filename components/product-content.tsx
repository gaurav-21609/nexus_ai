"use client"

export function ProductContent() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Product Evolution
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Watch as our revolutionary platform adapts and evolves in real-time, demonstrating the power of true AI
            innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="p-8 bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-purple-400/20 rounded-3xl">
              <h3 className="text-3xl font-bold text-white mb-4">Adaptive Intelligence</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our platform learns from every interaction, continuously optimizing performance and user experience
                through advanced machine learning algorithms.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-sm border border-blue-400/20 rounded-3xl">
              <h3 className="text-3xl font-bold text-white mb-4">Seamless Integration</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Connect with over 1000+ tools and platforms through our robust API ecosystem, creating a unified digital
                workspace.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-800/50 to-pink-900/30 backdrop-blur-sm border border-pink-400/20 rounded-3xl">
              <h3 className="text-3xl font-bold text-white mb-4">Predictive Analytics</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Harness the power of predictive analytics to anticipate trends, optimize workflows, and make data-driven
                decisions.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="relative">
              <div className="text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
                3D
              </div>
              <p className="text-xl text-gray-300 mb-8">
                Experience our platform in three dimensions as it demonstrates real-world capabilities and
                transformative potential.
              </p>
              <button className="group relative px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-xl text-white hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10">Explore Platform</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
