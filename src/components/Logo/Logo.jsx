import React from 'react';
import { NavLink } from 'react-router-dom';

import { LogoContainer, LogoName, LogoAccent } from './LogoStyles';
import camperLogo from 'images/camper.png';

export const Logo = () => {
  return (
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
  );
};
