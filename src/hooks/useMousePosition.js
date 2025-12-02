// Custom hook for mouse/gyroscope position tracking
import { useState, useEffect } from 'react'

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0.5, y: 0.5 })
  const [hasGyro, setHasGyro] = useState(false)

  useEffect(() => {
    let isGyroActive = false

    // Check for gyroscope support
    const checkGyroSupport = async () => {
      try {
        // iOS 13+ requires permission request
        if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
          const permission = await DeviceOrientationEvent.requestPermission()
          if (permission === 'granted') {
            isGyroActive = true
            setHasGyro(true)
            console.log('Gyroscope permission granted')
          }
        } else if (typeof DeviceOrientationEvent !== 'undefined') {
          // Non-iOS devices with gyroscope
          isGyroActive = true
          setHasGyro(true)
          console.log('Gyroscope available (non-iOS)')
        }
      } catch (error) {
        console.log('Gyroscope error:', error)
      }
    }

    // Request permission on first interaction
    const handleFirstInteraction = () => {
      if (!isGyroActive) {
        checkGyroSupport()
      }
      document.removeEventListener('touchstart', handleFirstInteraction)
      document.removeEventListener('click', handleFirstInteraction)
    }

    // Add both touchstart and click for better compatibility
    document.addEventListener('touchstart', handleFirstInteraction, { once: true })
    document.addEventListener('click', handleFirstInteraction, { once: true })

    // Mouse move handler (desktop)
    const handleMouseMove = (e) => {
      if (!isGyroActive) {
        setPosition({
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight
        })
      }
    }

    // Gyroscope handler (mobile)
    const handleDeviceOrientation = (event) => {
      if (!isGyroActive) return

      // beta: rotation around X axis (-180 to 180) - tilt forward/backward
      // gamma: rotation around Y axis (-90 to 90) - tilt left/right
      let beta = event.beta || 0  // -180 to 180
      let gamma = event.gamma || 0  // -90 to 90

      // Normalize to 0-1 range with 2x scale (adjust sensitivity as needed)
      // Divide by 90 to get reasonable range, add 0.5 to center, multiply by 2 for more movement
      const x = (gamma / 90) + 0.5  // ±80% sensitivity (2x)
      const y = (beta / 90)  + 0.5   // ±80% sensitivity (2x)

      setPosition({
        x: Math.max(0, Math.min(1, x)),
        y: Math.max(0, Math.min(1, y))
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('deviceorientation', handleDeviceOrientation)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('deviceorientation', handleDeviceOrientation)
      document.removeEventListener('touchstart', handleFirstInteraction)
      document.removeEventListener('click', handleFirstInteraction)
    }
  }, [])

  return position
}
