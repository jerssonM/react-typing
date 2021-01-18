import { useState, useEffect } from 'react';

const useKeyPress = () => {
  const [currentCaracter, setCurrentCaracter] = useState(null);

  useEffect(() => {
    document.addEventListener('keypress', onKeyPress);
    return () => {
      document.removeEventListener('keypress', () => {});
    };
  }, []);

  function onKeyPress({ key: currentKey }) {
    const repeatedKey =
      currentKey === currentCaracter?.key ? currentCaracter?.position + 1 : 0;
    setCurrentCaracter({ key: currentKey, repeat: repeatedKey });
  }

  return [currentCaracter, setCurrentCaracter];
};

export default useKeyPress;
