import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import './EcoParticleHero.css';

/**
 * EcoParticleHero Component
 * A React component that creates an eco-friendly gradient background with animated green leaves
 * Features: Gradient background, falling green leaves animation, hero text content, theme-aware
 */
const EcoParticleHero = React.memo(({ 
  title = "Unlock High-Growth Real Estate Investments", 
  subtitle = "Access exclusive investment opportunities in commercial and residential properties. Join Urban Seed and be part of sustainable urban development.",
  ctaText = "Start Investing",
  onCTAClick,
  height = "100vh", 
  className = "" 
}) => {
  const { theme } = useTheme();
  const [particles, setParticles] = useState([]);

  // Generate falling green leaves only
  useEffect(() => {
    const generateParticles = () => {
      const leafTypes = [
        { type: 'leaf3', icon: '🌿', color: '#16a34a' },
      ];

      const newParticles = [];
      
      // Create 30 falling green leaves for a natural rain effect
      for (let i = 0; i < 30; i++) {
        const leafType = leafTypes[Math.floor(Math.random() * leafTypes.length)];
        newParticles.push({
          id: i,
          ...leafType,
          x: Math.random() * 100, // Start position across screen width
          startY: -10 - Math.random() * 50, // Start above screen
          endY: 110 + Math.random() * 20, // End below screen
          delay: Math.random() * 10, // Staggered start times (0-10s)
          duration: 8 + Math.random() * 6, // Fall duration (8-14s)
          drift: (Math.random() - 0.5) * 30, // Horizontal drift (-15 to +15)
          rotation: Math.random() * 360, // Initial rotation
          size: 1.2 + Math.random() * 0.8, // Size variation (1.2-2.0) - bigger leaves
        });
      }
      
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  // Particle size mapping
  const getLeafSize = (sizeMultiplier) => {
    return `${sizeMultiplier}rem`;
  };

  // Theme-aware gradient classes
  const gradientClass = theme === 'dark' 
    ? 'eco-gradient-dark' 
    : 'eco-gradient-light';

  return (
    <div className={`eco-particle-hero ${gradientClass} ${className}`} style={{ height }}>
      {/* Gradient Background */}
      <div className="eco-gradient-overlay" />
      
      {/* Falling Green Leaves */}
      <div className="eco-particles-container">
        <AnimatePresence>
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="eco-leaf-particle"
              initial={{ 
                x: `${particle.x}vw`,
                y: `${particle.startY}vh`,
                rotate: particle.rotation,
                scale: 0,
                opacity: 0
              }}
              animate={{ 
                x: `${particle.x + particle.drift}vw`,
                y: `${particle.endY}vh`,
                rotate: particle.rotation + 720, // Two full rotations while falling
                scale: particle.size,
                opacity: [0, 0.8, 0.8, 0]
              }}
              exit={{
                opacity: 0,
                scale: 0
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: [0.25, 0.46, 0.45, 0.94], // Natural falling curve
                times: [0, 0.1, 0.9, 1] // Opacity timing
              }}
              style={{
                fontSize: getLeafSize(particle.size),
                color: particle.color,
                filter: `hue-rotate(${Math.random() * 15 - 7.5}deg) brightness(${0.9 + Math.random() * 0.2})`
              }}
            >
              <span className="leaf-emoji" role="img" aria-label={particle.type}>
                {particle.icon}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Hero Content with Enhanced Visibility */}
      <div className="eco-hero-content">
        <div className="max-w-4xl mx-auto text-center px-4">
          {/* Main Title with Strong Visibility */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              color: 'white',
              textShadow: `
                0 3px 6px rgba(0,0,0,0.9),
                0 6px 12px rgba(0,0,0,0.6),
                0 1px 0 rgba(0,0,0,1),
                0 0 20px rgba(0,0,0,0.8)
              `
            }}
          >
            {title}
          </motion.h1>

          {/* Subtitle with Enhanced Readability */}
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{
              color: 'rgba(255,255,255,0.95)',
              textShadow: `
                0 2px 4px rgba(0,0,0,0.8),
                0 4px 8px rgba(0,0,0,0.5),
                0 1px 0 rgba(0,0,0,0.9)
              `
            }}
          >
            {subtitle}
          </motion.p>

          {/* Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <button 
              onClick={onCTAClick}
              className="glass-cta-button px-8 py-4 text-lg md:text-xl font-semibold hover:scale-105 transition-all duration-300"
              style={{
                backdropFilter: 'blur(25px) saturate(180%)',
                background: 'rgba(34, 197, 94, 0.9)',
                border: '2px solid rgba(255,255,255,0.3)',
                color: 'white',
                borderRadius: '12px',
                textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                boxShadow: `
                  0 12px 40px rgba(0, 0, 0, 0.4),
                  inset 0 1px 0 rgba(255, 255, 255, 0.3)
                `
              }}
            >
              {ctaText}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="parallax-hero-scroll-indicator">
          <div className="scroll-indicator-line" />
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="white"
            className="scroll-indicator-icon"
            style={{
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))'
            }}
          >
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
      </div>

      {/* Accessibility: Screen reader description */}
      <div className="sr-only">
        Decorative natural scene with gently falling green leaves creating a peaceful, 
        eco-friendly atmosphere representing environmental harmony and sustainable growth.
      </div>
    </div>
  );
});

EcoParticleHero.displayName = 'EcoParticleHero';

export default EcoParticleHero;
