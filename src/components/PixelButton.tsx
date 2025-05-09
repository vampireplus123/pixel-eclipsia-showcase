
import React from 'react';
import { cn } from "@/lib/utils";

interface PixelButtonProps {
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'accent' | 'purple' | 'cyan' | 'yellow' | 'pink';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const PixelButton: React.FC<PixelButtonProps> = ({ 
  children, 
  color = 'primary', 
  size = 'md',
  className,
  onClick
}) => {
  const colorClasses = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
    accent: 'bg-accent text-accent-foreground hover:bg-accent/90',
    purple: 'bg-eclipsia-purple text-white hover:bg-eclipsia-purple/90',
    cyan: 'bg-eclipsia-cyan text-eclipsia-dark-blue hover:bg-eclipsia-cyan/90',
    yellow: 'bg-eclipsia-yellow text-eclipsia-dark-blue hover:bg-eclipsia-yellow/90',
    pink: 'bg-eclipsia-pink text-white hover:bg-eclipsia-pink/90',
  };

  const sizeClasses = {
    sm: 'text-xs px-3 py-1',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3',
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        'pixel-borders pixel-corners font-medium transition-transform active:translate-y-1',
        'active:shadow-none transform hover:scale-105 motion-reduce:transform-none',
        'text-center inline-flex items-center justify-center whitespace-nowrap',
        colorClasses[color],
        sizeClasses[size],
        className
      )}
    >
      <span className="pixel-text-alt">{children}</span>
    </button>
  );
};

export default PixelButton;
