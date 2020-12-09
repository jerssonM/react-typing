import styled, { css } from 'styled-components';

const getColorCharacter = ({ isError, isSuccess }) => {
  if (isError) return 'red';
  if (isSuccess) return 'green';
  return 'black';
};

export const StyledTypingInput = styled.div``;

export const StyledCharacter = styled.span`
  color: ${(props) => getColorCharacter(props)};
  ${({ isSelected }) =>
    isSelected &&
    css`
      animation: blink 1.5s infinite;
      background-color: gray;
      border-bottom: 3px solid white;
    `}
`;

export const StyledText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: justify;
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
