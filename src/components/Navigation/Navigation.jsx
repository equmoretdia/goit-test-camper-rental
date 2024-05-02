import React from 'react';
import { NavLink } from 'react-router-dom';

import { NavList, NavItem } from './NavigationStyles';

export const Navigation = () => {
  return (
    <NavList>
      <NavItem>
        <NavLink to="/">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/catalog">Catalog</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/favorites">Favorites</NavLink>
      </NavItem>
    </NavList>
  );
};
