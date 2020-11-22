import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import {
  StyledText,
  StyledCharacter,
  StyledTypingInput
} from './TypingInput.styled';

const TypingInput = ({ children, errorsList, currentIndex }) => {
  const renderedText = useMemo(
    () =>
      Array.from(children).map((word, index) => (
        <StyledCharacter
          key={`${word}-${index}`}
          isSuccess={currentIndex > index}
          isError={errorsList.includes(index)}
          isSelected={currentIndex === index}
        >
          {word}
        </StyledCharacter>
      )),
    [children, errorsList, currentIndex]
  );

  return (
    <StyledTypingInput>
      <StyledText>{renderedText}</StyledText>
    </StyledTypingInput>
  );
};

TypingInput.propTypes = {
  children: PropTypes.string.isRequired,
  currentIndex: PropTypes.number.isRequired,
  errorsList: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default TypingInput;
