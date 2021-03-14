import React from 'react';
import PropTypes from 'prop-types';
import {StyledFooter, StyledLeftSide, StyledRightSide} from './styled.index.js';

const Footer = (props) => {
  return (
    <StyledFooter {...props}>
      <StyledLeftSide />
      <StyledRightSide />
    </StyledFooter>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
