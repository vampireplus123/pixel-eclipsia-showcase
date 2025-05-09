
import React from 'react';
import { cn } from '../lib/utils';
import PixelButton from './PixelButton';

const GameCard = ({
  title,
  description,
  imageUrl,
  tags = [],
  className,
}) => {
  return (
    <div 
      className={cn(
        "pixel-borders border-eclipsia-purple overflow-hidden",
        "bg-gradient-to-br from-eclipsia-deep-blue to-eclipsia-dark-blue",
        "transform transition-all duration-300 hover:scale-[1.02]",
        className
      )}
    >
      <div className="relative aspect-video overflow-hidden">
        <div className={cn(
          "w-full h-full bg-black/50",
          imageUrl ? "bg-cover bg-center" : "bg-gradient-to-br from-eclipsia-purple/20 to-eclipsia-cyan/20"
        )} style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}>
        </div>
        {/* Game platform icons could go here */}
        <div className="absolute top-2 right-2 bg-eclipsia-dark-blue/80 px-2 py-1">
          <span className="pixel-text-alt text-xs text-white">Coming Soon</span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="pixel-text text-sm md:text-base text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs bg-eclipsia-deep-blue pixel-borders border-eclipsia-purple/50 px-2 py-0.5 text-eclipsia-purple"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <PixelButton color="cyan" size="sm" className="w-full">
          Learn More
        </PixelButton>
      </div>
    </div>
  );
};

export default GameCard;
