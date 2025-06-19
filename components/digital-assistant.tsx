"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type * as THREE from "three";

interface DigitalAssistantProps {
  position: [number, number, number];
}

export function DigitalAssistant({ position }: DigitalAssistantProps) {
  const assistantRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (assistantRef.current) {
      assistantRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
      <group ref={assistantRef} position={position}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.8, 1, 2]} />
          <meshStandardMaterial
            color="#1e293b"
            metalness={0.8}
            roughness={0.2}
            emissive="#3b82f6"
            emissiveIntensity={0.1}
          />
        </mesh>

        <mesh position={[0, 1.5, 0]}>
          <sphereGeometry args={[0.6]} />
          <meshStandardMaterial
            color="#0f172a"
            metalness={0.9}
            roughness={0.1}
            emissive="#6366f1"
            emissiveIntensity={0.2}
          />
        </mesh>

        <mesh position={[0, 1.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1, 0.05]} />
          <meshStandardMaterial
            color="#00ffff"
            emissive="#00ffff"
            emissiveIntensity={0.5}
            transparent
            opacity={0.8}
          />
        </mesh>

        {Array.from({ length: 6 }).map((_, i) => (
          <mesh
            key={i}
            position={[
              Math.cos((i / 6) * Math.PI * 2) * 1.5,
              1.5 + Math.sin((i / 6) * Math.PI * 2) * 0.3,
              Math.sin((i / 6) * Math.PI * 2) * 1.5,
            ]}
          >
            <sphereGeometry args={[0.05]} />
            <meshStandardMaterial
              color="#8b5cf6"
              emissive="#8b5cf6"
              emissiveIntensity={0.8}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}
