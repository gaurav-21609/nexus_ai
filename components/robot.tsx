"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type * as THREE from "three";

interface RobotProps {
  position: [number, number, number];
}

export function Robot({ position }: RobotProps) {
  const robotRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (robotRef.current) {
      robotRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={robotRef} position={position}>
        <mesh position={[0, 1, 0]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial
            color="#1e293b"
            metalness={0.8}
            roughness={0.2}
            emissive="#0ea5e9"
            emissiveIntensity={0.1}
          />
        </mesh>

        <mesh position={[-0.2, 1.1, 0.4]}>
          <sphereGeometry args={[0.1]} />
          <meshStandardMaterial
            color="#00ffff"
            emissive="#00ffff"
            emissiveIntensity={0.5}
          />
        </mesh>
        <mesh position={[0.2, 1.1, 0.4]}>
          <sphereGeometry args={[0.1]} />
          <meshStandardMaterial
            color="#00ffff"
            emissive="#00ffff"
            emissiveIntensity={0.5}
          />
        </mesh>

        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.2, 1.5, 0.6]} />
          <meshStandardMaterial
            color="#334155"
            metalness={0.7}
            roughness={0.3}
            emissive="#8b5cf6"
            emissiveIntensity={0.05}
          />
        </mesh>

        <mesh position={[-0.8, 0.2, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 1]} />
          <meshStandardMaterial
            color="#475569"
            metalness={0.6}
            roughness={0.4}
          />
        </mesh>
        <mesh position={[0.8, 0.2, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 1]} />
          <meshStandardMaterial
            color="#475569"
            metalness={0.6}
            roughness={0.4}
          />
        </mesh>
      </group>
    </Float>
  );
}
