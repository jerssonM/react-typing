import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import {
  StyledBoard,
  StyledIconText,
  StyledRestoreText,
  StyledButtonReload
} from './TypingComponent.styled';
import useKeyPress from '../../hooks/useKeyPress';
import TypingInput from '../TypingInput/TypingInput';
import useTypingState from '../../hooks/useTypingState';
import { generateRandomText } from '../../utils/strings';

const TypingComponent = ({
  onReset,
  onChange,
  onRestore,
  skipErrors,
  externalText,
  reloadButtonPosition
}) => {
  const [text, setText] = useState(generateRandomText());
  const [keyInfo, setKeyInfo] = useKeyPress();
  const [
    { wordPosition, characterPosition },
    { increaseWpmCounter }
  ] = useTypingState();

  useEffect(() => {
    if (keyInfo) {
      increaseWpmCounter(keyInfo.key);
    }
  }, [keyInfo]);

  return (
    <StyledBoard>
      <StyledButtonReload position={reloadButtonPosition}>
        <StyledRestoreText>Restore</StyledRestoreText>
        <StyledIconText>⟳</StyledIconText>
      </StyledButtonReload>
      <TypingInput
        characterPosition={{ word: wordPosition, character: characterPosition }}
      >
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
  externalText: PropTypes.arrayOf(PropTypes.string),
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
