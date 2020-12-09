import faker from 'faker';
import React, { useState, useEffect } from 'react';

import {
  StyledBoard,
  StyledIconText,
  StyledButtonReload
} from './Panel.styled';
import TypingInput from '../TypingInput';
import { propTypes, defaultProps } from './propTypes';

const Panel = ({ customText, reloadText, reloadButtonPosition }) => {
  const [errorsList, setErrorsList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCaracter, setCurrentCaracter] = useState(null);
  const [localText, setLocalText] = useState(faker.random.words(200));

  const text = customText || localText;
  const onReloadText = reloadText || reloadLocalText;

  useEffect(() => {
    document.addEventListener('keypress', onKeyPress);
    return () => {
      document.removeEventListener('keypress', () => {});
    };
  }, []);

  useEffect(() => {
    if (currentCaracter !== null) {
      if (currentCaracter.key === text[currentIndex]) {
        setCurrentIndex(currentIndex + 1);
      } else {
        const lastError = errorsList.length - 1;
        if (errorsList[lastError] !== currentIndex) {
          setErrorsList([...errorsList, currentIndex]);
        }
      }
    }
  }, [currentCaracter]);

  function onKeyPress({ key: currentKey }) {
    const repeatKey =
      currentKey === currentCaracter?.key ? currentCaracter?.position + 1 : 0;
    setCurrentCaracter({ key: currentKey, repeat: repeatKey });
  }

  function reloadLocalText() {
    setErrorsList([]);
    setCurrentIndex(0);
    setCurrentCaracter(null);
    setLocalText(faker.random.words(200));
  }

  return (
    <StyledBoard>
      <StyledButtonReload
        onClick={onReloadText}
        position={reloadButtonPosition}
      >
        <StyledIconText>⟳</StyledIconText>
      </StyledButtonReload>
      <TypingInput errorsList={errorsList} currentIndex={currentIndex}>
        {text}
      </TypingInput>
    </StyledBoard>
  );
};

Panel.propTypes = propTypes;

Panel.defaultProps = defaultProps;

export default Panel;
