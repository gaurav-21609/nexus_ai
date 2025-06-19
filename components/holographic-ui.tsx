"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

interface HolographicUIProps {
  position: [number, number, number];
}

export function HolographicUI({ position }: HolographicUIProps) {
  const panelRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (panelRef.current) {
      panelRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.05} floatIntensity={0.2}>
      <group position={position}>
        <mesh ref={panelRef}>
          <planeGeometry args={[2, 1.5]} />
          <meshStandardMaterial
            color="#00ffff"
            transparent
            opacity={0.3}
            emissive="#00ffff"
            emissiveIntensity={0.2}
            side={THREE.DoubleSide}
          />
        </mesh>

        {Array.from({ length: 6 }).map((_, i) => (
          <mesh
            key={i}
            position={[
              (Math.random() - 0.5) * 3,
              (Math.random() - 0.5) * 2,
              (Math.random() - 0.5) * 0.5,
            ]}
          >
            <sphereGeometry args={[0.05]} />
            <meshStandardMaterial
              color="#ff00ff"
              emissive="#ff00ff"
              emissiveIntensity={0.5}
            />
          </mesh>
        ))}

        <mesh position={[0, 0, -0.1]}>
          <planeGeometry args={[1.8, 0.02]} />
          <meshStandardMaterial
            color="#00ffff"
            emissive="#00ffff"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>
    </Float>
  );
}
