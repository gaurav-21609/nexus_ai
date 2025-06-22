"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useScroll, Float } from "@react-three/drei"
import type * as THREE from "three"

export function ProductArtifacts() {
  const scroll = useScroll()
  const artifactsRef = useRef<THREE.Group>(null)
  const deviceRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (scroll && artifactsRef.current && deviceRef.current) {
      const offset = scroll.offset

      // Visible in product section (40% - 60% of scroll)
      const sectionStart = 0.4
      const sectionEnd = 0.6
      const isInSection = offset >= sectionStart && offset <= sectionEnd

      artifactsRef.current.visible = isInSection

      if (isInSection) {
        const sectionProgress = (offset - sectionStart) / (sectionEnd - sectionStart)
        artifactsRef.current.position.y = -40 + sectionProgress * 5

        // Rotate the main device
        deviceRef.current.rotation.y = state.clock.elapsedTime * 0.3
        deviceRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
      }
    }
  })

  return (
    <group ref={artifactsRef}>
      {/* Main Product Device */}
      <group ref={deviceRef} position={[0, -40, 0]}>
        <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
          <mesh>
            <boxGeometry args={[3, 4, 0.3]} />
            <meshStandardMaterial
              color="#0f172a"
              metalness={0.9}
              roughness={0.1}
              emissive="#1e40af"
              emissiveIntensity={0.2}
            />
          </mesh>

          {/* Screen */}
          <mesh position={[0, 0, 0.16]}>
            <planeGeometry args={[2.5, 3.5]} />
            <meshStandardMaterial color="#000000" emissive="#3b82f6" emissiveIntensity={0.4} />
          </mesh>

          {/* Interface Elements */}
          {Array.from({ length: 9 }).map((_, i) => (
            <mesh key={i} position={[((i % 3) - 1) * 0.6, (Math.floor(i / 3) - 1) * 0.8, 0.17]}>
              <boxGeometry args={[0.4, 0.4, 0.02]} />
              <meshStandardMaterial
                color="#00ffff"
                emissive="#00ffff"
                emissiveIntensity={0.5}
                transparent
                opacity={0.8}
              />
            </mesh>
          ))}
        </Float>
      </group>

      {/* Orbiting Data Satellites */}
      {Array.from({ length: 6 }).map((_, i) => (
        <Float key={i} speed={1.5 + i * 0.2} rotationIntensity={0.2}>
          <mesh
            position={[
              Math.cos((i / 6) * Math.PI * 2) * 5,
              -40 + Math.sin((i / 6) * Math.PI * 2) * 2,
              Math.sin((i / 6) * Math.PI * 2) * 3,
            ]}
          >
            <octahedronGeometry args={[0.3]} />
            <meshStandardMaterial
              color="#8b5cf6"
              emissive="#8b5cf6"
              emissiveIntensity={0.6}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        </Float>
      ))}

      {/* Holographic Projections */}
      <Float speed={0.8} rotationIntensity={0.05}>
        <group position={[3, -38, 2]}>
          <mesh>
            <coneGeometry args={[1, 2]} />
            <meshStandardMaterial
              color="#06b6d4"
              transparent
              opacity={0.3}
              emissive="#06b6d4"
              emissiveIntensity={0.2}
            />
          </mesh>
        </group>
      </Float>

      <Float speed={0.6} rotationIntensity={0.05}>
        <group position={[-3, -42, 2]}>
          <mesh>
            <cylinderGeometry args={[0.8, 0.8, 1.5]} />
            <meshStandardMaterial
              color="#ec4899"
              transparent
              opacity={0.3}
              emissive="#ec4899"
              emissiveIntensity={0.2}
            />
          </mesh>
        </group>
      </Float>
    </group>
  )
}
