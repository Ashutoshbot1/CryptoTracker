import React, { useState, useEffect } from 'react';
import './CursorFollow.css'; // Import your CSS file
import { motion } from "framer-motion";

const CursorFollow = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX+15, y: event.clientY+ 15 });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor-follow"
     style={{ left: cursorPosition.x, top: cursorPosition.y }}>
      <motion.div
        initial={{scale:1}}
        animate={{scale:1.8}}
        transition={{
          type: "smooth",
          repeatType: "mirror",
          duration: 1,
          repeat: Infinity,
        }}
      >👀</motion.div>
    </div>
  );
};

export default CursorFollow;
