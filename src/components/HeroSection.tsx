
import React from 'react';
import PixelButton from './PixelButton';

const HeroSection = () => {
  return (
    <section className="relative py-16 px-6 md:py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-eclipsia-purple/20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-eclipsia-cyan/20 blur-3xl"></div>
      
      {/* Star pixels */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-eclipsia-yellow animate-pulse-pixel"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-eclipsia-pink animate-pulse-pixel"></div>
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-eclipsia-purple animate-pulse-pixel"></div>
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h1 className="pixel-text text-2xl md:text-4xl mb-6 text-white">
          <span className="block text-eclipsia-yellow">WELCOME TO</span>
          ECLIPSIA GAME STUDIO
        </h1>
        
        <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Where innovation meets imagination. We craft immersive pixel adventures and cutting-edge digital experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <PixelButton color="purple" size="lg">
            Explore Games
          </PixelButton>
          <PixelButton color="cyan" size="lg">
            Join Our Community
          </PixelButton>
        </div>
        
        <div className="mt-16 relative">
          <div className="w-full h-40 md:h-52 bg-gradient-to-b from-eclipsia-deep-blue to-transparent absolute top-0 left-0 z-10"></div>
          <div className="w-full h-40 md:h-52 bg-gradient-to-t from-eclipsia-dark-blue to-transparent absolute -bottom-16 left-0 z-10"></div>
          <div className="relative z-0 animate-float">
            <div className="pixel-borders border-eclipsia-purple overflow-hidden">
              <div className="bg-gradient-to-br from-eclipsia-deep-blue to-eclipsia-dark-blue p-4 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="aspect-video bg-black/30 rounded-sm overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-eclipsia-purple/20 to-eclipsia-cyan/20">
                        {/* Game preview placeholder */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
