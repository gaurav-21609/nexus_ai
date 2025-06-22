"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useScroll, Float } from "@react-three/drei"
import * as THREE from "three"

export function FeaturesArtifacts() {
  const scroll = useScroll()
  const artifactsRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (scroll && artifactsRef.current) {
      const offset = scroll.offset

      // Visible in features section (20% - 40% of scroll)
      const sectionStart = 0.2
      const sectionEnd = 0.4
      const isInSection = offset >= sectionStart && offset <= sectionEnd

      artifactsRef.current.visible = isInSection

      if (isInSection) {
        const sectionProgress = (offset - sectionStart) / (sectionEnd - sectionStart)
        artifactsRef.current.position.y = -20 + sectionProgress * 5

        // Animate feature icons
        artifactsRef.current.children.forEach((child, index) => {
          if (child instanceof THREE.Group) {
            child.rotation.y = state.clock.elapsedTime * (0.5 + index * 0.1)
            child.position.y = Math.sin(state.clock.elapsedTime + index) * 0.5
          }
        })
      }
    }
  })

  const featurePositions = [
    [-4, -18, 2],
    [0, -18, 2],
    [4, -18, 2],
    [-4, -22, 2],
    [0, -22, 2],
    [4, -22, 2],
  ]

  const featureColors = [
    "#fbbf24", // Lightning - yellow
    "#10b981", // Shield - green
    "#8b5cf6", // Brain - purple
    "#3b82f6", // Rocket - blue
    "#6366f1", // Globe - indigo
    "#ec4899", // Users - pink
  ]

  return (
    <group ref={artifactsRef}>
      {featurePositions.map((position, i) => (
        <group key={i} position={position as [number, number, number]}>
          <Float speed={1 + i * 0.2} rotationIntensity={0.3} floatIntensity={0.4}>
            {/* Feature Icon Container */}
            <mesh>
              <boxGeometry args={[1.5, 1.5, 0.3]} />
              <meshStandardMaterial
                color="#1e293b"
                metalness={0.8}
                roughness={0.2}
                emissive={featureColors[i]}
                emissiveIntensity={0.1}
              />
            </mesh>

            {/* Glowing Icon */}
            <mesh position={[0, 0, 0.2]}>
              <sphereGeometry args={[0.3]} />
              <meshStandardMaterial color={featureColors[i]} emissive={featureColors[i]} emissiveIntensity={0.8} />
            </mesh>

            {/* Data connections */}
            {Array.from({ length: 4 }).map((_, j) => (
              <mesh key={j} position={[Math.cos((j / 4) * Math.PI * 2) * 1, Math.sin((j / 4) * Math.PI * 2) * 1, 0.1]}>
                <sphereGeometry args={[0.05]} />
                <meshStandardMaterial color={featureColors[i]} emissive={featureColors[i]} emissiveIntensity={0.6} />
              </mesh>
            ))}
          </Float>
        </group>
      ))}

      {/* Connecting Network Lines */}
      <Float speed={0.5} rotationIntensity={0.1}>
        <group position={[0, -20, 1]}>
          {Array.from({ length: 6 }).map((_, i) => (
            <mesh key={i} position={[0, 0, 0]} rotation={[0, 0, (i / 6) * Math.PI * 2]}>
              <cylinderGeometry args={[0.02, 0.02, 8]} />
              <meshStandardMaterial
                color="#3b82f6"
                emissive="#3b82f6"
                emissiveIntensity={0.3}
                transparent
                opacity={0.6}
              />
            </mesh>
          ))}
        </group>
      </Float>
    </group>
  )
}
