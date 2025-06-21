import { memo } from 'react';

export const QuestionCard = memo(({ question }: { question: string }) => {
  return question ? (
    <div className="text-7xl font-semibold mb-10">
      <span className="text-black-500">{question.replace('*', 'x')}</span>
    </div>
  ) : null;
});
