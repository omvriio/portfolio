// Circular Navigation Component - SVG-based circle with arc segments
import { motion } from 'framer-motion'
import CircularSegment from './CircularSegment'
import { useNavigationStore } from '@store/navigationStore'

const CircularNav = () => {
  const { setActiveSection, setHoveredSegment, isAnimating } = useNavigationStore((state) => ({
    setActiveSection: state.setActiveSection,
    setHoveredSegment: state.setHoveredSegment,
    isAnimating: state.isAnimating
  }))

  const segments = [
    { id: 'about', label: 'About', angle: 45, color: '#00D9FF' },
    { id: 'work', label: 'Work', angle: 135, color: '#0091FF' },
    { id: 'projects', label: 'Projects', angle: 225, color: '#8B5CF6' },
    { id: 'contact', label: 'Connect', angle: 315, color: '#FF006E' }
  ]

  const circleRadius = 300
  const svgSize = circleRadius * 2 + 200 // Extra space for labels

  const handleSegmentClick = (sectionId) => {
    if (!isAnimating) {
      setActiveSection(sectionId)
    }
  }

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
        zIndex: 50,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'auto'
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
            onClick={() => handleSegmentClick(segment.id)}
            onHover={setHoveredSegment}
            isDisabled={isAnimating}
          />
        ))}
      </svg>
    </motion.div>
  )
}

export default CircularNav
