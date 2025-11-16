// Circular Navigation Component - SVG-based circle with arc segments
import { motion } from 'framer-motion'
import CircularSegment from './CircularSegment'
import { useNavigationStore } from '@store/navigationStore'

const CircularNav = ({ onSegmentClick }) => {
  const { setHoveredSegment } = useNavigationStore()

  const segments = [
    { id: 'about', label: 'About', angle: 45, color: '#00D9FF' },
    { id: 'work', label: 'Work', angle: 135, color: '#0091FF' },
    { id: 'skills', label: 'Skills', angle: 225, color: '#8B5CF6' },
    { id: 'contact', label: 'Connect', angle: 315, color: '#FF006E' }
  ]

  const circleRadius = 300
  const svgSize = circleRadius * 2 + 200 // Extra space for labels

  return (
    <motion.div 
      className="circular-nav-container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 0.3,
        transition: { duration: 0.6 }
      }}
      transition={{ duration: 0.8, delay: 0.2 }}
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        zIndex: 5
      }}
    >
      <svg 
        width={svgSize} 
        height={svgSize} 
        viewBox={`${-svgSize/2} ${-svgSize/2} ${svgSize} ${svgSize}`}
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          transform: 'translate(-50%, -50%)',
          overflow: 'visible'
        }}
      >
        {/* Background circle (empty/white center) - invisible guide */}
        <circle
          cx="0"
          cy="0"
          r={circleRadius}
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          opacity="0"
        />

        {/* Segments */}
        {segments.map((segment, index) => (
          <CircularSegment
            key={segment.id}
            segment={segment}
            radius={circleRadius}
            index={index}
            onClick={onSegmentClick}
            onHover={setHoveredSegment}
          />
        ))}
      </svg>
    </motion.div>
  )
}

export default CircularNav
