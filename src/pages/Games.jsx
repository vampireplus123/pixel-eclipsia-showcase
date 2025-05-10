
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GameCard from '../components/GameCard';

// Game data
const gamesData = [
  {
    id: 1,
    title: "STELLAR QUEST",
    description: "Embark on an epic journey through space in this roguelike adventure with pixel perfect combat and procedurally generated worlds. Explore alien planets, customize your spaceship, and battle cosmic threats.",
    imageUrl: "/images/stellar-quest.jpg",
    tags: ["RPG", "Adventure", "Space", "Roguelike"]
  },
  {
    id: 2,
    title: "NEON DRIFT",
    description: "Race through procedurally generated cyberpunk cities in this high-speed arcade racer. Master the drift mechanics, upgrade your vehicle, and compete in the neon-lit streets of the future.",
    imageUrl: "/images/neon-drift.jpg",
    tags: ["Racing", "Arcade", "Cyberpunk"]
  },
  {
    id: 3,
    title: "PIXEL WARRIORS",
    description: "Assemble your team of heroes and battle through dungeons in this tactical RPG. Each character has unique abilities, and the combat system rewards strategic planning and team synergy.",
    imageUrl: "/images/pixel-warriors.jpg",
    tags: ["Tactical", "RPG", "Multiplayer"]
  },
  {
    id: 4,
    title: "ECLIPSIA WORLDS",
    description: "Build, craft, and survive in a vast open world full of mystery and danger. Discover ancient ruins, tame fantastic creatures, and create your own story in this sandbox adventure.",
    imageUrl: "/images/eclipsia-worlds.jpg",
    tags: ["Sandbox", "Survival", "Crafting"]
  },
  {
    id: 5,
    title: "DUNGEON KEEPER",
    description: "Take on the role of a dungeon master and design the perfect monster-filled labyrinth. Set traps, recruit monsters, and defend your treasure from heroic adventurers.",
    imageUrl: "/images/dungeon-keeper.jpg",
    tags: ["Strategy", "Management", "Fantasy"]
  },
  {
    id: 6,
    title: "RETRO BLASTER",
    description: "A modern take on classic shoot 'em up games with a vibrant pixel art style. Navigate through waves of enemies, collect power-ups, and face epic boss battles.",
    imageUrl: "/images/retro-blaster.jpg",
    tags: ["Shooter", "Arcade", "Action"]
  }
];

const Games = () => {
  React.useEffect(() => {
    document.title = "Games - Eclipsia Game Studio";
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="py-16 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <h1 className="pixel-text text-2xl md:text-3xl text-white">OUR GAMES</h1>
              <p className="text-gray-300 mt-4 max-w-3xl">
                At Eclipsia Game Studio, we craft unique gaming experiences with pixel-perfect precision 
                and immersive gameplay. Explore our current releases and upcoming titles.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gamesData.map(game => (
                <GameCard
                  key={game.id}
                  title={game.title}
                  description={game.description}
                  imageUrl={game.imageUrl}
                  tags={game.tags}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Games;
