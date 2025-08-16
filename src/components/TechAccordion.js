import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TechAccordion = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const techCategories = {
    'Frontend': {
      icon: '🎨',
      tools: [
        { name: 'React', logo: '⚛️' },
        { name: 'Angular', logo: '🅰️' },
        { name: 'Vue.js', logo: '💚' },
        { name: 'Next.js', logo: '▲' },
        { name: 'TypeScript', logo: '📘' },
        { name: 'Tailwind CSS', logo: '🎨' }
      ]
    },
    'Backend': {
      icon: '⚙️',
      tools: [
        { name: 'Node.js', logo: '🟢' },
        { name: 'Django', logo: '🐍' },
        { name: 'Laravel', logo: '🔴' },
        { name: 'Express.js', logo: '🚀' },
        { name: 'FastAPI', logo: '⚡' },
        { name: 'Spring Boot', logo: '🍃' }
      ]
    },
    'Mobile': {
      icon: '📱',
      tools: [
        { name: 'Flutter', logo: '💙' },
        { name: 'React Native', logo: '⚛️' },
        { name: 'Swift', logo: '🍎' },
        { name: 'Kotlin', logo: '🤖' },
        { name: 'Ionic', logo: '⚡' },
        { name: 'Xamarin', logo: '🔷' }
      ]
    },
    'Database': {
      icon: '🗄️',
      tools: [
        { name: 'MySQL', logo: '🐬' },
        { name: 'PostgreSQL', logo: '🐘' },
        { name: 'MongoDB', logo: '🍃' },
        { name: 'Redis', logo: '🔴' },
        { name: 'Firebase', logo: '🔥' },
        { name: 'Supabase', logo: '⚡' }
      ]
    },
    'Cloud': {
      icon: '☁️',
      tools: [
        { name: 'AWS', logo: '🟠' },
        { name: 'Azure', logo: '🔵' },
        { name: 'Google Cloud', logo: '🌈' },
        { name: 'Vercel', logo: '▲' },
        { name: 'Netlify', logo: '🌐' },
        { name: 'DigitalOcean', logo: '🌊' }
      ]
    },
    'DevOps': {
      icon: '🔧',
      tools: [
        { name: 'Docker', logo: '🐳' },
        { name: 'Jenkins', logo: '👨‍💼' },
        { name: 'Kubernetes', logo: '☸️' },
        { name: 'GitHub Actions', logo: '🐙' },
        { name: 'Terraform', logo: '🏗️' },
        { name: 'Ansible', logo: '🔴' }
      ]
    },
    'Monitoring & Logging': {
      icon: '📊',
      tools: [
        { name: 'Grafana', logo: '📈' },
        { name: 'Prometheus', logo: '🔥' },
        { name: 'ELK Stack', logo: '🦌' },
        { name: 'New Relic', logo: '📊' },
        { name: 'DataDog', logo: '🐕' },
        { name: 'Splunk', logo: '🔍' }
      ]
    },
    'Security': {
      icon: '🔒',
      tools: [
        { name: 'OAuth', logo: '🔐' },
        { name: 'JWT', logo: '🎫' },
        { name: 'SSL/TLS', logo: '🔒' },
        { name: 'Auth0', logo: '🛡️' },
        { name: 'Okta', logo: '🔑' },
        { name: 'Keycloak', logo: '🗝️' }
      ]
    },
    'CMS': {
      icon: '📝',
      tools: [
        { name: 'WordPress', logo: '📝' },
        { name: 'Strapi', logo: '🚀' },
        { name: 'Contentful', logo: '📄' },
        { name: 'Sanity', logo: '✨' },
        { name: 'Ghost', logo: '👻' },
        { name: 'Drupal', logo: '💧' }
      ]
    },
    'CRM/ERP/Platforms': {
      icon: '💼',
      tools: [
        { name: 'Salesforce', logo: '☁️' },
        { name: 'Zoho', logo: '🟠' },
        { name: 'SAP', logo: '🔷' },
        { name: 'HubSpot', logo: '🧡' },
        { name: 'Odoo', logo: '🟣' },
        { name: 'Microsoft 365', logo: '📊' }
      ]
    }
  };

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div className="mobile-tech-view">
      <div style={{ 
        padding: '2rem 1rem',
        background: 'linear-gradient(135deg, #0B3D20 0%, #1a5f3f 100%)',
        minHeight: '100vh'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '1rem',
              lineHeight: '1.3'
            }}>
              Driving digital transformation through advanced technology capability
            </h2>
            <p style={{
              color: '#a0d4b8',
              fontSize: '1rem',
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Explore our comprehensive technology stack across all domains
            </p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {Object.entries(techCategories).map(([category, data], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <motion.div
                  className="category-header"
                  onClick={() => toggleCategory(category)}
                  style={{
                    padding: '1.5rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: expandedCategory === category 
                      ? 'rgba(255, 255, 255, 0.1)' 
                      : 'transparent',
                    transition: 'all 0.3s ease'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>{data.icon}</span>
                    <h3 style={{
                      color: 'white',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      margin: 0
                    }}>
                      {category}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedCategory === category ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      color: 'white',
                      fontSize: '1.2rem'
                    }}
                  >
                    ▼
                  </motion.div>
                </motion.div>

                <AnimatePresence>
                  {expandedCategory === category && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div 
                        className="tools-grid"
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(2, 1fr)',
                          gap: '1rem',
                          padding: '1.5rem',
                          paddingTop: '0'
                        }}
                      >
                        {data.tools.map((tool, toolIndex) => (
                          <motion.div
                            key={tool.name}
                            className="tool-card"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ 
                              duration: 0.3, 
                              delay: toolIndex * 0.05,
                              ease: 'easeOut'
                            }}
                            style={{
                              background: 'rgba(255, 255, 255, 0.1)',
                              borderRadius: '12px',
                              padding: '1rem',
                              textAlign: 'center',
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                              transition: 'all 0.3s ease',
                              cursor: 'pointer'
                            }}
                            whileHover={{ 
                              scale: 1.05,
                              background: 'rgba(255, 255, 255, 0.15)'
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <div 
                              className="tool-logo"
                              style={{
                                fontSize: '2rem',
                                marginBottom: '0.5rem'
                              }}
                            >
                              {tool.logo}
                            </div>
                            <div 
                              className="tool-name"
                              style={{
                                color: 'white',
                                fontSize: '0.9rem',
                                fontWeight: '500'
                              }}
                            >
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
      </div>
    </div>
  );
};

export default TechAccordion;