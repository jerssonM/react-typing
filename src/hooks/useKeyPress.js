import { useState, useEffect } from 'react';

const useKeyPress = () => {
  const [keyInfo, setKeyInfo] = useState(null);

  useEffect(() => {
    document.addEventListener('keypress', onKeyPress);
    return () => {
      document.removeEventListener('keypress', () => {});
    };
  }, []);

  function onKeyPress({ key: currentKey }) {
    const repeatedKey = currentKey === keyInfo?.key ? keyInfo?.position + 1 : 0;
    setKeyInfo({ key: currentKey, repeat: repeatedKey });
  }

  return [keyInfo, setKeyInfo];
};

export default useKeyPress;
