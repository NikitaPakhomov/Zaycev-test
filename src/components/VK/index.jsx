import React from 'react';
import PropTypes from 'prop-types';
import {StyledVK} from './styled.index';

const VK = (props) => {
  return <StyledVK {...props}>VK</StyledVK>;
};

VK.propTypes = {
  className: PropTypes.string,
};
export default VK;
