import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  gap: 16px;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  color: var(--button);
`;

export const NavItem = styled.li`
  .active {
    position: relative;
    padding-bottom: 23px;
    color: var(--active-button);
  }
  .active:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 4px;
    left: 0;
    bottom: -1px;
    background-color: var(--active-button);
    border-radius: 2px;
  }
`;
