// Theme Toggle Button
import { motion } from 'framer-motion'
import { useThemeStore } from '@store/themeStore'

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useThemeStore()

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 1000,
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: isDarkMode ? '#ffffff' : '#000000',
        color: isDarkMode ? '#000000' : '#ffffff',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        boxShadow: isDarkMode 
          ? '0 4px 20px rgba(255, 255, 255, 0.2)' 
          : '0 4px 20px rgba(0, 0, 0, 0.3)',
        transition: 'all 0.3s ease'
      }}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? '☀️' : '🌙'}
    </motion.button>
  )
}

export default ThemeToggle
