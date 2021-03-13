import React from 'react';
import PropTypes from 'prop-types';
import {StyledBanner} from './styled.index';

const Banner = (props) => {
  return (
    <StyledBanner
      {...props}
      bannerHeight={props.bannerHeight || '250px'}
    ></StyledBanner>
  );
};

Banner.propTypes = {
  className: PropTypes.string,
  bannerHeight: PropTypes.string,
};

export default Banner;
