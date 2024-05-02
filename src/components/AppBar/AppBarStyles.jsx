import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  border-bottom: 1px solid var(--card-border-color);
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoName = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: var(--button);
`;

export const LogoAccent = styled.span`
  color: var(--rating);
`;
