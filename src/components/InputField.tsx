import { useState } from 'react';

export const InputField = ({
  onSubmit,
}: {
  onSubmit: (answer: number) => void;
}) => {
  const [value, setValue] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(Number(value));
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="border px-4 py-2 text-xl w-full"
        autoFocus
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};
