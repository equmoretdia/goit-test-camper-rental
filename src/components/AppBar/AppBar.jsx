import React from 'react';
import { NavLink } from 'react-router-dom';

import { Navigation } from 'components/Navigation/Navigation';

export const AppBar = () => {
  return (
    <header>
      <nav>
        <div>
          <NavLink to="/">Logo</NavLink>
        </div>
        <Navigation />
      </nav>
    </header>
  );
};
