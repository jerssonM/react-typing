import { useState } from 'react';

const initialState = { wpm: 0, errors: 0 };

const useInteralTyping = () => {
  const [wordPosition, setWordPosition] = useState(0);
  const [characterPosition, setCharacterPosition] = useState(0);
  const [typingState, setTypingState] = useState(initialState);

  function increaseWpmCounter(key) {
    if (key === ' ') {
      setTypingState((prev) => ({ ...prev, wpm: prev.wpm + 1 }));
      setWordPosition((prev) => prev + 1);
      setCharacterPosition(0);
    }
    setCharacterPosition((prev) => prev + 1);
  }

  function increaseErrorCounter() {
    setTypingState((prev) => ({ ...prev, errors: prev.errors + 1 }));
  }

  function reset() {
    setWordPosition(0);
    setCharacterPosition(0);
  }

  return [
    { typingState, wordPosition, characterPosition },
    { reset, increaseWpmCounter, increaseErrorCounter }
  ];
};

export default useInteralTyping;
