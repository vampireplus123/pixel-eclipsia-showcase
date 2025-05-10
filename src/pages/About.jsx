
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PixelButton from '../components/PixelButton';
import { Link } from 'react-router-dom';

const About = () => {
  React.useEffect(() => {
    document.title = "About - Eclipsia Game Studio";
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="pixel-text text-2xl md:text-3xl text-white mb-8">ABOUT ECLIPSIA</h1>
            
            <div className="mb-12 pixel-borders border-eclipsia-purple p-6 bg-gradient-to-br from-eclipsia-deep-blue to-eclipsia-dark-blue">
              <h2 className="pixel-text text-xl text-white mb-4">OUR STORY</h2>
              <p className="text-gray-300 mb-4">
                Founded in 2020, Eclipsia Game Studio was born from a shared passion for creating games that blend 
                nostalgic pixel art aesthetics with modern gameplay mechanics. Our team of developers, artists, 
                and designers work together to craft unique gaming experiences that resonate with players.
              </p>
              <p className="text-gray-300">
                We believe that games are more than just entertainment—they're interactive stories that bring 
                people together, challenge minds, and create lasting memories. Every title we develop is crafted 
                with attention to detail and a deep appreciation for both retro and contemporary gaming cultures.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="pixel-borders border-eclipsia-purple p-6 bg-gradient-to-br from-eclipsia-deep-blue to-eclipsia-dark-blue">
                <h2 className="pixel-text text-lg text-white mb-3">OUR MISSION</h2>
                <p className="text-gray-300">
                  To create memorable gaming experiences that combine pixel-perfect visuals with innovative gameplay, 
                  delivering titles that are accessible to casual players while offering depth for hardcore gamers.
                </p>
              </div>
              
              <div className="pixel-borders border-eclipsia-purple p-6 bg-gradient-to-br from-eclipsia-deep-blue to-eclipsia-dark-blue">
                <h2 className="pixel-text text-lg text-white mb-3">OUR VISION</h2>
                <p className="text-gray-300">
                  To become a leading indie game studio known for creating distinctive games that push the boundaries 
                  of pixel art style while delivering compelling narratives and engaging mechanics.
                </p>
              </div>
            </div>
            
            <div className="pixel-borders border-eclipsia-purple p-6 bg-gradient-to-br from-eclipsia-deep-blue to-eclipsia-dark-blue mb-12">
              <h2 className="pixel-text text-xl text-white mb-4">OUR TEAM</h2>
              <p className="text-gray-300 mb-4">
                Eclipsia Game Studio is home to a diverse team of passionate gamers, artists, developers, writers, 
                and designers who bring their unique perspectives and talents to every project. We value creativity, 
                collaboration, and a player-first approach to game development.
              </p>
              <p className="text-gray-300">
                Our small but mighty team has decades of combined experience in the gaming industry, with backgrounds 
                spanning from AAA studios to experimental indie projects.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="pixel-text text-lg text-white mb-4">JOIN THE ADVENTURE</h3>
              <p className="text-gray-300 mb-6">
                Want to learn more about our studio or interested in working with us?
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Link to="/games">
                  <PixelButton color="yellow">
                    Explore Games
                  </PixelButton>
                </Link>
                <Link to="/contact">
                  <PixelButton color="purple">
                    Contact Us
                  </PixelButton>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
