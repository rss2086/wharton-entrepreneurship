'use client';

import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

// Define types for our components
interface Position {
  x: number;
  y: number;
}

interface Particle {
  id: number;
  position: Position;
  size: number;
  color: string;
  duration: number;
  delay: number;
  shape: 'circle' | 'square' | 'triangle';
  rotation: number;
}

export default function RocketAnimation() {
  const rocketControls = useAnimation();
  const [particles, setParticles] = useState<Particle[]>([]);
  const [rocketPosition, setRocketPosition] = useState<Position>({ x: -100, y: 50 });
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  
  // Wharton brand colors
  const particleColors = [
    'rgb(0, 39, 76)',     // Deep Navy
    'rgb(149, 0, 26)',    // Wharton Red
    'rgb(0, 96, 122)',    // Teal
    'rgb(170, 160, 0)',   // Gold
    'rgba(0, 39, 76, 0.7)' // Transparent Navy
  ];
  
  const requestRef = useRef<number | undefined>(undefined);
  const previousTimeRef = useRef<number | undefined>(undefined);
  
  // Handle mounting
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);
  
  // Generate particles
  useEffect(() => {
    if (!isMounted) return;

    const generateParticles = () => {
      if (particles.length > 40) {
        setParticles(prev => prev.slice(10));
      }
      
      const shapes: ('circle' | 'square' | 'triangle')[] = ['circle', 'square', 'triangle'];
      
      // Create 3-5 new particles at the rocket position
      const newParticles = Array.from({ length: Math.floor(Math.random() * 3) + 3 }, () => ({
        id: Date.now() + Math.random(),
        position: { 
          x: rocketPosition.x - 10, 
          y: rocketPosition.y + Math.random() * 10 - 5
        },
        size: Math.random() * 12 + 6,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
        duration: Math.random() * 0.8 + 0.5,
        delay: 0,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        rotation: Math.random() * 360
      }));
      
      setParticles(prev => [...prev, ...newParticles]);
    };
    
    const interval = setInterval(generateParticles, 50);
    return () => clearInterval(interval);
  }, [isMounted, rocketPosition, particles.length, particleColors]);
  
  // Animate rocket with physics-based animation
  useEffect(() => {
    if (!isMounted) return;

    let velocity = { x: 0, y: 0 };
    let targetX = typeof window !== 'undefined' ? window.innerWidth + 100 : 1200;
    let phase = 'accelerating';
    
    const animate = (timestamp: number) => {
      if (previousTimeRef.current === undefined) {
        previousTimeRef.current = timestamp;
      }
      
      const deltaTime = (timestamp - previousTimeRef.current) / 1000;
      previousTimeRef.current = timestamp;

      const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
      const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
      
      // Determine phase and target based on current position
      if (phase === 'accelerating' && rocketPosition.x > windowWidth * 0.4) {
        phase = 'looping';
        targetX = windowWidth * 0.6;
      } else if (phase === 'looping' && Math.abs(rocketPosition.x - targetX) < 50) {
        phase = 'exiting';
        targetX = windowWidth + 100;
      } else if (phase === 'exiting' && rocketPosition.x > windowWidth + 50) {
        // Reset for next run
        setRocketPosition({ x: -100, y: 50 });
        velocity = { x: 0, y: 0 };
        phase = 'accelerating';
        targetX = windowWidth + 100;
        
        // Brief pause before next run
        setIsVisible(false);
        setTimeout(() => setIsVisible(true), 1000);
        
        requestRef.current = requestAnimationFrame(animate);
        return;
      }
      
      // Calculate new position based on phase
      let targetY = 50;
      const acceleration = { x: 0, y: 0 };
      
      if (phase === 'accelerating') {
        acceleration.x = 300;
        targetY = 50 + Math.sin(rocketPosition.x / 100) * 20;
      } else if (phase === 'looping') {
        // Create a loop effect
        const angle = (rocketPosition.x - windowWidth * 0.4) / (windowWidth * 0.2) * Math.PI * 2;
        targetY = windowHeight * 0.3 + Math.sin(angle) * 100;
        
        // Adjust x velocity to slow down during loop
        const targetVelocityX = 100 + Math.cos(angle) * 200;
        acceleration.x = (targetVelocityX - velocity.x) * 2;
      } else if (phase === 'exiting') {
        acceleration.x = 500;
        targetY = 50 - Math.sin(rocketPosition.x / 100) * 30;
      }
      
      // Apply spring physics for smooth movement
      acceleration.y = (targetY - rocketPosition.y) * 5 - velocity.y * 2;
      
      // Update velocity
      velocity.x += acceleration.x * deltaTime;
      velocity.y += acceleration.y * deltaTime;
      
      // Update position
      const newX = rocketPosition.x + velocity.x * deltaTime;
      const newY = rocketPosition.y + velocity.y * deltaTime;
      
      setRocketPosition({ x: newX, y: newY });
      
      // Update rocket animation based on phase and velocity
      const rotation = phase === 'looping' 
        ? Math.atan2(velocity.y, velocity.x) * (180 / Math.PI)
        : Math.min(20, Math.max(-20, velocity.y * 0.2));
        
      rocketControls.start({
        rotate: rotation,
        scale: phase === 'accelerating' ? 1 + (velocity.x / 2000) : 1,
        transition: { duration: 0 }
      });
      
      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isMounted, rocketControls]);

  // Don't render anything until mounted
  if (!isMounted) {
    return null;
  }

  const getParticleShape = (shape: 'circle' | 'square' | 'triangle') => {
    switch (shape) {
      case 'square':
        return 'rounded-none';
      case 'triangle':
        return 'clip-path-triangle';
      default:
        return 'rounded-full';
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full h-40 z-20 pointer-events-none overflow-hidden">
      {/* Particles */}
      <AnimatePresence>
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className={`absolute ${getParticleShape(particle.shape)}`}
            style={{
              backgroundColor: particle.color,
              width: particle.size,
              height: particle.size,
              x: particle.position.x,
              y: particle.position.y,
              rotate: particle.rotation,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}80`
            }}
            initial={{ opacity: 0.8, scale: 1, rotate: particle.rotation }}
            animate={{ 
              opacity: 0,
              scale: 0.2,
              x: particle.position.x - 50 - Math.random() * 30,
              y: particle.position.y + (Math.random() * 40 - 20),
              rotate: particle.rotation + 180
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: particle.duration,
              ease: "easeOut"
            }}
          />
        ))}
      </AnimatePresence>
      
      {/* Rocket */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="absolute"
            style={{ 
              x: rocketPosition.x, 
              y: rocketPosition.y,
              width: '60px',
              height: '30px',
              originX: 0.5,
              originY: 0.5
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={rocketControls}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            {/* Rocket body */}
            <div className="relative w-full h-full">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[rgb(0,39,76)]/30 rounded-full blur-xl transform scale-150"></div>
              
              {/* Rocket shape */}
              <div className="relative w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-1/2 left-0 w-full h-[16px] bg-[rgb(0,39,76)] rounded-full transform -translate-y-1/2 shadow-lg"></div>
                  <div className="absolute top-1/2 left-[10%] w-[70%] h-[16px] bg-gradient-to-r from-[rgb(149,0,26)] to-[rgb(0,96,122)] rounded-full transform -translate-y-1/2"></div>
                  <div className="absolute top-1/2 right-[5%] w-[15%] h-[20px] bg-[rgb(149,0,26)] rounded-full transform -translate-y-1/2"></div>
                  <div className="absolute top-1/2 left-0 w-[15%] h-[20px] bg-[rgb(0,96,122)] rounded-r-full transform -translate-y-1/2"></div>
                  <div className="absolute top-[20%] left-[30%] w-[30%] h-[8px] bg-[rgb(170,160,0)] rounded-full"></div>
                </div>
              </div>
              
              {/* Engine flames */}
              <div className="absolute -left-[15px] top-1/2 transform -translate-y-1/2">
                <motion.div
                  className="relative"
                  animate={{
                    opacity: [0.7, 1, 0.7],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 0.3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <div className="w-[30px] h-[10px] bg-gradient-to-l from-transparent via-[rgb(170,160,0)] to-[rgb(149,0,26)] rounded-l-full blur-[2px]"></div>
                  <div className="absolute top-1/2 left-0 w-[20px] h-[6px] bg-gradient-to-l from-transparent via-white to-[rgb(170,160,0)] rounded-l-full transform -translate-y-1/2 blur-[1px]"></div>
                </motion.div>
              </div>
              
              {/* Speed lines */}
              <motion.div
                className="absolute -right-[40px] top-1/2 transform -translate-y-1/2"
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  x: [0, -10, 0]
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity
                }}
              >
                <div className="w-[40px] h-[1px] bg-[rgb(0,39,76)] mb-[5px]"></div>
                <div className="w-[30px] h-[1px] bg-[rgb(0,39,76)] mb-[5px]"></div>
                <div className="w-[20px] h-[1px] bg-[rgb(0,39,76)]"></div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 