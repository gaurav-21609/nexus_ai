"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import * as THREE from "three"

interface HolographicDashboardProps {
  position: [number, number, number]
}

export function HolographicDashboard({ position }: HolographicDashboardProps) {
  const dashboardRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (dashboardRef.current) {
      dashboardRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.05} floatIntensity={0.15}>
      <group ref={dashboardRef} position={position}>
        {/* Main Dashboard Panel */}
        <mesh>
          <planeGeometry args={[3, 2]} />
          <meshStandardMaterial
            color="#1e40af"
            transparent
            opacity={0.3}
            emissive="#3b82f6"
            emissiveIntensity={0.2}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Data Visualization Elements */}
        <mesh position={[-0.8, 0.3, 0.1]}>
          <boxGeometry args={[0.6, 0.8, 0.05]} />
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.3} transparent opacity={0.7} />
        </mesh>

        <mesh position={[0.8, 0.3, 0.1]}>
          <cylinderGeometry args={[0.3, 0.3, 0.05]} />
          <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.3} transparent opacity={0.7} />
        </mesh>

        {/* Floating Data Points */}
        {Array.from({ length: 8 }).map((_, i) => (
          <mesh
            key={i}
            position={[(Math.random() - 0.5) * 2.5, (Math.random() - 0.5) * 1.5, 0.2 + Math.random() * 0.3]}
          >
            <sphereGeometry args={[0.03]} />
            <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.8} />
          </mesh>
        ))}
      </group>
    </Float>
  )
}
