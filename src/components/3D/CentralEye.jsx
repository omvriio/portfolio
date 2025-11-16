// Central Eye Component (3D) - Using Downloaded GLTF Model
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Float } from '@react-three/drei'
import { useRef, Suspense, useState, useEffect } from 'react'
import * as THREE from 'three'
import { useMousePosition } from '@hooks/useMousePosition'
import { useNavigationStore } from '@store/navigationStore'

function EyeModel({ onLoad }) {
  const groupRef = useRef()
  const mousePosition = useMousePosition()
  const { hoveredSegment } = useNavigationStore()
  const [loaded, setLoaded] = useState(false)
  
  // Load the cartoon eye model
  const { scene } = useGLTF('/models/scene.gltf')

  // Notify parent when model is loaded
  useEffect(() => {
    if (scene && !loaded) {
      console.log('3D Eye Model Loaded!')
      setLoaded(true)
      if (onLoad) {
        onLoad()
      }
    }
  }, [scene, loaded, onLoad])

  useFrame(() => {
    if (!groupRef.current) return

    // Eye follows cursor or looks at hovered segment
    let targetX = (mousePosition.x - 0.5) * 0.5
    let targetY = (mousePosition.y - 0.5) * 0.5

    // If segment is hovered, look at it (subtract 90 to match segment positioning)
    if (hoveredSegment) {
      const angle = (hoveredSegment.angle - 90) * Math.PI / 180  // Subtract 90 degrees
      targetX = Math.cos(angle) * 0.5
      targetY = Math.sin(angle) * 0.5
    }

    // Smooth rotation
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetX * Math.PI * 0.3,
      0.1
    )
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetY * Math.PI * 0.3,
      0.1
    )
  })

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={groupRef}>
        <primitive 
          object={scene.clone()} 
          scale={4}
          position={[0, -2, 0]}
        />
      </group>
    </Float>
  )
}

// Simple loading placeholder (minimalist)
function Loader() {
  return (
    <mesh>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial color="#000000" wireframe opacity={0.1} transparent />
    </mesh>
  )
}

// Preload the model
useGLTF.preload('/models/scene.gltf')

const CentralEye = ({ onModelLoaded }) => {
  return (
    <div style={{
      position: 'fixed',
      width: '30em',
      height: '30em',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 5,
      pointerEvents: 'none'
    }}>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Lighting */}
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <pointLight position={[-5, 0, 5]} intensity={0.8} color="#00D9FF" />
        <pointLight position={[5, 0, -5]} intensity={0.5} color="#8B5CF6" />
        
        {/* Eye Model with loading fallback */}
        <Suspense fallback={<Loader />}>
          <EyeModel onLoad={onModelLoaded} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default CentralEye
