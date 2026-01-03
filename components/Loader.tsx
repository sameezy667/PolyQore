import React, { useEffect, useState } from 'react';
import { TextScramble } from './TextScramble';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Slight delay after 100%
          return 100;
        }
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center text-offwhite">
      <div className="text-[10vw] font-bold tabular-nums leading-none">
        <TextScramble text={`${Math.min(progress, 100)}%`} trigger={true} speed={0.5} />
      </div>
      <div className="mt-4 text-xs uppercase tracking-widest text-neutral-500">
        <TextScramble text="INITIALIZING SYSTEM..." trigger={true} />
      </div>
    </div>
  );
};