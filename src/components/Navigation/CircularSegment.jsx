// Individual Circular Segment Component - Arc-based design
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useThemeStore } from '@store/themeStore'

const CircularSegment = ({ segment, radius, index, onClick, onHover, isDisabled = false }) => {
  const [isHovered, setIsHovered] = useState(false)
  const { isDarkMode } = useThemeStore()

  const handleHover = (hovered) => {
    if (isDisabled) return
    setIsHovered(hovered)
    onHover(hovered ? segment : null)
  }

  const handleClick = () => {
    if (!isDisabled) {
      onClick()
    }
  }

  // Calculate arc path for SVG
  const createArcPath = () => {
    const startAngle = segment.angle - 40 // 80-degree arc width
    const endAngle = segment.angle + 40
    const innerRadius = radius - 80 // Thickness
    const outerRadius = radius
    
    const startInner = polarToCartesian(0, 0, innerRadius, endAngle)
    const startOuter = polarToCartesian(0, 0, outerRadius, endAngle)
    const endInner = polarToCartesian(0, 0, innerRadius, startAngle)
    const endOuter = polarToCartesian(0, 0, outerRadius, startAngle)

    return `
      M ${startOuter.x} ${startOuter.y}
      A ${outerRadius} ${outerRadius} 0 0 0 ${endOuter.x} ${endOuter.y}
      L ${endInner.x} ${endInner.y}
      A ${innerRadius} ${innerRadius} 0 0 1 ${startInner.x} ${startInner.y}
      Z
    `
  }

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians)
    }
  }

  // Calculate label position on the arc itself (middle of the arc)
  const angleRad = ((segment.angle - 90) * Math.PI) / 180
  const midRadius = radius - 40 // Middle of the arc thickness
  const labelX = Math.cos(angleRad) * midRadius
  const labelY = Math.sin(angleRad) * midRadius

  // Flip text 180° for bottom segments (135° to 225° range) to make them readable
  const textRotation = segment.angle > 90 && segment.angle < 270 
    ? segment.angle + 180 
    : segment.angle

  return (
    <g
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      onClick={handleClick}
      style={{ cursor: isDisabled ? 'not-allowed' : 'pointer', opacity: isDisabled ? 0.5 : 1 }}
    >
      {/* Arc segment */}
      <motion.path
        d={createArcPath()}
        fill={isHovered ? segment.color : (isDarkMode ? '#ffffff' : '#000000')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.15, duration: 0.5 }}
        style={{
          filter: isHovered ? `drop-shadow(0 0 20px ${segment.color})` : 'none',
          transition: 'all 0.3s ease'
        }}
      />

      {/* Label always visible inside the arc */}
      <motion.text
        x={labelX}
        y={labelY}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={isDarkMode ? '#000000' : '#ffffff'}
        fontSize="14"
        fontWeight="600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
        style={{
          pointerEvents: 'none',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          transform: `rotate(${textRotation}deg)`,
          transformOrigin: `${labelX}px ${labelY}px`
        }}
      >
        {segment.label}
      </motion.text>
    </g>
  )
}

export default CircularSegment
