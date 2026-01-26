import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useNavigationStore } from './store/navigationStore'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/react"

// Components
import CircularNav from './components/Navigation/CircularNav'
import CentralEye from './components/3D/Central3D'
import LandingGreeting from './components/landing/LandingGreeting'
import CVButton from './components/shared/CVButton'
import ContentSections from './components/sections/ContentSections'
import LoadingScreen from './components/shared/LoadingScreen'
import RectangularNav from './components/Navigation/RectangularNav'

function App() {
  const { activeSection, setActiveSection } = useNavigationStore()
  const [isModelLoaded, setIsModelLoaded] = useState(false)
  const [isTransforming, setIsTransforming] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Handle segment click
  const handleSegmentClick = (sectionId) => {
    setIsTransforming(true)
    setActiveSection(sectionId)

    // Scroll to section
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      setIsTransforming(false)
    }, 400)
  }

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight
      const scrollY = window.scrollY
      // Calculate progress from 0 to 1 based on first viewport
      const progress = Math.min(scrollY / viewportHeight, 1)
      setScrollProgress(progress)

      // Determine which section is currently in view
      const sections = ['about', 'work', 'skills', 'contact']
      let currentSection = null

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Check if section is in the upper half of viewport
          if (rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2) {
            currentSection = sectionId
            break
          }
        }
      }

      // Update active section if changed
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Run once on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection, setActiveSection])

  // Handle model loaded
  const handleModelLoaded = () => {
    setTimeout(() => {
      setIsModelLoaded(true)
    }, 500) // Small delay for smooth transition
  }

  // Fallback: If model takes too long, show content anyway
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isModelLoaded) {
        setIsModelLoaded(true)
      }
    }, 5000) // 5 seconds max loading time

    return () => clearTimeout(timeout)
  }, [isModelLoaded])

  return (
    <div className="app" style={{
      minHeight: '100vh',
      background: '#ffffff'
    }}>
      {/* Loading Screen */}
      <AnimatePresence>
        {!isModelLoaded && <LoadingScreen />}
      </AnimatePresence>

      {/* Landing State (Circular Navigation) - Full screen section */}
      {isModelLoaded && (
        <motion.div
          className="landing-state"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'relative',
            minHeight: '100vh',
            background: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Greeting - fades out on scroll */}
          <motion.div
            style={{
              opacity: 1 - scrollProgress,
              pointerEvents: scrollProgress > 0.5 ? 'none' : 'auto'
            }}
          >
            <LandingGreeting isTransforming={isTransforming} />
          </motion.div>

          {/* CV Button - fades out on scroll */}
          <motion.div
            style={{
              opacity: 1 - scrollProgress,
              pointerEvents: scrollProgress > 0.5 ? 'none' : 'auto'
            }}
          >
            <CVButton />
          </motion.div>

          {/* Central Eye + Circular Menu - fades out on scroll */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 1 - scrollProgress,
              pointerEvents: scrollProgress > 0.5 ? 'none' : 'auto'
            }}
          >
            <CentralEye onModelLoaded={handleModelLoaded} />
            <CircularNav onSegmentClick={handleSegmentClick} />
          </motion.div>

          {/* Scroll indicator - fades out on scroll */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: (1 - scrollProgress) * 0.6 }}
            transition={{ delay: 1.5 }}
            style={{
              position: 'absolute',
              bottom: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
              color: '#000000',
              fontSize: '14px',
              textAlign: 'center',
              pointerEvents: 'none'
            }}
          >
            <div>Scroll or click to explore</div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ fontSize: '20px', marginTop: '8px' }}
            >
              ↓
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      {/* Rectangular Navigation - appears on scroll */}
      <RectangularNav scrollProgress={scrollProgress} />

      {/* Content Sections (always present below landing) */}
      <div style={{ background: '#ffffff' }}>
        <ContentSections />
      </div>

      {/* Vercel data */}
      <Analytics />
      <SpeedInsights />
    </div>
  )
}

export default App