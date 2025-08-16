import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const techCategories = [
    {
      name: 'Frontend',
      tools: [
        { name: 'React', logo: '⚛️' },
        { name: 'Angular', logo: '🅰️' },
        { name: 'Vue.js', logo: '💚' }
      ]
    },
    {
      name: 'Backend',
      tools: [
        { name: 'Node.js', logo: '🟢' },
        { name: 'Django', logo: '🐍' },
        { name: 'Laravel', logo: '🔴' }
      ]
    },
    {
      name: 'Mobile',
      tools: [
        { name: 'Flutter', logo: '💙' },
        { name: 'React Native', logo: '📱' },
        { name: 'Swift', logo: '🍎' }
      ]
    },
    {
      name: 'Database',
      tools: [
        { name: 'MySQL', logo: '🐬' },
        { name: 'PostgreSQL', logo: '🐘' },
        { name: 'MongoDB', logo: '🍃' }
      ]
    },
    {
      name: 'Cloud',
      tools: [
        { name: 'AWS', logo: '☁️' },
        { name: 'Azure', logo: '🔷' },
        { name: 'Google Cloud', logo: '🌤️' }
      ]
    },
    {
      name: 'DevOps',
      tools: [
        { name: 'Docker', logo: '🐳' },
        { name: 'Jenkins', logo: '⚙️' },
        { name: 'Kubernetes', logo: '☸️' }
      ]
    },
    {
      name: 'Monitoring & Logging',
      tools: [
        { name: 'Grafana', logo: '📊' },
        { name: 'Prometheus', logo: '🔥' },
        { name: 'ELK Stack', logo: '🦌' }
      ]
    },
    {
      name: 'Security',
      tools: [
        { name: 'OAuth', logo: '🔐' },
        { name: 'JWT', logo: '🎫' },
        { name: 'SSL/TLS', logo: '🔒' }
      ]
    },
    {
      name: 'CMS',
      tools: [
        { name: 'WordPress', logo: '📝' },
        { name: 'Strapi', logo: '🚀' },
        { name: 'Contentful', logo: '📄' }
      ]
    },
    {
      name: 'CRM/ERP/Platforms',
      tools: [
        { name: 'Salesforce', logo: '☁️' },
        { name: 'Zoho', logo: '📈' },
        { name: 'SAP', logo: '💼' }
      ]
    }
  ];

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <div className="App">
      {/* Header */}
      <header style={{
        background: 'linear-gradient(135deg, #0B3D20 0%, #1a5f3f 100%)',
        color: 'white',
        padding: '2rem 1rem',
        textAlign: 'center'
      }}>
        <h1 style={{ margin: 0, fontSize: '2.5rem', fontWeight: 'bold' }}>
          Grownexus
        </h1>
        <p style={{ margin: '0.5rem 0 0', fontSize: '1.2rem', opacity: 0.9 }}>
          AI-Powered Business Solutions
        </p>
      </header>

      {/* Hero Section */}
      <section style={{
        padding: '4rem 1rem',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        textAlign: 'center'
      }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '1rem', 
          color: '#0B3D20',
          fontWeight: 'bold'
        }}>
          Transform Your Business with AI
        </h2>
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#64748b', 
          maxWidth: '600px', 
          margin: '0 auto 2rem',
          lineHeight: '1.6'
        }}>
          Cutting-edge AI, automation, and tech-driven services to help businesses grow smarter, faster, and better.
        </p>
        <button style={{
          background: 'linear-gradient(135deg, #0B3D20 0%, #1a5f3f 100%)',
          color: 'white',
          border: 'none',
          padding: '1rem 2rem',
          fontSize: '1.1rem',
          borderRadius: '50px',
          cursor: 'pointer',
          fontWeight: 'bold',
          boxShadow: '0 4px 15px rgba(11, 61, 32, 0.3)',
          transition: 'transform 0.2s ease'
        }}
        onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
        onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
        >
          Get Started Today
        </button>
      </section>

      {/* Technology Capability Section */}
      <section style={{ padding: '4rem 1rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#0B3D20',
            fontWeight: 'bold'
          }}>
            Driving digital transformation through advanced technology capability
          </h2>

          {/* Desktop View - Keep existing design */}
          <div className="desktop-tech-view" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {techCategories.map((category, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                padding: '2rem',
                borderRadius: '15px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e2e8f0'
              }}>
                <h3 style={{
                  color: '#0B3D20',
                  marginBottom: '1rem',
                  fontSize: '1.3rem',
                  fontWeight: 'bold'
                }}>
                  {category.name}
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
                  gap: '1rem'
                }}>
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} style={{
                      background: 'white',
                      padding: '1rem',
                      borderRadius: '10px',
                      textAlign: 'center',
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                      border: '1px solid #f1f5f9',
                      transition: 'transform 0.2s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                        {tool.logo}
                      </div>
                      <div style={{ 
                        fontSize: '0.9rem', 
                        color: '#64748b',
                        fontWeight: '500'
                      }}>
                        {tool.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View - Accordion Layout */}
          <div className="mobile-tech-view">
            {techCategories.map((category, index) => (
              <motion.div
                key={index}
                style={{
                  marginBottom: '1rem',
                  background: 'white',
                  borderRadius: '15px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #e2e8f0',
                  overflow: 'hidden'
                }}
                initial={false}
              >
                <motion.div
                  style={{
                    padding: '1.5rem',
                    background: expandedCategory === index 
                      ? 'linear-gradient(135deg, #0B3D20 0%, #1a5f3f 100%)'
                      : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                    color: expandedCategory === index ? 'white' : '#0B3D20',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontWeight: 'bold',
                    fontSize: '1.1rem'
                  }}
                  onClick={() => toggleCategory(index)}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{category.name}</span>
                  <motion.span
                    animate={{ rotate: expandedCategory === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ fontSize: '1.2rem' }}
                  >
                    ▼
                  </motion.span>
                </motion.div>

                <AnimatePresence>
                  {expandedCategory === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{
                        padding: '1.5rem',
                        background: '#fafafa',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                        gap: '1rem'
                      }}>
                        {category.tools.map((tool, toolIndex) => (
                          <motion.div
                            key={toolIndex}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ 
                              delay: toolIndex * 0.1,
                              duration: 0.3 
                            }}
                            style={{
                              background: 'white',
                              padding: '1rem',
                              borderRadius: '10px',
                              textAlign: 'center',
                              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                              border: '1px solid #f1f5f9'
                            }}
                          >
                            <div style={{ 
                              fontSize: '1.8rem', 
                              marginBottom: '0.5rem' 
                            }}>
                              {tool.logo}
                            </div>
                            <div style={{ 
                              fontSize: '0.85rem', 
                              color: '#64748b',
                              fontWeight: '500'
                            }}>
                              {tool.name}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{
        padding: '4rem 1rem',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '3rem',
            color: '#0B3D20',
            fontWeight: 'bold'
          }}>
            Our Services
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                title: 'AI Solutions',
                description: 'Custom AI implementations to automate and optimize your business processes.',
                icon: '🤖'
              },
              {
                title: 'Web Development',
                description: 'Modern, responsive websites and web applications built with cutting-edge technology.',
                icon: '💻'
              },
              {
                title: 'Business Automation',
                description: 'Streamline operations with intelligent automation solutions.',
                icon: '⚡'
              }
            ].map((service, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '15px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e2e8f0',
                transition: 'transform 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                  {service.icon}
                </div>
                <h3 style={{
                  color: '#0B3D20',
                  marginBottom: '1rem',
                  fontSize: '1.5rem',
                  fontWeight: 'bold'
                }}>
                  {service.title}
                </h3>
                <p style={{
                  color: '#64748b',
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#0B3D20',
        color: 'white',
        padding: '2rem 1rem',
        textAlign: 'center'
      }}>
        <p style={{ margin: 0, opacity: 0.9 }}>
          © 2024 Grownexus. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;