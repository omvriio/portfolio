// Content Sections Component - Displays content based on active navigation state
import { motion, AnimatePresence } from 'framer-motion'
import { experiences } from '@data/experience'
import { expertiseDomains, techStack } from '@data/skills'
import { projects } from '@data/projects'
import { useThemeStore } from '@store/themeStore'
import { useNavigationStore } from '@store/navigationStore'

const ContentSections = () => {
  const { isDarkMode } = useThemeStore()
  const { activeSection } = useNavigationStore()

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <AnimatePresence mode="wait">
        {activeSection === 'about' && (
          <motion.div
            key="about-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: 'power3.inOut' }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              overflow: 'auto',
              padding: '60px 5%',
              background: isDarkMode ? '#0a0a0a' : '#ffffff',
              transition: 'background 0.3s ease'
            }}
          >
            <AboutSection isDarkMode={isDarkMode} />
          </motion.div>
        )}

        {activeSection === 'work' && (
          <motion.div
            key="work-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: 'power3.inOut' }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              overflow: 'auto',
              padding: '60px 5%',
              background: isDarkMode ? '#141414' : '#f8f9fa',
              transition: 'background 0.3s ease'
            }}
          >
            <WorkSection isDarkMode={isDarkMode} />
          </motion.div>
        )}

        {activeSection === 'projects' && (
          <motion.div
            key="projects-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: 'power3.inOut' }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              overflow: 'auto',
              padding: '60px 5%',
              background: isDarkMode ? '#0a0a0a' : '#f8f9fa',
              transition: 'background 0.3s ease'
            }}
          >
            <ProjectsSection isDarkMode={isDarkMode} />
          </motion.div>
        )}

        {activeSection === 'skills' && (
          <motion.div
            key="skills-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: 'power3.inOut' }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              overflow: 'auto',
              padding: '60px 5%',
              background: isDarkMode ? '#141414' : '#ffffff',
              transition: 'background 0.3s ease'
            }}
          >
            <SkillsSection isDarkMode={isDarkMode} />
          </motion.div>
        )}

        {activeSection === 'contact' && (
          <motion.div
            key="contact-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: 'power3.inOut' }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              overflow: 'auto',
              padding: '60px 5%',
              background: '#000000'
            }}
          >
            <ContactSection isDarkMode={isDarkMode} />
          </motion.div>
        )}

        {!activeSection && (
          <motion.div
            key="home-empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: isDarkMode ? '#666' : '#ccc',
              fontSize: '18px'
            }}
          >
            Click on a segment to explore
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// --- ABOUT SECTION ---
function AboutSection({ isDarkMode }) {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 700,
          color: isDarkMode ? '#ffffff' : '#000000',
          marginBottom: '40px',
          transition: 'color 0.3s ease'
        }}
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{ fontSize: '1.125rem', color: isDarkMode ? '#cccccc' : '#333333', lineHeight: 1.8, transition: 'color 0.3s ease' }}
      >
        <p style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>
          I'm an AI Robotics Engineer specializing in <strong>computer vision</strong>, <strong>sensor fusion</strong>, and <strong>deep learning</strong> for autonomous systems. Currently completing my Master's in Artificial Intelligence at IMT Atlantique.
        </p>
        <p style={{ marginBottom: '1.5rem' }}>
          My recent work at <strong>Orange Innovation</strong> focused on developing perception systems for domestic service robots—combining WiFi, LIDAR, and IoT sensors with Graph Attention Networks to enable real-time anomaly detection and contextualized alerts for elderly care.
        </p>
        <p style={{ marginBottom: '1.5rem' }}>
          With a background in both research and industry, I've deployed production-ready AI systems at <strong>Orange</strong>, built multi-agent GenAI frameworks at <strong>Capgemini Engineering</strong>, and developed real-time pose estimation for worker safety at <strong>OCP Group</strong>.
        </p>

        <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#00D9FF', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Education</h3>
            <p style={{ margin: 0, fontWeight: 600, color: isDarkMode ? '#ffffff' : '#000000', transition: 'color 0.3s ease' }}>Master's in Artificial Intelligence</p>
            <p style={{ margin: '0.25rem 0', color: isDarkMode ? '#999' : '#666', transition: 'color 0.3s ease' }}>IMT Atlantique, France</p>
            <p style={{ margin: 0, color: isDarkMode ? '#999' : '#999', fontSize: '0.9rem', transition: 'color 0.3s ease' }}>2023 - 2025</p>
          </div>
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#8B5CF6', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Engineering Degree</h3>
            <p style={{ margin: 0, fontWeight: 600, color: isDarkMode ? '#ffffff' : '#000000', transition: 'color 0.3s ease' }}>Computer Science & AI</p>
            <p style={{ margin: '0.25rem 0', color: isDarkMode ? '#999' : '#666', transition: 'color 0.3s ease' }}>ENSA Tetouan, Morocco</p>
            <p style={{ margin: 0, color: isDarkMode ? '#999' : '#999', fontSize: '0.9rem', transition: 'color 0.3s ease' }}>2020 - 2023</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// --- WORK SECTION ---
function WorkSection({ isDarkMode }) {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 700,
          color: isDarkMode ? '#ffffff' : '#000000',
          marginBottom: '60px',
          transition: 'color 0.3s ease'
        }}
      >
        Work Experience
      </motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            style={{
              background: isDarkMode ? '#1a1a1a' : '#ffffff',
              padding: '2rem',
              borderRadius: '0px',
              borderLeft: '4px solid #00D9FF',
              boxShadow: isDarkMode ? '0 2px 8px rgba(255,255,255,0.05)' : '0 2px 8px rgba(0,0,0,0.05)',
              transition: 'all 0.3s ease'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: isDarkMode ? '#ffffff' : '#000000', margin: 0, transition: 'color 0.3s ease' }}>{exp.role}</h3>
                <p style={{ fontSize: '1.125rem', color: '#00D9FF', fontWeight: 600, margin: '0.5rem 0' }}>{exp.company}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: '0.95rem', color: isDarkMode ? '#999' : '#666', margin: 0, transition: 'color 0.3s ease' }}>{exp.period}</p>
                <p style={{ fontSize: '0.9rem', color: '#999', margin: '0.25rem 0', transition: 'color 0.3s ease' }}>{exp.location}</p>
              </div>
            </div>

            {exp.highlights && (
              <p style={{ fontSize: '1rem', color: isDarkMode ? '#cccccc' : '#333', fontStyle: 'italic', marginBottom: '1rem', transition: 'color 0.3s ease' }}>{exp.highlights}</p>
            )}

            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: isDarkMode ? '#999' : '#666', marginBottom: '1rem', transition: 'color 0.3s ease' }}>Key Achievements</h4>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {exp.achievements.map((achievement, i) => (
                  <li key={i} style={{ fontSize: '1rem', color: isDarkMode ? '#cccccc' : '#333', lineHeight: 1.6, transition: 'color 0.3s ease' }}>
                    <strong>{achievement.text}</strong>
                    {achievement.metric && <span style={{ color: '#00D9FF', fontWeight: 600 }}> → {achievement.metric}</span>}
                    {achievement.impact && <div style={{ fontSize: '0.9rem', color: isDarkMode ? '#999' : '#666', marginTop: '0.25rem', transition: 'color 0.3s ease' }}>Impact: {achievement.impact}</div>}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {exp.technologies.map((tech, i) => (
                <span key={i} style={{
                  background: isDarkMode ? '#2a2a2a' : '#f0f0f0',
                  color: isDarkMode ? '#cccccc' : '#333',
                  padding: '0.4rem 0.8rem',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  borderRadius: '4px',
                  transition: 'all 0.3s ease'
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// --- PROJECTS SECTION ---
function ProjectsSection({ isDarkMode }) {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 700,
          color: isDarkMode ? '#ffffff' : '#000000',
          marginBottom: '60px',
          transition: 'color 0.3s ease'
        }}
      >
        Featured Projects
      </motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {projects.filter(p => p.featured).map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            style={{
              background: isDarkMode ? '#1a1a1a' : '#ffffff',
              padding: '2.5rem',
              borderRadius: '0px',
              boxShadow: isDarkMode ? '0 4px 12px rgba(255,255,255,0.05)' : '0 4px 12px rgba(0,0,0,0.08)',
              borderLeft: '6px solid #00D9FF',
              transition: 'all 0.3s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'start', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '300px' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: isDarkMode ? '#ffffff' : '#000000', margin: '0 0 0.5rem 0', transition: 'color 0.3s ease' }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '1.125rem', color: isDarkMode ? '#999' : '#666', margin: 0, transition: 'color 0.3s ease' }}>{project.subtitle}</p>
              </div>
              {project.impact && (
                <div style={{
                  background: isDarkMode ? '#1a2a2a' : '#f0f9ff',
                  padding: '1rem 1.5rem',
                  borderRadius: '8px',
                  borderLeft: '3px solid #00D9FF',
                  transition: 'background 0.3s ease'
                }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.impact.icon}</div>
                  <p style={{ fontSize: '0.9rem', color: isDarkMode ? '#cccccc' : '#333', margin: 0, fontWeight: 500, transition: 'color 0.3s ease' }}>{project.impact.text}</p>
                </div>
              )}
            </div>

            <p style={{ fontSize: '1.05rem', color: isDarkMode ? '#cccccc' : '#333', lineHeight: 1.7, marginBottom: '2rem', transition: 'color 0.3s ease' }}>
              {project.description}
            </p>

            {project.metrics && project.metrics.length > 0 && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2rem',
                padding: '1.5rem',
                background: isDarkMode ? '#141414' : '#f8f9fa',
                borderRadius: '8px',
                transition: 'background 0.3s ease'
              }}>
                {project.metrics.map((metric, i) => (
                  <div key={i} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#00D9FF', marginBottom: '0.25rem' }}>
                      {metric.value}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: isDarkMode ? '#999' : '#666', textTransform: 'uppercase', letterSpacing: '0.5px', transition: 'color 0.3s ease' }}>
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {project.highlights && (
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: isDarkMode ? '#999' : '#666', marginBottom: '1rem', transition: 'color 0.3s ease' }}>
                  Key Highlights
                </h4>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {project.highlights.map((highlight, i) => (
                    <li key={i} style={{ fontSize: '0.95rem', color: isDarkMode ? '#cccccc' : '#333', transition: 'color 0.3s ease' }}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.technologies.map((tech, i) => (
                <span key={i} style={{
                  background: isDarkMode ? '#2a2a2a' : '#e9ecef',
                  color: isDarkMode ? '#cccccc' : '#333',
                  padding: '0.4rem 0.8rem',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  borderRadius: '4px',
                  transition: 'all 0.3s ease'
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// --- SKILLS SECTION ---
function SkillsSection({ isDarkMode }) {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 700,
          color: isDarkMode ? '#ffffff' : '#000000',
          marginBottom: '60px',
          transition: 'color 0.3s ease'
        }}
      >
        Skills & Expertise
      </motion.h2>

      {/* Expertise Domains */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        {expertiseDomains.map((domain, index) => (
          <motion.div
            key={domain.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            style={{
              background: isDarkMode ? '#1a1a1a' : '#f8f9fa',
              padding: '2rem',
              borderRadius: '0px',
              borderTop: '3px solid #00D9FF',
              transition: 'background 0.3s ease'
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{domain.icon}</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: isDarkMode ? '#ffffff' : '#000000', marginBottom: '1rem', transition: 'color 0.3s ease' }}>{domain.title}</h3>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', listStyle: 'none' }}>
              {domain.skills.map((skill, i) => (
                <li key={i} style={{ fontSize: '0.95rem', color: isDarkMode ? '#cccccc' : '#333', marginBottom: '0.5rem', paddingLeft: '1rem', position: 'relative', transition: 'color 0.3s ease' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#00D9FF' }}>▪</span>
                  {skill}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {domain.tools.map((tool, i) => (
                <span key={i} style={{ fontSize: '0.75rem', color: isDarkMode ? '#999' : '#666', background: isDarkMode ? '#2a2a2a' : '#e9ecef', padding: '0.3rem 0.6rem', borderRadius: '3px', transition: 'all 0.3s ease' }}>
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tech Stack with Proficiency */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{ marginTop: '4rem' }}
      >
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: isDarkMode ? '#ffffff' : '#000000', marginBottom: '2rem', transition: 'color 0.3s ease' }}>Technical Proficiency</h3>

        <div style={{ display: 'grid', gap: '3rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 600, color: isDarkMode ? '#999' : '#666', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', transition: 'color 0.3s ease' }}>Languages</h4>
            {techStack.languages.map((lang) => (
              <div key={lang.name} style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.95rem', fontWeight: 600, color: isDarkMode ? '#ffffff' : '#000000', transition: 'color 0.3s ease' }}>{lang.icon} {lang.name}</span>
                  <span style={{ fontSize: '0.85rem', color: isDarkMode ? '#999' : '#666', transition: 'color 0.3s ease' }}>{lang.level}</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: isDarkMode ? '#2a2a2a' : '#e9ecef', borderRadius: '4px', overflow: 'hidden', transition: 'background 0.3s ease' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${lang.proficiency}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{ height: '100%', background: 'linear-gradient(90deg, #00D9FF, #8B5CF6)', borderRadius: '4px' }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 600, color: isDarkMode ? '#999' : '#666', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', transition: 'color 0.3s ease' }}>Frameworks</h4>
            {techStack.frameworks.map((fw) => (
              <div key={fw.name} style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.95rem', fontWeight: 600, color: isDarkMode ? '#ffffff' : '#000000', transition: 'color 0.3s ease' }}>{fw.name}</span>
                  <span style={{ fontSize: '0.85rem', color: isDarkMode ? '#999' : '#666', transition: 'color 0.3s ease' }}>{fw.level}</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: isDarkMode ? '#2a2a2a' : '#e9ecef', borderRadius: '4px', overflow: 'hidden', transition: 'background 0.3s ease' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${fw.proficiency}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    style={{ height: '100%', background: 'linear-gradient(90deg, #8B5CF6, #FF006E)', borderRadius: '4px' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// --- CONTACT SECTION ---
function ContactSection({ isDarkMode }) {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 700,
          color: '#ffffff',
          marginBottom: '40px'
        }}
      >
        Let's Connect
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p style={{ fontSize: '1.25rem', color: '#cccccc', marginBottom: '3rem', maxWidth: '700px' }}>
          Interested in robotics, computer vision, or AI research? Let's discuss how we can work together.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
          <motion.a
            href="mailto:omar.marghadi@imt-atlantique.net"
            whileHover={{ scale: 1.05, backgroundColor: '#00D9FF' }}
            style={{
              background: '#1a1a1a',
              padding: '2rem',
              borderRadius: '0px',
              textDecoration: 'none',
              color: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              transition: 'all 0.3s ease',
              border: '2px solid #333'
            }}
          >
            <div style={{ fontSize: '2rem' }}>📧</div>
            <div>
              <div style={{ fontSize: '0.9rem', color: '#999', marginBottom: '0.5rem' }}>Email</div>
              <div style={{ fontSize: '1rem', fontWeight: 600 }}>omar.marghadi@imt-atlantique.net</div>
            </div>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/omar-marghadi/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: '#0091FF' }}
            style={{
              background: '#1a1a1a',
              padding: '2rem',
              borderRadius: '0px',
              textDecoration: 'none',
              color: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              transition: 'all 0.3s ease',
              border: '2px solid #333'
            }}
          >
            <div style={{ fontSize: '2rem' }}>💼</div>
            <div>
              <div style={{ fontSize: '0.9rem', color: '#999', marginBottom: '0.5rem' }}>LinkedIn</div>
              <div style={{ fontSize: '1rem', fontWeight: 600 }}>Connect with me</div>
            </div>
          </motion.a>

          <motion.a
            href="https://github.com/omvriio"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: '#8B5CF6' }}
            style={{
              background: '#1a1a1a',
              padding: '2rem',
              borderRadius: '0px',
              textDecoration: 'none',
              color: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              transition: 'all 0.3s ease',
              border: '2px solid #333'
            }}
          >
            <div style={{ fontSize: '2rem' }}>💻</div>
            <div>
              <div style={{ fontSize: '0.9rem', color: '#999', marginBottom: '0.5rem' }}>GitHub</div>
              <div style={{ fontSize: '1rem', fontWeight: 600 }}>View my code</div>
            </div>
          </motion.a>
        </div>

        <div style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid #333', textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: '0.9rem' }}>© 2025 Omar Marghadi. Built with React, Three.js & Framer Motion.</p>
        </div>
      </motion.div>
    </div>
  )
}

export default ContentSections
