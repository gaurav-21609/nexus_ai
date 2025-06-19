"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type * as THREE from "three";

export function ParallaxBackground() {
  const particlesRef = useRef<THREE.Points>(null);
  const shapesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
    if (shapesRef.current) {
      shapesRef.current.rotation.z =
        Math.sin(state.clock.elapsedTime * 0.1) * 0.02;
    }
  });

  const particleCount = 500;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  return (
    <>
      <ambientLight intensity={0.4} color="#1e40af" />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#3b82f6" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />

      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          color="#3b82f6"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>

      <group ref={shapesRef}>
        {Array.from({ length: 5 }).map((_, i) => (
          <mesh
            key={i}
            position={[
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 15,
              (Math.random() - 0.5) * 10,
            ]}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
          >
            <octahedronGeometry args={[0.5]} />
            <meshStandardMaterial
              color="#6366f1"
              emissive="#6366f1"
              emissiveIntensity={0.2}
              transparent
              opacity={0.4}
              wireframe
            />
          </mesh>
        ))}
      </group>
    </>
  );
}
