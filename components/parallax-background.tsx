"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useScroll } from "@react-three/drei"
import * as THREE from "three"

export function ParallaxBackground() {
  const scroll = useScroll()
  const particlesRef = useRef<THREE.Points>(null)
  const geometryRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (scroll && particlesRef.current && geometryRef.current) {
      const offset = scroll.offset

      // Parallax particle movement
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02 + offset * 0.5
      particlesRef.current.position.y = offset * -10

      // Background geometry movement
      geometryRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.02
      geometryRef.current.position.y = offset * -5
    }
  })

  // Enhanced particle field
  const particleCount = 2000
  const positions = new Float32Array(particleCount * 3)
  const colors = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 100
    positions[i * 3 + 1] = (Math.random() - 0.5) * 100
    positions[i * 3 + 2] = (Math.random() - 0.5) * 50

    // Color variation
    const hue = Math.random()
    colors[i * 3] = hue < 0.5 ? 0.2 : 0.5 // R
    colors[i * 3 + 1] = hue < 0.5 ? 0.5 : 0.2 // G
    colors[i * 3 + 2] = 1 // B
  }

  return (
    <>
      {/* Enhanced particle field */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={particleCount} array={colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.05} vertexColors transparent opacity={0.8} sizeAttenuation />
      </points>

      {/* Background geometric shapes */}
      <group ref={geometryRef}>
        {Array.from({ length: 20 }).map((_, i) => (
          <mesh
            key={i}
            position={[(Math.random() - 0.5) * 80, (Math.random() - 0.5) * 80, (Math.random() - 0.5) * 30]}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
          >
            <octahedronGeometry args={[Math.random() * 2 + 0.5]} />
            <meshStandardMaterial
              color={new THREE.Color().setHSL(Math.random() * 0.3 + 0.5, 0.7, 0.5)}
              emissive={new THREE.Color().setHSL(Math.random() * 0.3 + 0.5, 0.5, 0.3)}
              emissiveIntensity={0.2}
              transparent
              opacity={0.3}
              wireframe={Math.random() > 0.7}
            />
          </mesh>
        ))}
      </group>
    </>
  )
}
