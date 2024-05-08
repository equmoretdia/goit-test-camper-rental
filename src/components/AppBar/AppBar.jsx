import React from 'react';

import { Navigation } from 'components/Navigation/Navigation';
import { Logo } from 'components/Logo/Logo';
import { Nav } from './AppBarStyles';

export const AppBar = () => {
  return (
    <header>
      <Nav>
        <Logo />
        <Navigation />
      </Nav>
    </header>
  );
};
