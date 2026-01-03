import React, { useEffect, useRef, useState } from 'react';

interface TextScrambleProps {
  text: string;
  trigger?: boolean; // If true, triggers the effect
  hover?: boolean;   // If true, triggers on hover
  className?: string;
  speed?: number;
  chars?: string;
}

export const TextScramble: React.FC<TextScrambleProps> = ({ 
  text, 
  trigger = true, 
  hover = false,
  className = "",
  speed = 1,
  chars = '!<>-_\\/[]{}—=+*^?#'
}) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<number | null>(null);
  const isHovering = useRef(false);

  const scramble = () => {
    let iteration = 0;
    
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = window.setInterval(() => {
      setDisplayText(prev => 
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }

      iteration += 1 / speed;
    }, 30);
  };

  useEffect(() => {
    if (trigger && !hover) {
      scramble();
    }
  }, [trigger, text]);

  const handleMouseEnter = () => {
    if (hover) {
      isHovering.current = true;
      scramble();
    }
  };

  return (
    <span 
      className={className}
      onMouseEnter={handleMouseEnter}
    >
      {displayText}
    </span>
  );
};