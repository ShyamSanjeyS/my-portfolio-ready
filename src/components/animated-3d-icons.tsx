import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
import { motion } from 'framer-motion'
import { Suspense } from 'react'

function FloatingCube({ position, color }: { position: [number, number, number], color: string }) {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </Float>
  )
}

function FloatingSphere({ position, color }: { position: [number, number, number], color: string }) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={position}>
        <sphereGeometry args={[0.7]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
    </Float>
  )
}

function FloatingTorus({ position, color }: { position: [number, number, number], color: string }) {
  return (
    <Float speed={1} rotationIntensity={2} floatIntensity={1.5}>
      <mesh position={position}>
        <torusGeometry args={[0.8, 0.3, 16, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </Float>
  )
}

export const Animated3DScene = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-full w-full"
    >
      <Canvas camera={{ position: [5, 5, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <directionalLight position={[-10, -10, -5]} intensity={0.3} />
        <Suspense fallback={null}>
          <FloatingCube position={[-2, 0, 0]} color="#a855f7" />
          <FloatingSphere position={[2, 0, 0]} color="#3b82f6" />
          <FloatingTorus position={[0, 2, 0]} color="#06b6d4" />
          {/* Additional floating elements */}
          <FloatingCube position={[0, -2, 2]} color="#f59e0b" />
          <FloatingSphere position={[-1, 1, -2]} color="#ef4444" />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </motion.div>
  )
}