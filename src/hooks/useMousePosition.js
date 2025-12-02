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
          }
        } else if (typeof DeviceOrientationEvent !== 'undefined') {
          // Non-iOS devices with gyroscope
          isGyroActive = true
          setHasGyro(true)
        }
      } catch (error) {
        console.log('Gyroscope not available:', error)
      }
    }

    // Request permission on first touch for iOS
    const handleFirstTouch = () => {
      if (!isGyroActive) {
        checkGyroSupport()
      }
      window.removeEventListener('touchstart', handleFirstTouch)
    }

    window.addEventListener('touchstart', handleFirstTouch)

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
      // beta: rotation around X axis (-180 to 180) - tilt forward/backward
      // gamma: rotation around Y axis (-90 to 90) - tilt left/right
      let beta = event.beta || 0  // -180 to 180
      let gamma = event.gamma || 0  // -90 to 90

      // Normalize to 0-1 range (adjust sensitivity as needed)
      // Divide by 90 to get reasonable range, add 0.5 to center
      const x = (gamma / 90) * 0.4 + 0.5  // ±40% sensitivity
      const y = (beta / 90) * 0.4 + 0.5   // ±40% sensitivity

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
      window.removeEventListener('touchstart', handleFirstTouch)
    }
  }, [])

  return position
}
