/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import Word from '../Word/Word';
import { splitText } from '../../utils/strings';
import { StyledWords, StyledTypingInput } from './TypingInput.styled';

const TypingInput = ({ children, errorList, characterPosition }) => {
  const renderedText = useMemo(
    () =>
      characterPosition.word
        ? splitText(children, ' ')
            .slice(0, characterPosition.word)
            .map((word, index) => <Word key={`${word}-${index}`}>{word}</Word>)
        : null,
    [children, characterPosition.word]
  );

  const unrenderedText = useMemo(
    () =>
      splitText(children, ' ')
        .slice(characterPosition.word + 1)
        .map((word, index) => <Word key={`${word}-${index}`}>{word}</Word>),
    [children, characterPosition.word]
  );

  const selectedWord = useMemo(
    () =>
      splitText(children, ' ')
        .slice(characterPosition.word, characterPosition.word + 1)
        .map((word, index) => (
          <Word
            key={`${word}-${index}`}
            indexWord={index}
            characterPosition={characterPosition}
          >
            {word}
          </Word>
        )),
    [children, characterPosition]
  );

  return (
    <StyledTypingInput>
      <StyledWords>
        {renderedText}
        {selectedWord}
        {unrenderedText}
      </StyledWords>
    </StyledTypingInput>
  );
};

TypingInput.propTypes = {
  characterPosition: PropTypes.shape({
    word: PropTypes.number,
    character: PropTypes.number
  }).isRequired,
  children: PropTypes.string.isRequired,
  errorList: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default TypingInput;
