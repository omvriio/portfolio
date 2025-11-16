// Individual Circular Segment Component - Arc-based design
import { motion } from 'framer-motion'
import { useState } from 'react'

const CircularSegment = ({ segment, radius, index, onClick, onHover }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleHover = (hovered) => {
    setIsHovered(hovered)
    onHover(hovered ? segment : null)
  }

  // Calculate arc path for SVG
  const createArcPath = () => {
    const startAngle = segment.angle - 40 // 80-degree arc width
    const endAngle = segment.angle + 40
    const innerRadius = radius - 60
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

  // Calculate label position (outside the arc) - fixed to match arc positioning
  const angleRad = ((segment.angle - 90) * Math.PI) / 180  // Subtract 90 to match polarToCartesian
  const labelRadius = radius + 40
  const labelX = Math.cos(angleRad) * labelRadius
  const labelY = Math.sin(angleRad) * labelRadius

  return (
    <g
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      onClick={() => onClick(segment.id)}
      style={{ cursor: 'pointer' }}
    >
      {/* Arc segment */}
      <motion.path
        d={createArcPath()}
        fill={isHovered ? segment.color : '#000000'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.15, duration: 0.5 }}
        style={{
          filter: isHovered ? `drop-shadow(0 0 20px ${segment.color})` : 'none',
          transition: 'all 0.3s ease'
        }}
      />

      {/* Label (only shows on hover) */}
      <motion.text
        x={labelX}
        y={labelY}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={segment.color}
        fontSize="16"
        fontWeight="600"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          pointerEvents: 'none',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}
      >
        {segment.label}
      </motion.text>
    </g>
  )
}

export default CircularSegment
