// Debug overlay for gyroscope & device testing
import { useDeviceOrientation } from '@hooks/useDeviceOrientation'
import { useMousePosition } from '@hooks/useMousePosition'
import { useState, useEffect } from 'react'

export const GyroDebugOverlay = () => {
  const { coords: gyroCoords, gyroActive, gyroPermission } = useDeviceOrientation()
  const mouseCoords = useMousePosition()
  const [showDebug, setShowDebug] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
    setIsMobile(checkMobile)
  }, [])

  // Toggle with triple-tap
  const [tapCount, setTapCount] = useState(0)
  useEffect(() => {
    const handleTap = () => {
      setTapCount((prev) => {
        const newCount = prev + 1
        if (newCount === 3) {
          setShowDebug((prev) => !prev)
          return 0
        }
        return newCount
      })
    }

    const timer = setTimeout(() => setTapCount(0), 500)

    document.addEventListener('touchstart', handleTap)
    return () => {
      document.removeEventListener('touchstart', handleTap)
      clearTimeout(timer)
    }
  }, [])

  if (!showDebug) return null

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 10,
        right: 10,
        background: 'rgba(0, 0, 0, 0.9)',
        color: '#00ff00',
        padding: '12px',
        borderRadius: '8px',
        fontSize: '11px',
        fontFamily: 'monospace',
        zIndex: 9999,
        maxWidth: '250px',
        border: '1px solid #00ff00',
      }}
    >
      <div style={{ marginBottom: '6px', fontWeight: 'bold' }}>GYRO DEBUG</div>

      <div>Device: {isMobile ? 'MOBILE' : 'DESKTOP'}</div>
      <div>Gyro Permission: <span style={{ color: gyroPermission === 'granted' ? '#00ff00' : '#ff6600' }}>
        {gyroPermission.toUpperCase()}
      </span></div>
      <div>Gyro Active: <span style={{ color: gyroActive ? '#00ff00' : '#ff0000' }}>
        {gyroActive ? 'ON' : 'OFF'}
      </span></div>

      <hr style={{ border: 'none', borderTop: '1px solid #00ff00', margin: '6px 0' }} />

      <div style={{ fontSize: '10px', marginBottom: '4px' }}>Gyro Coords:</div>
      <div>X: {gyroCoords.x.toFixed(3)} | Y: {gyroCoords.y.toFixed(3)}</div>

      <div style={{ fontSize: '10px', marginBottom: '4px', marginTop: '6px' }}>Mouse Coords:</div>
      <div>X: {mouseCoords.x.toFixed(3)} | Y: {mouseCoords.y.toFixed(3)}</div>

      <div style={{ fontSize: '9px', marginTop: '8px', color: '#888' }}>
        (Triple-tap to hide)
      </div>
    </div>
  )
}

export default GyroDebugOverlay
