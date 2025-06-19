"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

export function FloatingElements() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z =
        Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: 8 }).map((_, i) => (
        <Float
          key={i}
          speed={1 + i * 0.2}
          rotationIntensity={0.1}
          floatIntensity={0.3}
        >
          <mesh
            position={[
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 15,
              (Math.random() - 0.5) * 10,
            ]}
          >
            <sphereGeometry args={[0.1 + Math.random() * 0.2]} />
            <meshStandardMaterial
              color={new THREE.Color().setHSL(Math.random(), 0.7, 0.5)}
              emissive={new THREE.Color().setHSL(Math.random(), 0.5, 0.3)}
              emissiveIntensity={0.3}
              transparent
              opacity={0.7}
            />
          </mesh>
        </Float>
      ))}

      {Array.from({ length: 5 }).map((_, i) => (
        <Float key={`geo-${i}`} speed={0.5 + i * 0.1} rotationIntensity={0.2}>
          <mesh
            position={[
              (Math.random() - 0.5) * 25,
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 8,
            ]}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
          >
            <octahedronGeometry args={[0.3]} />
            <meshStandardMaterial
              color="#8b5cf6"
              emissive="#8b5cf6"
              emissiveIntensity={0.2}
              transparent
              opacity={0.6}
              wireframe={Math.random() > 0.5}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}
