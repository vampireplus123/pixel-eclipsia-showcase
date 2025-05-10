
import React from 'react';
import { Link } from 'react-router-dom';
import GameCard from './GameCard';
import PixelButton from './PixelButton';

const games = [
  {
    id: 1,
    title: "STELLAR QUEST",
    description: "Embark on an epic journey through space in this roguelike adventure with pixel perfect combat.",
    tags: ["RPG", "Adventure", "Space"]
  },
  {
    id: 2,
    title: "NEON DRIFT",
    description: "Race through procedurally generated cyberpunk cities in this high-speed arcade racer.",
    tags: ["Racing", "Arcade", "Cyberpunk"]
  },
  {
    id: 3,
    title: "PIXEL WARRIORS",
    description: "Assemble your team of heroes and battle through dungeons in this tactical RPG.",
    tags: ["Tactical", "RPG", "Multiplayer"]
  },
  {
    id: 4,
    title: "ECLIPSIA WORLDS",
    description: "Build, craft, and survive in a vast open world full of mystery and danger.",
    tags: ["Sandbox", "Survival", "Crafting"]
  }
];

const ProductsSection = () => {
  return (
    <section className="py-16 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="pixel-text text-xl md:text-2xl text-white">OUR GAMES</h2>
          <Link to="/games">
            <PixelButton color="yellow">
              View All Games
            </PixelButton>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map(game => (
            <GameCard
              key={game.id}
              title={game.title}
              description={game.description}
              tags={game.tags}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="pixel-text text-lg md:text-xl mb-4 text-white">LAUNCHING SOON</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join our community to get early access to our upcoming releases and exclusive content.
          </p>
          <Link to="/contact">
            <PixelButton color="pink" size="lg">
              Subscribe for Updates
            </PixelButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
