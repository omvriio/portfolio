import { AnimatePresence, motion } from 'framer-motion'
import { useRef, useEffect, Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Preload } from '@react-three/drei'
import { useNavigationStore } from './store/navigationStore'
import { useThemeStore } from './store/themeStore'
import { useSceneTransitions } from './hooks/useSceneTransitions'
import { useScrollNavigation } from './hooks/useScrollNavigation'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/react"

// Components
import CircularNav from './components/Navigation/CircularNav'
import CentralEye from './components/3D/CentralEye'
import LandingGreeting from './components/landing/LandingGreeting'
import CVButton from './components/shared/CVButton'
import ContentSections from './components/sections/ContentSections'
import LoadingScreen from './components/shared/LoadingScreen'
import ThemeToggle from './components/shared/ThemeToggle'

function App() {
  // 3D Scene refs for camera and eye model
  const cameraRef = useRef()
  const eyeRef = useRef()

  // State from Zustand stores
  const { activeSection } = useNavigationStore()
  const { isDarkMode } = useThemeStore()
  
  // Local component state
  const [isModelLoaded, setIsModelLoaded] = useState(false)

  // Get the transition animation function from hook
  const { transitionTo } = useSceneTransitions(cameraRef, eyeRef)

  // Enable scroll-based navigation
  useScrollNavigation()

  // Listen for section changes and trigger GSAP animations
  useEffect(() => {
    if (transitionTo && isModelLoaded) {
      transitionTo(activeSection)
    }
  }, [activeSection, transitionTo, isModelLoaded])

  // Handle model loaded callback
  const handleModelLoaded = () => {
    console.log('3D Model loaded')
    setTimeout(() => {
      setIsModelLoaded(true)
    }, 500)
  }

  // Fallback: If model takes too long, show content anyway
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isModelLoaded) {
        console.log('Loading timeout - showing content anyway')
        setIsModelLoaded(true)
      }
    }, 5000) // 5 seconds max loading time

    return () => clearTimeout(timeout)
  }, [isModelLoaded])

  return (
    <div className="app" style={{
      minHeight: '100vh',
      background: isDarkMode ? '#0a0a0a' : '#ffffff',
      transition: 'background 0.3s ease'
    }}>
      {/* Loading Screen */}
      <AnimatePresence>
        {!isModelLoaded && <LoadingScreen />}
      </AnimatePresence>

      {/* Main 3D Scene Canvas - Always rendered but contained */}
      {isModelLoaded && (
        <motion.div
          className="canvas-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            zIndex: 0,
            background: isDarkMode ? '#0a0a0a' : '#ffffff',
            transition: 'background 0.3s ease',
            pointerEvents: 'none'
          }}
        >
          <Suspense fallback={null}>
            <Canvas
              camera={{ position: [0, 0, 5], fov: 75 }}
              style={{ width: '100%', height: '100%' }}
              gl={{ antialias: true, alpha: true }}
            >
              {/* Lighting setup */}
              <ambientLight intensity={1.5} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <pointLight position={[-5, 0, 5]} intensity={0.8} color="#00D9FF" />
              <pointLight position={[5, 0, -5]} intensity={0.5} color="#8B5CF6" />
              
              {/* Camera ref for animation */}
              <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 5]} fov={75} />
              
              {/* Central Eye Model ref for animation */}
              <CentralEye ref={eyeRef} onModelLoaded={handleModelLoaded} />
              
              <Preload all />
            </Canvas>
          </Suspense>
        </motion.div>
      )}

      {/* UI Overlay (Circular Nav + Content) - Fixed on top of canvas */}
      {isModelLoaded && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 1, pointerEvents: 'none' }}>
          {/* Circular Navigation */}
          <div style={{ pointerEvents: 'auto' }}>
            <CircularNav />
          </div>
          
          {/* Content Sections */}
          <div style={{ pointerEvents: 'auto', height: '100%', overflowY: 'auto' }}>
            <ContentSections />
          </div>
        </div>
      )}

      {/* Vercel analytics */}
      <Analytics />
      <SpeedInsights />
      
      {/* Theme Toggle */}
      <ThemeToggle />
    </div>
  )
}

export default App
