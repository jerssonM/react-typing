import styled, { css, keyframes } from 'styled-components';

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
    background-color: transparent;
  `;
};

const blinkAnimation = keyframes`
  0% {
    background: gray;
  }
  50% {
    background: lightgray;
  }
  100% {
    background: gray;
  }
`;

export const StyledWord = styled.div`
  display: flex;
`;

export const StyledCharacter = styled.span`
  display: inline-block;
  padding: 6px 0;
  margin-right: 2px;
  border-radius: 4px;
  &:first-of-type {
    text-transform: uppercase;
  }
  ${({ isSelected }) =>
    isSelected &&
    css`
      animation: ${blinkAnimation} 1.5s linear infinite;
      background-color: gray;
      border-bottom: 3px solid white;
    `}
  ${getColorCharacter}
`;
