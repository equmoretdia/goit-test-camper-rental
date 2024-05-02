import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid var(--card-border-color);
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
