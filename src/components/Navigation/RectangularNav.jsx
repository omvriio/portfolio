// Rectangular Navigation (appears on scroll)
import { motion } from 'framer-motion'
import { useNavigationStore } from '@store/navigationStore'
import { useThemeStore } from '@store/themeStore'

const RectangularNav = ({ scrollProgress }) => {
  const { activeSection, setActiveSection } = useNavigationStore()
  const { isDarkMode } = useThemeStore()

  const navItems = [
    { id: 'about', label: 'About', color: '#00D9FF' },
    { id: 'work', label: 'Work', color: '#0091FF' },
    { id: 'skills', label: 'Skills', color: '#8B5CF6' },
    { id: 'contact', label: 'Connect', color: '#FF006E' }
  ]

  const handleNavClick = (id) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Show nav when scrolled past 30%
  const isVisible = scrollProgress > 0.3

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
    >
      {/* Rectangular nav container */}
      <div style={{
        background: isDarkMode ? '#ffffff' : '#000000',
        borderRadius: '0px',
        padding: '12px 32px',
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: isDarkMode ? '0 4px 20px rgba(255, 255, 255, 0.1)' : '0 4px 20px rgba(0, 0, 0, 0.3)',
        transition: 'all 0.3s ease'
      }}>
        {navItems.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: item.color
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: activeSection === item.id ? item.color : 'transparent',
              border: 'none',
              color: isDarkMode ? '#000000' : '#ffffff',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              padding: '10px 24px',
              borderRadius: '0px',
              transition: 'all 0.3s ease',
              position: 'relative'
            }}
          >
            {item.label}
          </motion.button>
        ))}
      </div>
    </motion.nav>
  )
}

export default RectangularNav
