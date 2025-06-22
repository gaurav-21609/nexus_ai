"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll, Float, Text3D } from "@react-three/drei";
import type * as THREE from "three";

export function DemoArtifacts() {
  const scroll = useScroll();
  const artifactsRef = useRef<THREE.Group>(null);
  const interactiveRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (scroll && artifactsRef.current && interactiveRef.current) {
      const offset = scroll.offset;

      const sectionStart = 0.8;
      const sectionEnd = 1.0;
      const isInSection = offset >= sectionStart;

      artifactsRef.current.visible = isInSection;

      if (isInSection) {
        const sectionProgress = Math.min(
          1,
          (offset - sectionStart) / (sectionEnd - sectionStart)
        );
        artifactsRef.current.position.y = -80 + sectionProgress * 5;

        interactiveRef.current.rotation.y = state.clock.elapsedTime * 0.5;
        interactiveRef.current.scale.setScalar(
          1 + Math.sin(state.clock.elapsedTime * 2) * 0.1
        );
      }
    }
  });

  return (
    <group ref={artifactsRef}>
      <group ref={interactiveRef} position={[0, -80, 0]}>
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
          <mesh>
            <cylinderGeometry args={[3, 3, 0.5]} />
            <meshStandardMaterial
              color="#0f172a"
              metalness={0.9}
              roughness={0.1}
              emissive="#1e40af"
              emissiveIntensity={0.3}
            />
          </mesh>

          <mesh position={[0, 0.5, 0]}>
            <sphereGeometry args={[0.8]} />
            <meshStandardMaterial
              color="#00ffff"
              emissive="#00ffff"
              emissiveIntensity={0.6}
              transparent
              opacity={0.8}
            />
          </mesh>

          {Array.from({ length: 6 }).map((_, i) => (
            <group
              key={i}
              position={[
                Math.cos((i / 6) * Math.PI * 2) * 2.5,
                0.3,
                Math.sin((i / 6) * Math.PI * 2) * 2.5,
              ]}
              rotation={[0, (i / 6) * Math.PI * 2, 0]}
            >
              <mesh>
                <planeGeometry args={[1, 1.5]} />
                <meshStandardMaterial
                  color="#1e293b"
                  emissive="#3b82f6"
                  emissiveIntensity={0.2}
                  transparent
                  opacity={0.9}
                />
              </mesh>

              {Array.from({ length: 4 }).map((_, j) => (
                <mesh key={j} position={[0, 0.3 - j * 0.2, 0.01]}>
                  <boxGeometry args={[0.6, 0.1, 0.01]} />
                  <meshStandardMaterial
                    color="#00ffff"
                    emissive="#00ffff"
                    emissiveIntensity={0.4}
                  />
                </mesh>
              ))}
            </group>
          ))}
        </Float>
      </group>

      {Array.from({ length: 12 }).map((_, i) => (
        <Float key={i} speed={1 + i * 0.1} rotationIntensity={0.3}>
          <mesh
            position={[
              (Math.random() - 0.5) * 15,
              -80 + (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 8,
            ]}
          >
            <dodecahedronGeometry args={[0.2]} />
            <meshStandardMaterial
              color="#8b5cf6"
              emissive="#8b5cf6"
              emissiveIntensity={0.5}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        </Float>
      ))}

      <Float speed={0.8} rotationIntensity={0.1}>
        <group position={[4, -78, 2]}>
          <Text3D
            font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
            size={0.5}
            height={0.1}
          >
            SUCCESS
            <meshStandardMaterial
              color="#10b981"
              emissive="#10b981"
              emissiveIntensity={0.4}
            />
          </Text3D>
        </group>
      </Float>

      <Float speed={0.5} rotationIntensity={0.05}>
        <group position={[0, -82, -3]}>
          {Array.from({ length: 20 }).map((_, i) => (
            <mesh
              key={i}
              position={[
                (Math.random() - 0.5) * 8,
                Math.random() * 4,
                (Math.random() - 0.5) * 8,
              ]}
            >
              <sphereGeometry args={[0.05]} />
              <meshStandardMaterial
                color="#ec4899"
                emissive="#ec4899"
                emissiveIntensity={0.8}
              />
            </mesh>
          ))}
        </group>
      </Float>
    </group>
  );
}
