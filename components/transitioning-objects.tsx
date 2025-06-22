"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useScroll, Float, Text3D } from "@react-three/drei"
import type * as THREE from "three"

export function TransitioningObjects() {
  const scroll = useScroll()
  const mainObjectRef = useRef<THREE.Group>(null)
  const dataStreamRef = useRef<THREE.Group>(null)
  const logoRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (scroll && mainObjectRef.current && dataStreamRef.current && logoRef.current) {
      const offset = scroll.offset

      // Main NexusAI core object that travels through sections
      mainObjectRef.current.position.y = -offset * 15
      mainObjectRef.current.position.x = Math.sin(offset * Math.PI * 2) * 2
      mainObjectRef.current.rotation.y = offset * Math.PI * 4

      // Data streams that follow the main object
      dataStreamRef.current.position.y = -offset * 15 + 1
      dataStreamRef.current.rotation.z = state.clock.elapsedTime * 0.5

      // Floating logo that appears in different sections
      logoRef.current.position.y = -offset * 15 - 2
      logoRef.current.scale.setScalar(1 + Math.sin(offset * Math.PI * 8) * 0.2)
    }
  })

  return (
    <>
      {/* Main NexusAI Core Object */}
      <group ref={mainObjectRef}>
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
          <mesh>
            <icosahedronGeometry args={[1]} />
            <meshStandardMaterial
              color="#1e293b"
              metalness={0.9}
              roughness={0.1}
              emissive="#3b82f6"
              emissiveIntensity={0.3}
            />
          </mesh>

          {/* Inner glowing core */}
          <mesh scale={0.7}>
            <sphereGeometry args={[0.5]} />
            <meshStandardMaterial
              color="#00ffff"
              emissive="#00ffff"
              emissiveIntensity={0.8}
              transparent
              opacity={0.6}
            />
          </mesh>
        </Float>
      </group>

      {/* Data Streams */}
      <group ref={dataStreamRef}>
        {Array.from({ length: 8 }).map((_, i) => (
          <Float key={i} speed={1 + i * 0.2} rotationIntensity={0.1}>
            <mesh
              position={[
                Math.cos((i / 8) * Math.PI * 2) * 3,
                Math.sin((i / 8) * Math.PI * 2) * 0.5,
                Math.sin((i / 8) * Math.PI * 2) * 2,
              ]}
            >
              <sphereGeometry args={[0.1]} />
              <meshStandardMaterial
                color="#8b5cf6"
                emissive="#8b5cf6"
                emissiveIntensity={0.6}
              />
            </mesh>
          </Float>
        ))}
      </group>

      {/* Floating NexusAI Logo */}
      <group ref={logoRef}>
        <Float speed={1} rotationIntensity={0.05} floatIntensity={0.1}>
          <Text3D
            font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
            size={0.5}
            height={0.1}
          >
            NEXUS
            <meshStandardMaterial
              color="#ffffff"
              emissive="#3b82f6"
              emissiveIntensity={0.2}
            />
          </Text3D>
        </Float>
      </group>
    </>
  );
}
