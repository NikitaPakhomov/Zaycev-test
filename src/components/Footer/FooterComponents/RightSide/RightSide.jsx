import React from 'react';
import {
  StyledAppLinksCont,
  StyledAppLink,
  StyledLinksCont,
  StyledLink,
  StyledLinkContainer,
  StyledAbuseLinkContainer,
  StyledRight,
} from './styled.index.js';

const RightSide = () => {
  const links = [
    'Политика конфиденциальности',
    'Пользовательское соглашение',
    'Правообладателям',
    'Работа в Zaycev.net',
    'Реклама на сайте',
    'Продвижение трека',
    'Приложение',
  ];
  return (
    <StyledRight>
      <StyledAppLinksCont>
        <StyledAppLink href="https://play.google.com/store/apps/details?id=free.zaycev.net&referrer=utm_source%3DSite%26utm_medium%3Dsite" />
        <StyledAppLink href="https://rttr2.zaycev.net/click?is=DoRZScPzEam47B3JwGZPUyHvCXOvGnP_J3dhodIGMm8jNFnh5vyWRVuqPKgaHeNhSQUdH8cPFgSBAKfGvndh7H8XKHqCY7NzzwGDk4BLbdgRVbjcEh48sLWbNKnpTndRNIbLei4vqGISyIZHZ6bVfaPcvjTfkBmzugvydFoCW_2EoorpFc6g-U70BbMYneXfGDSSow" />
        <StyledAppLink href="https://appgallery.huawei.com/#/app/C101567849?appId=C101567849&source=appshare&subsource=C101567849" />
      </StyledAppLinksCont>
      <StyledLinksCont>
        {links.map((link) => (
          <StyledLinkContainer>
            <StyledLink>{link}</StyledLink>
          </StyledLinkContainer>
        ))}
      </StyledLinksCont>
      <StyledAbuseLinkContainer>
        <StyledLink>
          Пожаловаться на нарушение авторских прав / DMCA complain
        </StyledLink>
      </StyledAbuseLinkContainer>
    </StyledRight>
  );
};

export default RightSide;
