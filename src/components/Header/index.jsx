import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledHeader,
  StyledHeaderCont,
  StyledLogoCont,
  StyledLogo,
  StyledSearch,
  StyledProfile,
} from './styled.index';
import logo from '../../assets/logo.svg';

const Header = (props) => {
  return (
    <StyledHeader {...props}>
      <StyledHeaderCont>
        <StyledLogoCont>
          <a href="/">
            <StyledLogo src={logo} alt="logo" />
          </a>
        </StyledLogoCont>
        <StyledSearch />
        <StyledProfile />
      </StyledHeaderCont>
    </StyledHeader>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
