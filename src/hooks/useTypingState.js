import { useState } from 'react';

const initialState = { wpm: 0, errors: 0 };

const useInteralTyping = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingState, setTypingState] = useState(initialState);

  function increaseWpmCounter(key) {
    if (key === ' ') {
      setTypingState((prev) => ({ ...prev, wpm: prev.wpm + 1 }));
    }
    setCurrentIndex((prev) => prev + 1);
  }

  function increaseErrorCounter() {
    setTypingState((prev) => ({ ...prev, errors: prev.errors + 1 }));
  }

  function resetIndex() {
    setCurrentIndex(0);
  }

  return [
    { typingState, currentIndex },
    { resetIndex, increaseWpmCounter, increaseErrorCounter }
  ];
};

export default useInteralTyping;
