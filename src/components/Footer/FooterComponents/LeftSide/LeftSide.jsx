import React from 'react';
import vk from '../../../../assets/vk.svg';
import ytb from '../../../../assets/ytb.svg';
import insta from '../../../../assets/insta.svg';
import {
  StyledLeft,
  StyledRow,
  StyledData,
  StyledSocialLink,
  StyledSocialIcon,
  StyledLink,
} from './styled.index.js';

const LeftSide = () => {
  return (
    <StyledLeft>
      <StyledRow>
        <StyledData>ООО "ЗАЙЦЕВ.НЕТ"</StyledData>
        <StyledData>125315, г. Москва, ул. Лизы Чайкиной 6</StyledData>
        <StyledData>+7 (495) 211-85-11</StyledData>
      </StyledRow>
      <StyledRow>
        <StyledData>По общим вопросам:</StyledData>
        <StyledData>
          <StyledLink href="mailto:admin@zaycev.net">
            admin@zaycev.net
          </StyledLink>
        </StyledData>
      </StyledRow>
      <StyledRow>
        <StyledData>По вопросам взаимодействия с Правообладателями</StyledData>
        <StyledData>
          e-mail:
          <StyledLink href="mailto:legal@zaycev.net">
            {' '}
            legal@zaycev.net
          </StyledLink>
        </StyledData>
      </StyledRow>
      <StyledRow>
        <StyledData>
          По вопросам взаимодействия с операторами сотовой связи:
        </StyledData>
        <StyledData>
          ООО «СФ ЛАБС», e-mail:{' '}
          <StyledLink href="mailto:zaycev@sflabs.ru">
            zaycev@sflabs.ru
          </StyledLink>
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
  );
};

export default LeftSide;
