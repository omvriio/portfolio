// CV Button Component (for landing state) - Black box design
import { motion } from 'framer-motion'

const CVButton = () => {
  const handleDownload = () => {
    // Add your CV download logic here
    console.log('Downloading CV...')
  }

  return (
    <motion.button
      className="cv-btn-landing"
      onClick={handleDownload}
      whileHover={{
        scale: 1.05,
        background: '#ffffff',
        color: '#000000'
      }}
      whileTap={{ scale: 0.95 }}
      style={{
        position: 'absolute',
        top: '7%',
        right: '10%',
        zIndex: 100,
        background: '#000000',
        color: '#FFFFFF',
        padding: '16px 32px',
        borderRadius: '0px',
        fontSize: 'clamp(1.25rem, 4vw, 2rem)',
        fontWeight: 400,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        justifyContent: 'center'
      }}
      aria-label="Download CV"
    >
      {/* Download icon (uses currentColor) */}
      <svg
        width="1em"
        height="1.5em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>

      <span className="cv-text" style={{ display: 'inline' }}>CV</span>
      
      <style jsx>{`
        @media (max-width: 768px) {
          .cv-text {
            display: none !important;
          }
        }
      `}</style>
    </motion.button>
  )
}

export default CVButton
