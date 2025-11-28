// Central Eye Component (3D) - Using Downloaded GLTF Model
import { useFrame } from '@react-three/fiber'
import { useGLTF, Float } from '@react-three/drei'
import { useRef, useState, useEffect, forwardRef } from 'react'
import * as THREE from 'three'
import { useMousePosition } from '@hooks/useMousePosition'
import { useNavigationStore } from '@store/navigationStore'

const EyeModel = forwardRef(({ onLoad }, ref) => {
  const groupRef = useRef()
  const mousePosition = useMousePosition()
  const { hoveredSegment } = useNavigationStore()
  const [loaded, setLoaded] = useState(false)
  
  // Load the cartoon eye model
  const { scene } = useGLTF('/models/scene.gltf')

  // Expose ref to parent (App)
  useEffect(() => {
    if (groupRef.current && ref) {
      if (typeof ref === 'function') {
        ref(groupRef.current)
      } else {
        ref.current = groupRef.current
      }
    }
  }, [ref])

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

    // If segment is hovered, look at it
    if (hoveredSegment) {
      const angle = (hoveredSegment.angle - 90) * Math.PI / 180
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
})

EyeModel.displayName = 'EyeModel'

// Preload the model
useGLTF.preload('/models/scene.gltf')

const CentralEye = forwardRef(({ onModelLoaded }, ref) => {
  return (
    <EyeModel ref={ref} onLoad={onModelLoaded} />
  )
})

CentralEye.displayName = 'CentralEye'

export default CentralEye
