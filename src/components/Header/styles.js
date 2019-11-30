import styled from 'styled-components';

import {
  BG_GREY_DARK,
  NAVBAR_HEIGHT,
  WHITE,
  Z_PRIMARY,
} from '../../themes/constants';


const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  z-index: ${Z_PRIMARY};
  top: 0;
  left: 0;
  right: 0;
  height: ${NAVBAR_HEIGHT};
  align-items: center;
  justify-content: space-between;
  background-color: ${BG_GREY_DARK};
  padding: 1rem 3rem;
`;

const NavList = styled.ul`
  list-style: none;
  margin-left: 0;
  padding-left: 0;
`;

const NavItem = styled.li`
  float: left;
  margin-right: 10px;
  cursor: pointer;

  &.active:hover {
    border-bottom: 2px solid #721c24;
  }

  &:hover {
    border-bottom: 2px solid #0a0;
  }

  a {
    text-decoration: none;
    color: ${WHITE};
  }
`;

export {
  HeaderWrapper,
  NavList,
  NavItem,
};
