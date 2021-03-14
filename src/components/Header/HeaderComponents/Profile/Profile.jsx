import React from 'react';
import {
  StyledProfile,
  StyledAuth,
  StyledSubscriber,
  StyledSubscriberLogo,
  StyledSubscriberTextContainer,
  StyledSubscriberTextTop,
  StyledSubscriberTextBot,
  StyledAuthLink,
} from './styled.index';

const Profile = () => {
  return (
    <StyledProfile>
      <StyledSubscriber>
        <StyledSubscriberLogo />
        <StyledSubscriberTextContainer>
          <StyledSubscriberTextTop>Подписка</StyledSubscriberTextTop>
          <StyledSubscriberTextBot>купить доступ</StyledSubscriberTextBot>
        </StyledSubscriberTextContainer>
      </StyledSubscriber>
      <StyledAuth>
        <StyledAuthLink href="#">Регистрация</StyledAuthLink>
        <StyledAuthLink href="#">Вход</StyledAuthLink>
      </StyledAuth>
    </StyledProfile>
  );
};

export default Profile;
