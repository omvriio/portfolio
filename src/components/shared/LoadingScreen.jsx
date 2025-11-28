// Loading Screen Component
import { motion } from 'framer-motion'
import { useThemeStore } from '@store/themeStore'

const LoadingScreen = () => {
  const { isDarkMode } = useThemeStore()
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        inset: 0,
        background: isDarkMode ? '#0a0a0a' : '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999
      }}
    >
      {/* Loading text with animated dots */}
      <motion.div
        style={{
          fontSize: '24px',
          fontWeight: 600,
          color: isDarkMode ? '#ffffff' : '#000000',
          letterSpacing: '2px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}
      >
        <span>LOADING</span>
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        >
          .
        </motion.span>
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: 0.3 }}
        >
          .
        </motion.span>
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: 0.6 }}
        >
          .
        </motion.span>
      </motion.div>
    </motion.div>
  )
}

export default LoadingScreen
