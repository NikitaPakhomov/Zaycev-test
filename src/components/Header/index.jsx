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
            <StyledSearchBtn>Найти</StyledSearchBtn>
          </StyledSearchForm>
        </StyledSearchCont>
        <StyledProfile>
          <StyledSubscriber>
            <StyledSubscriberLogo />
          </StyledSubscriber>
          <StyledAuth />
        </StyledProfile>
      </StyledHeaderCont>
    </StyledHeader>
  );
};

export default Header;
