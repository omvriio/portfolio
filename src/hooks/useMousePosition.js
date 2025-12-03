// Custom hook for mouse position tracking (desktop fallback)
import { useState, useEffect } from 'react'
import { useDeviceOrientation } from './useDeviceOrientation'

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0.5, y: 0.5 })
  const { coords: gyroCoords, gyroActive } = useDeviceOrientation()
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    // Detect if mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
    setIsDesktop(!isMobile)
  }, [])

  useEffect(() => {
    // On desktop, use mouse. On mobile with gyro, use gyro. Otherwise use mouse fallback.
    if (isDesktop || !gyroActive) {
      const handleMouseMove = (e) => {
        setPosition({
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight
        })
      }

      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    } else {
      // Use gyroscope coordinates
      setPosition(gyroCoords)
    }
  }, [isDesktop, gyroActive, gyroCoords])

  return position
}