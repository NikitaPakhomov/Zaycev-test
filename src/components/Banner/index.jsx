import React from 'react';
import PropTypes from 'prop-types';
import {StyledBanner} from './styled.index';

const Banner = (props) => {
  return (
    <StyledBanner {...props} bannerHeight={props.bannerHeight}></StyledBanner>
  );
};

export default Banner;
