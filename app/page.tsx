"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Navigation } from "@/components/navigation";
import { ScrollScene } from "@/components/scroll-scene";
import { HtmlContent } from "@/components/html-content";
import { LoadingScreen } from "@/components/loading-screen";
import { ScrollControls, Scroll} from "@react-three/drei";

export default function ProfessionalLanding() {
  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <Navigation />

      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <Suspense fallback={<LoadingScreen />}>
          <ScrollControls pages={5} damping={0.2}>
            <ScrollScene />

            <Scroll html>
              <HtmlContent />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  );
}
