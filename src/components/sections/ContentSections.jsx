// Content Sections Component
import { motion } from 'framer-motion'
import { experiences } from '../../data/experience'
import { techStack, expertiseDomains } from '../../data/skills'
import { achievements, participations } from '../../data/achievements'

const ContentSections = () => {
  return (
    <>
      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
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
            About
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: '18px',
              color: '#333333',
              lineHeight: 1.8,
              maxWidth: '800px'
            }}
          >
            <p>
              I'm Omar Marghadi, an AI Research Engineer passionate about perception systems, 
              sensor fusion, and autonomous intelligence.
            </p>
            <p>
              With a double degree from École Centrale Lyon and ENSAM, I combine deep learning, 
              computer vision, and robotics to build intelligent systems that solve real-world problems.
            </p>
            <p>
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="work"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        style={{
          minHeight: 'auto',
          padding: '80px 40px',
          background: '#f8f8f8'
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
              marginBottom: '60px'
            }}
          >
            Work Experience
          </motion.h2>
          
          <div style={{
            display: 'grid',
            gap: '40px'
          }}>
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  background: '#ffffff',
                  padding: '30px',
                  borderRadius: '8px',
                  borderLeft: '4px solid #1a1a1a'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '15px'
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: 600,
                      color: '#000000',
                      margin: '0 0 5px 0'
                    }}>
                      {exp.role}
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#666666',
                      margin: '0 0 5px 0'
                    }}>
                      {exp.company} • {exp.location}
                    </p>
                    <p style={{
                      fontSize: '14px',
                      color: '#999999',
                      margin: 0
                    }}>
                      {exp.period} • {exp.type}
                    </p>
                  </div>
                </div>

                <div style={{
                  marginBottom: '20px'
                }}>
                  <p style={{
                    fontSize: '14px',
                    color: '#555555',
                    marginBottom: '10px',
                    fontStyle: 'italic'
                  }}>
                    {exp.highlights}
                  </p>
                </div>

                <div style={{
                  marginBottom: '20px'
                }}>
                  <h4 style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#000000',
                    marginBottom: '10px',
                    textTransform: 'uppercase'
                  }}>
                    Key Achievements
                  </h4>
                  <ul style={{
                    margin: '0',
                    paddingLeft: '20px',
                    listStyle: 'none'
                  }}>
                    {exp.achievements.map((ach, i) => (
                      <li key={i} style={{
                        fontSize: '14px',
                        color: '#333333',
                        marginBottom: '8px',
                        paddingLeft: '10px',
                        borderLeft: '2px solid #ddd',
                        paddingBottom: '8px'
                      }}>
                        <strong>{ach.text}</strong>
                        {ach.metric && <span style={{ color: '#666666' }}> — {ach.metric}</span>}
                        <br />
                        <span style={{ color: '#888888', fontSize: '13px' }}>{ach.impact}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  {exp.technologies.map((tech, i) => (
                    <span key={i} style={{
                      fontSize: '12px',
                      background: '#e8e8e8',
                      color: '#333333',
                      padding: '4px 12px',
                      borderRadius: '4px'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        style={{
          minHeight: 'auto',
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
              marginBottom: '60px'
            }}
          >
            Skills & Expertise
          </motion.h2>

          {/* Expertise Domains */}
          <div style={{
            marginBottom: '80px'
          }}>
            <h3 style={{
              fontSize: '28px',
              fontWeight: 600,
              color: '#000000',
              marginBottom: '40px'
            }}>
              Expertise Domains
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '30px'
            }}>
              {expertiseDomains.map((domain, index) => (
                <motion.div
                  key={domain.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    background: '#f8f8f8',
                    padding: '30px',
                    borderRadius: '8px',
                    border: '1px solid #e0e0e0'
                  }}
                >
                  <div style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#1a1a1a',
                    marginBottom: '15px',
                    paddingBottom: '15px',
                    borderBottom: '2px solid #ddd'
                  }}>
                    {domain.title}
                  </div>
                  <ul style={{
                    margin: '0',
                    paddingLeft: '20px',
                    listStyle: 'disc',
                    color: '#333333',
                    lineHeight: '1.6'
                  }}>
                    {domain.skills.map((skill, i) => (
                      <li key={i} style={{
                        fontSize: '14px',
                        marginBottom: '8px'
                      }}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 style={{
              fontSize: '28px',
              fontWeight: 600,
              color: '#000000',
              marginBottom: '40px'
            }}>
              Technical Stack
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px',
              marginBottom: '40px'
            }}>
              {/* Languages */}
              <div style={{
                background: '#f8f8f8',
                padding: '30px',
                borderRadius: '8px'
              }}>
                <h4 style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#000000',
                  marginBottom: '20px'
                }}>
                  Languages
                </h4>
                {techStack.languages.map((lang, i) => (
                  <div key={i} style={{
                    marginBottom: '15px'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '5px',
                      fontSize: '14px'
                    }}>
                      <span>{lang.name}</span>
                      <span style={{ color: '#666666' }}>{lang.level}</span>
                    </div>
                    <div style={{
                      background: '#e0e0e0',
                      height: '6px',
                      borderRadius: '3px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        background: '#1a1a1a',
                        height: '100%',
                        width: `${lang.proficiency}%`,
                        transition: 'width 0.3s ease'
                      }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Frameworks */}
              <div style={{
                background: '#f8f8f8',
                padding: '30px',
                borderRadius: '8px'
              }}>
                <h4 style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#000000',
                  marginBottom: '20px'
                }}>
                  Frameworks
                </h4>
                {techStack.frameworks.map((fw, i) => (
                  <div key={i} style={{
                    marginBottom: '15px'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '5px',
                      fontSize: '14px'
                    }}>
                      <span>{fw.name}</span>
                      <span style={{ color: '#666666' }}>{fw.level}</span>
                    </div>
                    <div style={{
                      background: '#e0e0e0',
                      height: '6px',
                      borderRadius: '3px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        background: '#1a1a1a',
                        height: '100%',
                        width: `${fw.proficiency}%`,
                        transition: 'width 0.3s ease'
                      }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Tools */}
              <div style={{
                background: '#f8f8f8',
                padding: '30px',
                borderRadius: '8px'
              }}>
                <h4 style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#000000',
                  marginBottom: '20px'
                }}>
                  Tools & Platforms
                </h4>
                {techStack.tools.map((tool, i) => (
                  <div key={i} style={{
                    marginBottom: '15px'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '5px',
                      fontSize: '14px'
                    }}>
                      <span>{tool.name}</span>
                      <span style={{ color: '#666666' }}>{tool.level}</span>
                    </div>
                    <div style={{
                      background: '#e0e0e0',
                      height: '6px',
                      borderRadius: '3px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        background: '#1a1a1a',
                        height: '100%',
                        width: `${tool.proficiency}%`,
                        transition: 'width 0.3s ease'
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          
          </div>
        </div>
      </motion.section>

      {/* Achievements & Awards Section */}
      <motion.section
        id="achievements"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        style={{
          minHeight: 'auto',
          padding: '80px 40px',
          background: '#f8f8f8'
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
              marginBottom: '60px'
            }}
          >
            Achievements & Recognition
          </motion.h2>

          <div style={{
            display: 'grid',
            gap: '30px',
            marginBottom: '60px'
          }}>
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  background: '#ffffff',
                  padding: '30px',
                  borderRadius: '8px',
                  borderLeft: `4px solid ${achievement.importance === 'high' ? '#1a1a1a' : '#ccc'}`
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px'
                }}>
                  <div style={{
                    fontSize: '32px',
                    minWidth: '40px'
                  }}>
                    {achievement.icon}
                  </div>
                  <div style={{
                    flex: 1
                  }}>
                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: 600,
                      color: '#000000',
                      margin: '0 0 8px 0'
                    }}>
                      {achievement.title}
                    </h3>
                    {achievement.institution && (
                      <p style={{
                        fontSize: '14px',
                        color: '#666666',
                        margin: '0 0 5px 0'
                      }}>
                        {achievement.institution}
                      </p>
                    )}
                    {achievement.provider && (
                      <p style={{
                        fontSize: '14px',
                        color: '#666666',
                        margin: '0 0 5px 0'
                      }}>
                        {achievement.provider}
                      </p>
                    )}
                    <p style={{
                      fontSize: '14px',
                      color: '#555555',
                      margin: '10px 0 0 0'
                    }}>
                      {achievement.description}
                    </p>
                    <p style={{
                      fontSize: '12px',
                      color: '#999999',
                      margin: '8px 0 0 0'
                    }}>
                      {achievement.year}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Participations */}
          <div>
            <h3 style={{
              fontSize: '28px',
              fontWeight: 600,
              color: '#000000',
              marginBottom: '30px'
            }}>
              Active Participations
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px'
            }}>
              {participations.map((participation, index) => (
                <motion.div
                  key={participation.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    background: '#ffffff',
                    padding: '20px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    border: '1px solid #e0e0e0'
                  }}
                >
                  <div style={{
                    fontSize: '32px',
                    marginBottom: '10px'
                  }}>
                    {participation.icon}
                  </div>
                  <h4 style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#000000',
                    margin: '0 0 8px 0'
                  }}>
                    {participation.title}
                  </h4>
                  <p style={{
                    fontSize: '12px',
                    color: '#666666',
                    margin: '0 0 8px 0'
                  }}>
                    {participation.year} • {participation.status}
                  </p>
                  {participation.description && (
                    <p style={{
                      fontSize: '12px',
                      color: '#555555',
                      margin: 0
                    }}>
                      {participation.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact/Connect Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        style={{
          minHeight: '100vh',
          padding: '80px 40px',
          background: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: '48px',
              fontWeight: 700,
              color: '#000000',
              marginBottom: '30px'
            }}
          >
            Get In Touch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: '18px',
              color: '#666666',
              lineHeight: 1.8,
              marginBottom: '50px'
            }}
          >
            I'm always interested in discussing robotics, AI, and innovative engineering solutions. 
            Feel free to reach out through any of the channels below.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '30px',
              marginBottom: '60px'
            }}
          >
            <div style={{
              padding: '30px',
              background: '#f8f8f8',
              borderRadius: '8px',
              border: '1px solid #e0e0e0'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#000000',
                marginBottom: '15px'
              }}>
                Email
              </h3>
              <a 
                href="mailto:omar3.marghadi@gmail.com"
                style={{
                  fontSize: '16px',
                  color: '#0091FF',
                  textDecoration: 'none',
                  fontWeight: 500
                }}
              >
                omar3.marghadi@gmail.com
              </a>
            </div>

            <div style={{
              padding: '30px',
              background: '#f8f8f8',
              borderRadius: '8px',
              border: '1px solid #e0e0e0'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#000000',
                marginBottom: '15px'
              }}>
                Phone
              </h3>
              <a 
                href="tel:+33751014124"
                style={{
                  fontSize: '16px',
                  color: '#0091FF',
                  textDecoration: 'none',
                  fontWeight: 500
                }}
              >
                +33 7 51 01 41 24
              </a>
            </div>

            <div style={{
              padding: '30px',
              background: '#f8f8f8',
              borderRadius: '8px',
              border: '1px solid #e0e0e0'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#000000',
                marginBottom: '15px'
              }}>
                Location
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#666666',
                margin: 0
              }}>
                France, Mobile across Europe
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '30px',
              flexWrap: 'wrap'
            }}
          >
            <motion.a 
              href="https://www.linkedin.com/in/omar-marghadi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '12px 30px',
                background: '#0091FF',
                color: '#ffffff',
                textDecoration: 'none',
                borderRadius: '6px',
                fontWeight: 600,
                fontSize: '16px',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-block',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#0070CC'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#0091FF'}
            >
              LinkedIn
            </motion.a>

            <motion.a 
              href="https://github.com/omvriio"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '12px 30px',
                background: '#1a1a1a',
                color: '#ffffff',
                textDecoration: 'none',
                borderRadius: '6px',
                fontWeight: 600,
                fontSize: '16px',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-block',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#333333'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#1a1a1a'}
            >
              GitHub
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

export default ContentSections

