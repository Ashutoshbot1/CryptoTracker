
import React, { useState, useEffect } from 'react';
import Typing from 'react-typing-animation';

const TypeAnimation = () => {
    const sentences = [
        "Coin Gecko API Error 🚫",
        "My WebApp is innocent 🥺",
        "Coin Gecko API subscription is too costly 💲",
        "Im poor! 😞",
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
        }, 3000); // Adjust the interval based on your preference
    
        return () => clearInterval(interval);
      }, []);
  return (
    <Typing speed={120}>
        <span>{sentences[currentIndex]}</span>
      </Typing>
  );
};

export default TypeAnimation;
