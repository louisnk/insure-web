import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { HeaderWrapper, NavList, NavItem } from './styles';
import { LABEL } from '../Typography/constants';
import Typography from '../Typography';

const Header = (props) => {
  const { pathname } = props.location;

  const isHome = pathname === '/';
  // const isAccount = pathname === '/account';
  const isLogout = pathname === '/logout';

  return (
    <HeaderWrapper>
      <NavList>
        <NavItem active={isHome}>
          <Link to="/">
            <Typography size={LABEL}>Dashboard</Typography>
          </Link>
        </NavItem>
      </NavList>

      <NavList>
        {/* <NavItem active={isAccount}>
          <Link to="/account">
            <Typography size={LABEL}>My Account</Typography>
          </Link>
        </NavItem> */}
        <NavItem active={isLogout}>
          <Link to="/logout">
            <Typography size={LABEL}>Logout</Typography>
          </Link>
        </NavItem>
      </NavList>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;
