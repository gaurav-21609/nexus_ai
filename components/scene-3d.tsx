"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import type * as THREE from "three"

export function Scene3D() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.02
    }
  })

  return (
    <>
      <Environment preset="night" />
      <ambientLight intensity={0.2} color="#1e40af" />
      <directionalLight position={[10, 10, 5]} intensity={0.5} color="#3b82f6" />

      <group ref={groupRef}>
        {/* Background particles */}
        {Array.from({ length: 100 }).map((_, i) => (
          <mesh key={i} position={[(Math.random() - 0.5) * 50, (Math.random() - 0.5) * 50, (Math.random() - 0.5) * 30]}>
            <sphereGeometry args={[0.02]} />
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
    </>
  )
}
