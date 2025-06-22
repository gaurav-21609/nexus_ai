"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import type * as THREE from "three"

interface InteractiveProductProps {
  activeFeature: number
}

export function InteractiveProduct({ activeFeature }: InteractiveProductProps) {
  const productRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (productRef.current) {
      productRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  const getFeatureColor = () => {
    const colors = ["#3b82f6", "#8b5cf6", "#ec4899"]
    return colors[activeFeature] || colors[0]
  }

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color={getFeatureColor()} />

      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
        <group ref={productRef}>
          {/* Main Product Device */}
          <mesh>
            <boxGeometry args={[2, 3, 0.2]} />
            <meshStandardMaterial
              color="#1e293b"
              metalness={0.8}
              roughness={0.2}
              emissive={getFeatureColor()}
              emissiveIntensity={0.1}
            />
          </mesh>

          {/* Screen */}
          <mesh position={[0, 0, 0.11]}>
            <planeGeometry args={[1.6, 2.4]} />
            <meshStandardMaterial color="#000000" emissive={getFeatureColor()} emissiveIntensity={0.3} />
          </mesh>

          {/* Feature Indicators */}
          {Array.from({ length: 3 }).map((_, i) => (
            <mesh key={i} position={[0, 0.8 - i * 0.8, 0.12]} scale={activeFeature === i ? 1.2 : 1}>
              <circleGeometry args={[0.1]} />
              <meshStandardMaterial
                color={activeFeature === i ? getFeatureColor() : "#64748b"}
                emissive={activeFeature === i ? getFeatureColor() : "#000000"}
                emissiveIntensity={activeFeature === i ? 0.5 : 0}
              />
            </mesh>
          ))}

          {/* Floating Elements */}
          {Array.from({ length: 6 }).map((_, i) => (
            <mesh
              key={i}
              position={[
                Math.cos((i / 6) * Math.PI * 2) * 3,
                Math.sin((i / 6) * Math.PI * 2) * 2,
                Math.sin((i / 6) * Math.PI * 2) * 1,
              ]}
            >
              <sphereGeometry args={[0.05]} />
              <meshStandardMaterial color={getFeatureColor()} emissive={getFeatureColor()} emissiveIntensity={0.8} />
            </mesh>
          ))}
        </group>
      </Float>
    </>
  )
}
