import { useEffect, useState } from 'react';

export const Timer = ({
  timeLeft,
  handleTimer,
  onTimeout,
}: {
  timeLeft: number;
  handleTimer: () => void;
  onTimeout: () => void;
}) => {
  useEffect(() => {
    if (timeLeft === 0) return onTimeout();
    const timer = setInterval(() => handleTimer(), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, onTimeout, handleTimer]);

  return <div className="text-xl">{`🕐 ${timeLeft}s`}</div>;
};
