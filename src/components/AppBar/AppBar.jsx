import React from 'react';
import { NavLink } from 'react-router-dom';

import { Navigation } from 'components/Navigation/Navigation';
import { Nav, LogoContainer, LogoName, LogoAccent } from './AppBarStyles';
import camperLogo from 'images/camper.png';

export const AppBar = () => {
  return (
    <header>
      <Nav>
        <div>
          <NavLink to="/">
            <LogoContainer>
              <img
                src={camperLogo}
                alt="camper against the backdrop of forested mountains and a river"
                width={70}
                height={70}
              />
              <LogoName>
                <LogoAccent>Ukrainian</LogoAccent>Camper
              </LogoName>
            </LogoContainer>
          </NavLink>
        </div>
        <Navigation />
      </Nav>
    </header>
  );
};
