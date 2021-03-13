import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledHeader,
  StyledHeaderCont,
  StyledLogoCont,
  StyledLogo,
  StyledSearch,
  StyledSearchBtn,
  StyledSearchField,
  StyledSearchCont,
  StyledSearchForm,
  StyledProfile,
  StyledAuth,
  StyledSubscriber,
  StyledSubscriberLogo,
  StyledSubscriberTextContainer,
  StyledSubscriberTextTop,
  StyledSubscriberTextBot,
  StyledAuthLink,
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
        <StyledSearchCont>
          <StyledSearchForm>
            <StyledSearchField>
              <StyledSearch
                placeholder="Исполнитель, трек или сборник"
                autocomplete="off"
                name="query_search"
                type="text"
              />
            </StyledSearchField>
            <StyledSearchBtn disabled="disabled">Найти</StyledSearchBtn>
          </StyledSearchForm>
        </StyledSearchCont>
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
      </StyledHeaderCont>
    </StyledHeader>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
