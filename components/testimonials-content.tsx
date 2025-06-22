"use client"

export function TestimonialsContent() {
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      company: "Quantum Dynamics",
      content:
        "NexusAI has revolutionized our research capabilities. The AI-powered insights have accelerated our breakthrough discoveries by 400%.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Innovation Director",
      company: "FutureTech Labs",
      content:
        "The seamless integration and intuitive interface make complex AI accessible to our entire team. It's like having a digital genius as a colleague.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "VP of Product Strategy",
      company: "NextGen Solutions",
      content:
        "The predictive analytics have transformed our product development cycle. We're now anticipating market needs months in advance.",
      rating: 5,
    },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Voices of Innovation
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Hear from the pioneers who are already shaping the future with NexusAI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gradient-to-br from-slate-800/60 to-purple-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-3xl hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:-translate-y-4"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-1 transform group-hover:scale-110 transition-transform duration-300"
                    />
                  ))}
                </div>

                <blockquote className="text-lg text-gray-300 mb-8 leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="text-xl font-bold text-white mb-1">{testimonial.name}</div>
                  <div className="text-cyan-400 mb-1">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
