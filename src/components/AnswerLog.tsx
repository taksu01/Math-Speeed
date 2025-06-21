import React from 'react';

const AnswerLog = React.memo(({ answer }: { answer: string[] }) => {
  return (
    <div className="flex flex-col-reverse justify-center items-center w-1/3 ">
      {answer.map((item, index) => (
        <div key={index} className="bg-gray-200 w-full rounded-lg">
          <span className="text-center">{item}</span>
        </div>
      ))}
    </div>
  );
});

export default AnswerLog;
