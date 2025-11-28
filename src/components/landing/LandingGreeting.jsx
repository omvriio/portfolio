// Landing Greeting Component - Black box design (will transform into nav)
import { motion } from 'framer-motion'
import { useThemeStore } from '@store/themeStore'

const LandingGreeting = ({ isTransforming }) => {
  const { isDarkMode } = useThemeStore()
  
  return (
    <motion.div
      className="landing-greeting"
      layoutId="greeting-to-logo" // Connect to nav logo
      animate={{ 
        opacity: isTransforming ? 0 : 1,
        scale: isTransforming ? 0.8 : 1
      }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'absolute',
        top: '7%',
        left: '40%',
        zIndex: 100,
        // background: isDarkMode ? '#000000' : '#ffffff',
        padding: '16px 32px',
        borderRadius: '0px',
        transition: 'background 0.3s ease'
      }}
    >
      <motion.h1 
        style={{
          fontSize: 'clamp(1.25rem, 4vw, 2rem)',
          fontWeight: 400,
          color: isDarkMode ? '#FFFFFF' : '#000000',
          margin: 0,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'color 0.3s ease'
        }}
      >
        Hi there, I'm Omar
        <motion.span
          animate={{ 
            rotate: [0, 14, -8, 14, -4, 10, 0] 
          }}
          transition={{ 
            duration: 1.5,
            delay: 1.5,
            repeat: Infinity,
            repeatDelay: 4
          }}
          style={{ display: 'inline-block', fontSize: '100%' }}
        >
          👋
        </motion.span>
      </motion.h1>
    </motion.div>
  )
}

export default LandingGreeting
