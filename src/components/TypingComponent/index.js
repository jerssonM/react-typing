import faker from 'faker';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import {
  StyledBoard,
  StyledIconText,
  StyledRestoreText,
  StyledButtonReload
} from './TypingComponent.styled';
import TypingInput from '../TypingInput';
import useKeyPress from '../../hooks/useKeyPress';
import useInteralTyping from '../../hooks/useTypingState';

const TypingComponent = ({
  onReset,
  onChange,
  onRestore,
  skipErrors,
  externalText,
  reloadButtonPosition
}) => {
  const [errorsList, setErrorsList] = useState([]);
  const [currentCaracter, setCurrentCaracter] = useKeyPress();
  const [localText, setLocalText] = useState(faker.random.words(200));
  const [
    { typingState, currentIndex },
    { resetIndex, increaseWpmCounter, increaseErrorCounter }
  ] = useInteralTyping();

  const text = externalText || localText;

  useEffect(() => {
    onChange(typingState);
  }, [typingState]);

  useEffect(() => {
    const validateCharacter = () => {
      if (currentCaracter.key === text[currentIndex]) {
        increaseWpmCounter(currentCaracter.key);
      } else {
        const lastError = errorsList.length - 1;
        increaseErrorCounter();
        if (errorsList[lastError] !== currentIndex) {
          setErrorsList([...errorsList, currentIndex]);
        }
        if (skipErrors) {
          increaseWpmCounter(currentCaracter.key);
        }
      }
    };
    if (currentCaracter !== null) {
      validateCharacter();
    }
  }, [currentCaracter]);

  function resetAndRestore(reset) {
    resetIndex();
    setErrorsList([]);
    setCurrentCaracter(null);
    if (reset) {
      onReset();
      if (!externalText) {
        setLocalText(faker.random.words(200));
      }
    } else {
      onRestore();
    }
  }

  return (
    <StyledBoard>
      <StyledButtonReload position={reloadButtonPosition}>
        <StyledRestoreText
          onClick={() => {
            resetAndRestore(true);
          }}
        >
          Restore
        </StyledRestoreText>
        <StyledIconText
          onClick={() => {
            resetAndRestore();
          }}
        >
          ⟳
        </StyledIconText>
      </StyledButtonReload>
      <TypingInput errorsList={errorsList} currentIndex={currentIndex}>
        {text}
      </TypingInput>
    </StyledBoard>
  );
};

TypingComponent.propTypes = {
  onReset: PropTypes.func,
  onChange: PropTypes.func,
  onRestore: PropTypes.func,
  skipErrors: PropTypes.bool,
  externalText: PropTypes.string,
  reloadButtonPosition: PropTypes.oneOf(['flex-start', 'flex-end', 'center'])
};

TypingComponent.defaultProps = {
  skipErrors: false,
  onReset: () => {},
  onChange: () => {},
  onRestore: () => {},
  externalText: undefined,
  reloadButtonPosition: 'flex-end'
};

export default TypingComponent;
