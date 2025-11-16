// Content Sections Component
import { motion } from 'framer-motion'

const ContentSections = () => {
  const sections = [
    {
      id: 'about',
      title: 'About',
      content: 'About me ...'
    },
    {
      id: 'work',
      title: 'Work',
      content: 'work experience ...'
    },
    {
      id: 'skills',
      title: 'Skills',
      content: 'skills ...'
    },
    {
      id: 'contact',
      title: 'Connect',
      content: 'Contact information ...'
    }
  ]

  return (
    <div>
      {sections.map((section, index) => (
        <motion.section
          key={section.id}
          id={section.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          style={{
            minHeight: '100vh',
            padding: '80px 40px',
            background: '#ffffff'
          }}
        >
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{
                fontSize: '48px',
                fontWeight: 700,
                color: '#000000',
                marginBottom: '40px'
              }}
            >
              {section.title}
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{
                fontSize: '18px',
                color: '#333333',
                lineHeight: 1.8
              }}
            >
              <p>{section.content}</p>
              <p>This section will contain your actual content.</p>
            </motion.div>
          </div>
        </motion.section>
      ))}
    </div>
  )
}

export default ContentSections
