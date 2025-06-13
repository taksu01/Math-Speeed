import { memo } from 'react';

export const ScoreDisplay = memo(({ score }: { score: number }) => (
  <div className="text-xl">Score: {score}</div>
));
