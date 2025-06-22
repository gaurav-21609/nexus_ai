"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Text3D, Float, Html, Environment, PerspectiveCamera } from "@react-three/drei"
import { Robot } from "./robot"
import { FloatingElements } from "./floating-elements"
import { HolographicUI } from "./holographic-ui"
import type * as THREE from "three"

export function HeroScene() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05
    }
  })

  return (
    <>
      <Environment preset="night" />
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />

      {/* Ambient and directional lighting */}
      <ambientLight intensity={0.3} color="#4338ca" />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#8b5cf6" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#06b6d4" />

      <group ref={groupRef}>
        {/* 3D Hero Text */}
        <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
          <Text3D
            font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
            size={1.2}
            height={0.2}
            position={[-4, 2, 0]}
          >
            FUTURE IS NOW
            <meshStandardMaterial
              color="#ffffff"
              emissive="#4338ca"
              emissiveIntensity={0.2}
            />
          </Text3D>
        </Float>

        {/* Robot Character */}
        <Robot position={[3, -1, 0]} />

        {/* Holographic UI */}
        <HolographicUI position={[2, 1, 1]} />

        {/* Floating Elements */}
        <FloatingElements />

        {/* HTML Overlay Content */}
        <Html
          position={[-4, -2, 0]}
          transform
          occlude
          className="w-96 pointer-events-auto"
        >
          <div className="text-white space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Experience the next generation of digital innovation with our
              cutting-edge platform
            </p>
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-xl hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300">
              <span className="relative z-10 text-white font-semibold">
                Launch Experience
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300" />
            </button>
          </div>
        </Html>
      </group>
    </>
  );
}
