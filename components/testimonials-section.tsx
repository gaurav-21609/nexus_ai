"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechCorp",
      company: "TechCorp",
      content:
        "This platform has revolutionized our development workflow. The AI-powered features have increased our team's productivity by 300%.",
      rating: 5,
      avatar: "SC",
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Developer, InnovateLab",
      company: "InnovateLab",
      content:
        "The seamless integration capabilities are outstanding. We connected our entire tech stack in just one afternoon.",
      rating: 5,
      avatar: "MR",
    },
    {
      name: "Emily Watson",
      role: "Product Manager, FutureScale",
      company: "FutureScale",
      content:
        "The analytics insights have transformed how we make product decisions. It's like having a crystal ball for user behavior.",
      rating: 5,
      avatar: "EW",
    },
  ]

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Trusted by Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See what industry pioneers are saying about their transformative experiences with our platform.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative bg-gradient-to-br from-slate-800/80 to-purple-900/40 backdrop-blur-sm border border-blue-400/20 rounded-3xl p-8 md:p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl" />

            <div className="relative z-10">
              {/* Avatar */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    {testimonials[activeTestimonial].avatar}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-xl" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-2xl md:text-3xl text-white text-center mb-8 leading-relaxed font-light">
                "{testimonials[activeTestimonial].content}"
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <div className="text-xl font-semibold text-white mb-1">{testimonials[activeTestimonial].name}</div>
                <div className="text-blue-400">{testimonials[activeTestimonial].role}</div>
                <div className="text-gray-400 text-sm">{testimonials[activeTestimonial].company}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-slate-800/50 border border-blue-400/30 rounded-full hover:border-blue-400/60 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-blue-400" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === activeTestimonial ? "bg-blue-400" : "bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-slate-800/50 border border-blue-400/30 rounded-full hover:border-blue-400/60 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-blue-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
