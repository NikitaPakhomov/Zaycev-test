import React from 'react';
import PropTypes from 'prop-types';
import vk from '../../assets/vk.svg';
import ytb from '../../assets/ytb.svg';
import insta from '../../assets/insta.svg';
import {
  StyledFooter,
  StyledLeft,
  StyledRight,
  StyledRow,
  StyledData,
  StyledAppLinksCont,
  StyledAppLink,
  StyledLinksCont,
  StyledLink,
  StyledLinkContainer,
  StyledAbuseLinkContainer,
  StyledSocialLink,
  StyledSocialIcon,
} from './styled.index.js';

const Footer = (props) => {
  return (
    <StyledFooter {...props}>
      <StyledLeft>
        <StyledRow>
          <StyledData>ООО "ЗАЙЦЕВ.НЕТ"</StyledData>
          <StyledData>125315, г. Москва, ул. Лизы Чайкиной 6</StyledData>
          <StyledData>+7 (495) 211-85-11</StyledData>
        </StyledRow>
        <StyledRow>
          <StyledData>По общим вопросам:</StyledData>
          <StyledData>
            <a href="mailto:admin@zaycev.net">admin@zaycev.net</a>
          </StyledData>
          <StyledData></StyledData>
        </StyledRow>
        <StyledRow>
          <StyledData>
            По вопросам взаимодействия с Правообладателями
          </StyledData>
          <StyledData>
            e-mail:
            <a class="contacts_email_link" href="mailto:legal@zaycev.net">
              legal@zaycev.net
            </a>{' '}
          </StyledData>
        </StyledRow>
        <StyledRow>
          <StyledData>
            По вопросам взаимодействия с операторами сотовой связи:
          </StyledData>
          <StyledData>
            ООО «СФ ЛАБС», e-mail:{' '}
            <a class="contacts_email_link" href="mailto:zaycev@sflabs.ru">
              zaycev@sflabs.ru
            </a>
          </StyledData>
        </StyledRow>
        <StyledRow>
          <StyledData>
            Подписаться на нас:
            <StyledSocialLink href="https://vk.com/zaycevnet">
              <StyledSocialIcon src={vk} />
            </StyledSocialLink>
            <StyledSocialLink href="https://www.instagram.com/zaycev.net_official/">
              <StyledSocialIcon src={insta} />
            </StyledSocialLink>
            <StyledSocialLink href="https://www.youtube.com/channel/UC8Qu0xsGDlbLMWBYR2IumEQ">
              <StyledSocialIcon src={ytb} />
            </StyledSocialLink>
          </StyledData>
        </StyledRow>
        <StyledRow>
          <StyledData>
            Зарегистрированный товарный знак ЗАЙЦЕВ.НЕТ® / ZAYCEV.NET® 2004-2021
          </StyledData>
        </StyledRow>
      </StyledLeft>
      <StyledRight>
        <StyledAppLinksCont>
          <StyledAppLink href="https://play.google.com/store/apps/details?id=free.zaycev.net&referrer=utm_source%3DSite%26utm_medium%3Dsite" />
          <StyledAppLink href="https://rttr2.zaycev.net/click?is=DoRZScPzEam47B3JwGZPUyHvCXOvGnP_J3dhodIGMm8jNFnh5vyWRVuqPKgaHeNhSQUdH8cPFgSBAKfGvndh7H8XKHqCY7NzzwGDk4BLbdgRVbjcEh48sLWbNKnpTndRNIbLei4vqGISyIZHZ6bVfaPcvjTfkBmzugvydFoCW_2EoorpFc6g-U70BbMYneXfGDSSow" />
          <StyledAppLink href="https://appgallery.huawei.com/#/app/C101567849?appId=C101567849&source=appshare&subsource=C101567849" />
        </StyledAppLinksCont>
        <StyledLinksCont>
          <StyledLinkContainer>
            <StyledLink>Политика конфиденциальности</StyledLink>
          </StyledLinkContainer>
          <StyledLinkContainer>
            <StyledLink>Пользовательское соглашение</StyledLink>
          </StyledLinkContainer>
          <StyledLinkContainer>
            <StyledLink>Правообладателям</StyledLink>
          </StyledLinkContainer>
          <StyledLinkContainer>
            <StyledLink>Работа в Zaycev.net</StyledLink>
          </StyledLinkContainer>
          <StyledLinkContainer>
            <StyledLink>Реклама на сайте</StyledLink>
          </StyledLinkContainer>
          <StyledLinkContainer>
            <StyledLink>Продвижение трека</StyledLink>
          </StyledLinkContainer>
          <StyledLinkContainer>
            <StyledLink>Приложение</StyledLink>
          </StyledLinkContainer>
        </StyledLinksCont>
        <StyledAbuseLinkContainer>
          <StyledLink>
            Пожаловаться на нарушение авторских прав / DMCA complain
          </StyledLink>
        </StyledAbuseLinkContainer>
      </StyledRight>
    </StyledFooter>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
