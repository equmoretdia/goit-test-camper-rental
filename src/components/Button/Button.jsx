import React from 'react';

import { StyledButton } from './ButtonStyles';

export const Button = ({ text, func = null }) => {
  return (
    <StyledButton type="button" onClick={func}>
      {text}
    </StyledButton>
  );
};
