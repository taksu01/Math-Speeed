import { useEffect, useState } from 'react';

export const Timer = ({
  seconds,
  onTimeout,
}: {
  seconds: number;
  onTimeout: () => void;
}) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  useEffect(() => {
    if (timeLeft === 0) return onTimeout();
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, onTimeout]);

  return <div className="text-2xl font-bold">{timeLeft}</div>;
};
