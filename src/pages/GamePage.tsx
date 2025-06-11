import { useEffect, useState } from 'react';
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

  useEffect(() => {
    handleNewQuestion();
  }, []);

  const handleNewQuestion = () => {
    const { question, answer } = generateQuestion();
    setQuestion(question);
    setRealAnswer(answer);
  };

  const handleSubmit = (answer: number) => {
    if (answer === realAnswer) {
      setScore(score + 1);
    }
    handleNewQuestion();
  };

  const handleTimeout = () => {
    alert('Game Over');
    setTimer(GAME_DURATION);
  };

  const handleStartGame = () => {
    setTimer(GAME_DURATION);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {timer === 0}
      <h1 className="text-4xl font-bold">Math-Speeed!!</h1>
      <ScoreDisplay score={score} />
      <Timer seconds={timer} onTimeout={handleTimeout} />
      <QuestionCard question={question} />
      <InputField onSubmit={handleSubmit} />
    </div>
  );
};

export default GamePage;
