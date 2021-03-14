import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledTellAboutUs,
  StyledTitle,
  StyledSocialWidget,
  StyledText,
  StyledLikesCount,
} from './styled.index';

const TellAboutUs = (props) => {
  return (
    <StyledTellAboutUs {...props}>
      <StyledTitle>Расскажи о Zaycev.net</StyledTitle>
      <StyledSocialWidget>
        <StyledText>Вконтакте</StyledText>
        <StyledLikesCount>5166</StyledLikesCount>
      </StyledSocialWidget>
      <StyledSocialWidget>
        <StyledText>Одноклассники</StyledText>
        <StyledLikesCount>171937</StyledLikesCount>
      </StyledSocialWidget>
      <StyledSocialWidget>
        <StyledText>Мой мир</StyledText>
        <StyledLikesCount>8</StyledLikesCount>
      </StyledSocialWidget>
    </StyledTellAboutUs>
  );
};

TellAboutUs.propTypes = {
  className: PropTypes.string,
};

export default TellAboutUs;
