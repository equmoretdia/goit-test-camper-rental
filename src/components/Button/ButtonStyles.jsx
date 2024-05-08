import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 16px 40px;
  width: 166px;
  height: 56px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: var(--background);
  background-color: var(--button);
  border-radius: 200px;
  border: none;

  &:hover {
    background-color: var(--active-button);
  }
`;
