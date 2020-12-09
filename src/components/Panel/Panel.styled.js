import styled from 'styled-components';

export const StyledBoard = styled.div`
  padding: 20px;
`;

export const StyledIconText = styled.span`
  border-radius: 50%;
  font-size: 24px;
  font-weight: bold;
  padding: 4px;
  &:hover {
    cursor: pointer;
    background-color: lightgray;
  }
`;

export const StyledButtonReload = styled.div`
  display: flex;
  justify-content: ${({ position }) => position};
  padding: 10px 0;
`;
