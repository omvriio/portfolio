// Dedicated hook for gyroscope/device orientation
import { useState, useEffect, useRef } from 'react'

export const useDeviceOrientation = () => {
  const [coords, setCoords] = useState({ x: 0.5, y: 0.5 })
  const [gyroActive, setGyroActive] = useState(false)
  const [gyroPermission, setGyroPermission] = useState('unknown') // 'granted' | 'denied' | 'unknown'
  const isPermissionRequested = useRef(false)

  useEffect(() => {
    let isListening = false

    // Handle device orientation
    const handleDeviceOrientation = (event) => {
      let beta = event.beta || 0   // -180 to 180 (tilt forward/backward)
      let gamma = event.gamma || 0  // -90 to 90 (tilt left/right)

      // Normalize to 0-1 range with 2x sensitivity
      const x = (gamma / 90) * 0.8 + 0.5
      const y = (beta / 90) * 0.8 + 0.5

      setCoords({
        x: Math.max(0, Math.min(1, x)),
        y: Math.max(0, Math.min(1, y))
      })
    }

    // Request iOS permission
    const requestPermission = async () => {
      if (isPermissionRequested.current) return

      isPermissionRequested.current = true

      // iOS 13+
      if (
        typeof DeviceOrientationEvent !== 'undefined' &&
        typeof DeviceOrientationEvent.requestPermission === 'function'
      ) {
        try {
          const permission = await DeviceOrientationEvent.requestPermission()
          if (permission === 'granted') {
            setGyroPermission('granted')
            setGyroActive(true)
            isListening = true
            window.addEventListener('deviceorientation', handleDeviceOrientation)
            console.log('✓ iOS Gyroscope permission granted')
          } else {
            setGyroPermission('denied')
            console.log('✗ iOS Gyroscope permission denied')
          }
        } catch (error) {
          setGyroPermission('denied')
          console.error('iOS permission request error:', error)
        }
      }
      // Non-iOS with deviceorientation support
      else if (typeof DeviceOrientationEvent !== 'undefined') {
        try {
          setGyroPermission('granted')
          setGyroActive(true)
          isListening = true
          window.addEventListener('deviceorientation', handleDeviceOrientation)
          console.log('✓ Android/Non-iOS Gyroscope activated')
        } catch (error) {
          setGyroPermission('denied')
          console.error('Gyroscope activation error:', error)
        }
      } else {
        setGyroPermission('denied')
        console.log('✗ Gyroscope not supported on this device')
      }
    }

    // Trigger permission on first interaction
    const handleUserInteraction = () => {
      requestPermission()
      // Remove listeners after first attempt
      document.removeEventListener('touchstart', handleUserInteraction)
      document.removeEventListener('click', handleUserInteraction)
    }

    // Also request on visibility/focus change
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && gyroPermission === 'unknown') {
        requestPermission()
      }
    }

    const handleWindowFocus = () => {
      if (gyroPermission === 'unknown') {
        requestPermission()
      }
    }

    // Attach listeners
    document.addEventListener('touchstart', handleUserInteraction, { once: true })
    document.addEventListener('click', handleUserInteraction, { once: true })
    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('focus', handleWindowFocus)

    // Cleanup
    return () => {
      if (isListening) {
        window.removeEventListener('deviceorientation', handleDeviceOrientation)
      }
      document.removeEventListener('touchstart', handleUserInteraction)
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('focus', handleWindowFocus)
    }
  }, [gyroPermission])

  return {
    coords,
    gyroActive,
    gyroPermission,
    isSupported: typeof DeviceOrientationEvent !== 'undefined'
  }
}
