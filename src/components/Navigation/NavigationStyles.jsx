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
    color: var(--active-button);
    position: relative;
    padding-bottom: 23px;
  }
  .active:after {
    background-color: var(--active-button);
    border-radius: 2px;
    bottom: -1px;
    content: '';
    height: 4px;
    left: 0;
    position: absolute;
    width: 100%;
  }
`;
