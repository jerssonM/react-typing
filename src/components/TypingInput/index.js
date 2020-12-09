import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import {
  StyledText,
  StyledCharacter,
  StyledTypingInput
} from './TypingInput.styled';

const TypingInput = ({ children, errorsList, currentIndex }) => {
  const textIndex = currentIndex + 1;
  const unwrittedText = children.slice(textIndex, children.length);
  const writtedTextArray = Array.from(children.slice(0, textIndex));

  const renderedText = useMemo(
    () =>
      writtedTextArray.map((word, index) => (
        <StyledCharacter
          key={`${word}-${index}`}
          isSuccess={currentIndex > index}
          isError={errorsList.includes(index)}
          isSelected={currentIndex === index}
        >
          {word}
        </StyledCharacter>
      )),
    [errorsList, currentIndex, writtedTextArray]
  );

  return (
    <StyledTypingInput>
      <StyledText>
        {renderedText}
        {unwrittedText}
      </StyledText>
    </StyledTypingInput>
  );
};

TypingInput.propTypes = {
  children: PropTypes.string.isRequired,
  currentIndex: PropTypes.number.isRequired,
  errorsList: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default TypingInput;
