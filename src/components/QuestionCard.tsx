import { memo } from 'react';

export const QuestionCard = memo(({ question }: { question: string }) => {
  return (
    <div className="text-7xl font-semibold mb-10">
      {question.replace('*', 'x')}
    </div>
  );
});
