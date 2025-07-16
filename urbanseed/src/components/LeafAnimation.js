import React, { useEffect, useState } from 'react';

// Use the leaf emoji for simplicity and guaranteed visibility
const leafEmoji = '🍃';

// Generate a random leaf (using emoji, bigger size)
const generateLeaf = (index) => {
  const randomSize = Math.random() * 25 + 20; // 20-45px (bigger than before)
  const randomLeft = Math.random() * 100; // 0-100%
  const randomDelay = Math.random() * 5; // 0-5s delay
  const randomDuration = Math.random() * 10 + 10; // 10-20s duration
  const randomRotation = Math.random() * 360; // 0-360deg
  const randomOpacity = Math.random() * 0.5 + 0.3; // 0.3-0.8 opacity (slightly more visible)

  return {
    id: index,
    emoji: leafEmoji,
    size: randomSize,
    left: randomLeft,
    delay: randomDelay,
    duration: randomDuration,
    rotation: randomRotation,
    opacity: randomOpacity,
    createdAt: Date.now(),
  };
};

const LeafAnimation = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    // Generate fewer initial leaves for better performance
    const initialLeaves = Array.from({ length: 15 }, (_, i) => generateLeaf(i));
    setLeaves(initialLeaves);

    // Add new leaves less frequently and clean up old ones
    const interval = setInterval(() => {
      setLeaves((prev) => {
        // Remove leaves that have been around too long (cleanup)
        const cleanedLeaves = prev.filter((leaf, index) => {
          const leafAge = Date.now() - (leaf.createdAt || Date.now());
          return leafAge < 25000; // Remove leaves older than 25 seconds
        });
        
        // Only add new leaf if we don't have too many
        if (cleanedLeaves.length < 20) {
          const newLeaf = generateLeaf(Date.now());
          newLeaf.createdAt = Date.now();
          return [...cleanedLeaves, newLeaf];
        }
        
        return cleanedLeaves;
      });
    }, 3000); // Reduced frequency to every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute animate-fall"
          style={{
            left: `${leaf.left}%`,
            fontSize: `${leaf.size}px`,
            opacity: leaf.opacity,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
            transform: `rotate(${leaf.rotation}deg)`,
            top: '-50px',
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
          }}
        >
          {leaf.emoji}
        </div>
      ))}
    </div>
  );
};

export default LeafAnimation;
