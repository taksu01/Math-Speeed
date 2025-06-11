import { useState, useEffect } from 'react';

const GamePage = () => {
  const [gameState, setGameState] = useState<string>('menu');

  useEffect(() => {
    console.log('gameState', gameState);
  }, [gameState]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Math-Speeed!!</h1>
      <p>{gameState}</p>
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={() =>
          setGameState(prev => (prev === 'menu' ? 'Playing' : 'menu'))
        }
      >
        Start Game
      </button>
    </div>
  );
};

export default GamePage;
