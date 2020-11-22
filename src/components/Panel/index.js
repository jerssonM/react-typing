import faker from 'faker';
import React, { useState, useEffect } from 'react';

import TypingInput from '../TypingInput';
import { StyledBoard } from './Panel.styled';
import { propTypes, defaultProps } from './propTypes';

const Panel = ({ customText }) => {
  const [errorsList, setErrorsList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState(faker.random.words(200));
  const [currentCaracter, setCurrentCaracter] = useState(null);

  useEffect(() => {
    document.addEventListener('keypress', onKeyPress);
  }, []);

  useEffect(() => {
    if (customText && customText !== text) {
      setText(customText);
    }
  }, [customText]);

  useEffect(() => {
    if (currentCaracter !== null) {
      if (currentCaracter === text[currentIndex]) {
        setCurrentIndex(currentIndex + 1);
      } else {
        const lastError = errorsList.length - 1;
        if (errorsList[lastError] !== currentIndex) {
          setErrorsList([...errorsList, currentIndex]);
        }
      }
    }
  }, [currentCaracter]);

  function onKeyPress(event) {
    setCurrentCaracter(event.key);
  }

  return (
    <StyledBoard>
      <TypingInput errorsList={errorsList} currentIndex={currentIndex}>
        {text}
      </TypingInput>
    </StyledBoard>
  );
};

Panel.propTypes = propTypes;

Panel.defaultProps = defaultProps;

export default Panel;
