import { useEffect, useState, useCallback } from 'react';
import { ScoreDisplay } from '../components/ScoreDisplay';
import { InputField } from '../components/InputField';
import { QuestionCard } from '../components/QuestionCard';
import { Timer } from '../components/Timer';
import { generateQuestion } from '../utils/questionGeneration';

const GAME_DURATION = 10;

const GamePage = () => {
  const [score, setScore] = useState<number>(0);
  const [question, setQuestion] = useState<string>('');
  const [realAnswer, setRealAnswer] = useState<number>(0);
  const [timer, setTimer] = useState<number>(GAME_DURATION);

  // Use useCallback to memoize functions and prevent unnecessary re-renders
  const handleNewQuestion = useCallback(() => {
    const { question, answer } = generateQuestion();
    setQuestion(question);
    setRealAnswer(answer);
  }, []);

  const handleSubmit = useCallback(
    (answer: number) => {
      if (answer === realAnswer) {
        setScore(prev => prev + 1);
      }
      handleNewQuestion();
    },
    [realAnswer, handleNewQuestion]
  );

  const handleTimer = useCallback(() => {
    setTimer(prev => prev - 1);
  }, []);

  const handleTimeout = useCallback(() => {
    // alert('Game Over');
  }, []);

  const handleStartGame = useCallback(() => {
    setTimer(GAME_DURATION);
  }, []);

  // Fix useEffect dependency array
  useEffect(() => {
    handleNewQuestion();
  }, [handleNewQuestion]);

  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center bg-red-200">
      <div className="flex flex-col bg-gray-100 px-10 py-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-10">🧠 Math Speeedz</h1>
        <QuestionCard question={question} />
        <div>
          <InputField onSubmit={handleSubmit} />
        </div>
        <div className="flex flex-row justify-between mt-5">
          <ScoreDisplay score={score} />
          <Timer
            timeLeft={timer}
            handleTimer={handleTimer}
            onTimeout={handleTimeout}
          />
        </div>
        {timer === 0 ? (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
            onClick={handleStartGame}
          >
            Start Game
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default GamePage;
