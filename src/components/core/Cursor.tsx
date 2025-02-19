import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <>
      <div 
        className="fixed w-4 h-4 rounded-full bg-purple-500/50 pointer-events-none z-50 mix-blend-screen"
        style={{
          left: position.x - 8,
          top: position.y - 8,
          transition: 'transform 0.1s ease-out',
          transform: isPointer ? 'scale(1.5)' : 'scale(1)',
        }}
      />
      <div 
        className="fixed w-8 h-8 rounded-full border border-purple-500/30 pointer-events-none z-50"
        style={{
          left: position.x - 16,
          top: position.y - 16,
          transition: 'all 0.15s ease-out',
          transform: isPointer ? 'scale(1.5)' : 'scale(1)',
        }}
      />
    </>
  );
};

export default CustomCursor;