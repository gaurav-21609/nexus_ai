"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll, Environment } from "@react-three/drei";
import { HeroArtifacts } from "./hero-artifacts";
import { FeaturesArtifacts } from "./features-artifacts";
import { ProductArtifacts } from "./product-artifacts";
import { TestimonialArtifacts } from "./testimonial-artifacts";
import { DemoArtifacts } from "./demo-artifacts";
import { TransitioningObjects } from "./transitioning-objects";
import { ParallaxBackground } from "./parallax-background";
import type * as THREE from "three";

export function ScrollScene() {
  const scroll = useScroll();
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current && scroll) {
      const offset = scroll.offset;

      state.camera.position.y = -offset * 20;
      state.camera.lookAt(0, -offset * 20, 0);

      groupRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.1 + offset * 2) * 0.1;
    }
  });

  return (
    <>
      <Environment preset="night" />
      <ambientLight intensity={0.3} color="#1e40af" />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#3b82f6" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />

      <group ref={groupRef}>
        <ParallaxBackground />
        <TransitioningObjects />

        <HeroArtifacts />
        <FeaturesArtifacts />
        <ProductArtifacts />
        <TestimonialArtifacts />
        <DemoArtifacts />
      </group>
    </>
  );
}
