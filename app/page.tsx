"use client";

import { extend } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { ProductShowcase } from "@/components/product-showcase";
import { TestimonialsSection } from "@/components/testimonials-section";
import { InteractiveDemo } from "@/components/interactive-demo";
import { Footer } from "@/components/footer";
import { Scene3D } from "@/components/scene-3d";
import { LoadingScreen } from "@/components/loading-screen";

export default function ProfessionalLanding() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <Suspense fallback={<LoadingScreen />}>
            <Scene3D />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10">
        <Navigation />
        <main>
          <HeroSection />
          <FeaturesSection />
          <ProductShowcase />
          <TestimonialsSection />
          <InteractiveDemo />
        </main>
        <Footer />
      </div>
    </div>
  );
}
