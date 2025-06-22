"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useScroll, Float, Text3D } from "@react-three/drei"
import * as THREE from "three"

export function TestimonialArtifacts() {
  const scroll = useScroll()
  const artifactsRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (scroll && artifactsRef.current) {
      const offset = scroll.offset

      // Visible in testimonials section (60% - 80% of scroll)
      const sectionStart = 0.6
      const sectionEnd = 0.8
      const isInSection = offset >= sectionStart && offset <= sectionEnd

      artifactsRef.current.visible = isInSection

      if (isInSection) {
        const sectionProgress = (offset - sectionStart) / (sectionEnd - sectionStart)
        artifactsRef.current.position.y = -60 + sectionProgress * 5

        // Animate testimonial bubbles
        artifactsRef.current.children.forEach((child, index) => {
          if (child instanceof THREE.Group) {
            child.position.y += Math.sin(state.clock.elapsedTime + index * 2) * 0.1
            child.rotation.y = Math.sin(state.clock.elapsedTime * 0.3 + index) * 0.1
          }
        })
      }
    }
  })

  const testimonialPositions = [
    [-4, -60, 2],
    [0, -58, 3],
    [4, -62, 1],
  ]

  const avatarColors = ["#3b82f6", "#8b5cf6", "#ec4899"]

  return (
    <group ref={artifactsRef}>
      {testimonialPositions.map((position, i) => (
        <group key={i} position={position as [number, number, number]}>
          <Float
            speed={1 + i * 0.3}
            rotationIntensity={0.1}
            floatIntensity={0.3}
          >
            {/* Avatar Bubble */}
            <mesh>
              <sphereGeometry args={[0.8]} />
              <meshStandardMaterial
                color={avatarColors[i]}
                transparent
                opacity={0.7}
                emissive={avatarColors[i]}
                emissiveIntensity={0.2}
              />
            </mesh>

            {/* Inner Avatar */}
            <mesh scale={0.6}>
              <sphereGeometry args={[0.5]} />
              <meshStandardMaterial
                color="#ffffff"
                emissive={avatarColors[i]}
                emissiveIntensity={0.1}
              />
            </mesh>

            {/* Speech Bubble */}
            <group position={[1.5, 0.5, 0]}>
              <mesh>
                <boxGeometry args={[2, 1, 0.1]} />
                <meshStandardMaterial
                  color="#1e293b"
                  transparent
                  opacity={0.8}
                  emissive="#3b82f6"
                  emissiveIntensity={0.1}
                />
              </mesh>

              {/* Quote marks */}
              <Text3D
                font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
                size={0.2}
                height={0.02}
                position={[-0.8, 0.2, 0.06]}
              >
                "
                <meshStandardMaterial
                  color={avatarColors[i]}
                  emissive={avatarColors[i]}
                  emissiveIntensity={0.3}
                />
              </Text3D>
            </group>
          </Float>
        </group>
      ))}

      {/* Floating Stars/Reviews */}
      {Array.from({ length: 15 }).map((_, i) => (
        <Float key={i} speed={0.5 + i * 0.1} rotationIntensity={0.2}>
          <mesh
            position={[
              (Math.random() - 0.5) * 12,
              -60 + (Math.random() - 0.5) * 8,
              (Math.random() - 0.5) * 6,
            ]}
          >
            <coneGeometry args={[0.1, 0.3]} />
            <meshStandardMaterial
              color="#fbbf24"
              emissive="#fbbf24"
              emissiveIntensity={0.8}
            />
          </mesh>
        </Float>
      ))}

      {/* Trust Network Visualization */}
      <Float speed={0.3} rotationIntensity={0.05}>
        <group position={[0, -60, -2]}>
          {Array.from({ length: 8 }).map((_, i) => (
            <mesh
              key={i}
              position={[
                Math.cos((i / 8) * Math.PI * 2) * 3,
                Math.sin((i / 8) * Math.PI * 2) * 3,
                0,
              ]}
              rotation={[0, 0, (i / 8) * Math.PI * 2]}
            >
              <cylinderGeometry args={[0.02, 0.02, 3]} />
              <meshStandardMaterial
                color="#10b981"
                emissive="#10b981"
                emissiveIntensity={0.3}
                transparent
                opacity={0.6}
              />
            </mesh>
          ))}
        </group>
      </Float>
    </group>
  );
}
