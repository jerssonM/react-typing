import styled, { css } from 'styled-components';

const getColorCharacter = ({ isError, isSuccess }) => {
  if (isError)
    return css`
      color: #d55b60;
      background-color: #ffdcd9;
    `;
  if (isSuccess)
    return css`
      color: #95c590;
      background-color: #edf7e7;
    `;
  return css`
    color: black;
    background-color: black;
  `;
};

export const StyledTypingInput = styled.div``;

export const StyledCharacter = styled.span`
  padding: 6px 0;
  margin-right: 2px;
  border-radius: 4px;
  &:first-of-type {
    text-transform: uppercase;
  }
  ${({ isSelected }) =>
    isSelected &&
    css`
      animation: blink 1.5s infinite;
      background-color: gray;
      border-bottom: 3px solid white;
    `}
  ${getColorCharacter}
`;

export const StyledText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: justify;
  letter-spacing: 2px;
  margin: 0;

  @keyframes blink {
    0% {
      background: gray;
    }
    50% {
      background: lightgray;
    }
    100% {
      background: gray;
    }
  }
`;
