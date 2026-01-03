import React from 'react';

interface BadgeProps {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({ label, onClick, isActive }) => {
  return (
    <span
      onClick={onClick}
      className={`
        inline-flex items-center px-3 py-1 text-[10px] uppercase tracking-wider font-medium cursor-pointer transition-all duration-300 border
        ${isActive 
          ? 'bg-white text-black border-white' 
          : 'bg-transparent text-neutral-400 border-neutral-800 hover:border-neutral-500 hover:text-white'}
      `}
    >
      {label}
    </span>
  );
};