/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import { splitText } from '../../utils/strings';
import { StyledWord, StyledCharacter } from './Word.styled';

const Word = ({ children, indexWord, characterPosition, showWhiteSpace }) => {
  const isSelectedWhiteSpace =
    characterPosition?.word === indexWord &&
    characterPosition?.character + 1 > children.length;

  const characters = useMemo(
    () =>
      splitText(children).map((character, index) => {
        const isSelected =
          characterPosition?.word === indexWord &&
          characterPosition?.character === index;
        return (
          <StyledCharacter
            key={`${character}-${index}`}
            isSelected={isSelected}
          >
            {character}
          </StyledCharacter>
        );
      }),
    [children, indexWord, characterPosition]
  );

  return (
    <StyledWord>
      {characters}
      {showWhiteSpace && (
        <StyledCharacter isSelected={isSelectedWhiteSpace}>
          &nbsp;
        </StyledCharacter>
      )}
    </StyledWord>
  );
};

Word.propTypes = {
  indexWord: PropTypes.number,
  children: PropTypes.string.isRequired,
  showWhiteSpace: PropTypes.bool,
  characterPosition: PropTypes.shape({
    word: PropTypes.number,
    character: PropTypes.number
  })
};

Word.defaultProps = {
  indexWord: undefined,
  characterPosition: undefined,
  showWhiteSpace: true
};

export default Word;
