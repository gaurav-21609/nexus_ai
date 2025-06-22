"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useScroll, Float } from "@react-three/drei"
import * as THREE from "three"

export function HeroArtifacts() {
  const scroll = useScroll()
  const artifactsRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (scroll && artifactsRef.current) {
      const offset = scroll.offset

      // Only visible in hero section (first 20% of scroll)
      artifactsRef.current.visible = offset < 0.2
      artifactsRef.current.position.y = offset * -5

      // Fade out as we scroll
      artifactsRef.current.children.forEach((child) => {
        if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
          child.material.opacity = Math.max(0, 1 - offset * 5)
        }
      })
    }
  })

  return (
    <group ref={artifactsRef}>
      {/* Digital Assistant Hologram */}
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
        <group position={[4, 0, -2]}>
          <mesh>
            <cylinderGeometry args={[0.8, 1, 2]} />
            <meshStandardMaterial
              color="#1e293b"
              metalness={0.8}
              roughness={0.2}
              emissive="#3b82f6"
              emissiveIntensity={0.1}
              transparent
            />
          </mesh>

          {/* Holographic interface */}
          <mesh position={[0, 1.5, 0]}>
            <planeGeometry args={[2, 1.5]} />
            <meshStandardMaterial
              color="#00ffff"
              transparent
              opacity={0.3}
              emissive="#00ffff"
              emissiveIntensity={0.2}
            />
          </mesh>
        </group>
      </Float>

      {/* Floating UI Elements */}
      {Array.from({ length: 12 }).map((_, i) => (
        <Float key={i} speed={0.5 + i * 0.1} rotationIntensity={0.05}>
          <mesh position={[(Math.random() - 0.5) * 15, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8]}>
            <boxGeometry args={[0.2, 0.2, 0.05]} />
            <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={0.3} transparent />
          </mesh>
        </Float>
      ))}

      {/* Energy Rings */}
      {Array.from({ length: 3 }).map((_, i) => (
        <Float key={i} speed={1 + i * 0.3} rotationIntensity={0.2}>
          <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[2 + i, 0.05]} />
            <meshStandardMaterial
              color="#00ffff"
              emissive="#00ffff"
              emissiveIntensity={0.5}
              transparent
              opacity={0.6 - i * 0.1}
            />
          </mesh>
        </Float>
      ))}
    </group>
  )
}
