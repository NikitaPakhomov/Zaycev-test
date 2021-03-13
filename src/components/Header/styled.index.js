import styled, {css} from 'styled-components';
import Logo from './HeaderComponents/Logo';

export const StyledHeader = styled.header`
  max-width: 1280px;
  min-width: 1280px;
  height: 4.125em;
  font-size: 16px;
  width: 100%;
  font-family: Arial, sans-serif;
`;
export const StyledHeaderCont = styled.div`
  display: flex;
  width: 100%;
  width: 1280px;
  flex-direction: row;
  align-items: center;
`;

export const StyledLogoCont = styled.div`
  height: 4.125em;
  display: flex;
  flex-basis: 1 24%;
  justify-content: flex-start;
`;

export const StyledLogo = styled.img`
  display: block;
  object-fit: contain;
  object-position: center;
  max-width: 100%;
  max-height: 100%;
`;

export const StyledSearchCont = styled.div`
  flex: 1 44%;
  width: 100%;
`;

export const StyledSearchForm = styled.form`
  height: 2.0625em;
  display: flex;
  flex-direction: row;
`;

export const StyledSearchField = styled.div`
  width: calc(100% - 5.875em);
  height: 100%;
`;

export const StyledSearch = styled.input`
  width: 100%;
  color: #00a8d9;
  font-size: 0.9375em;
  background: #cceef7;
  padding: 0 0.5em;
  height: 100%;
  border: none;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  transition: background-color 0.2s, color 0.2s;
  box-sizing: border-box;
`;

export const StyledSearchBtn = styled.button`
  width: 5.875em;
  border: 1px solid #cceef7;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  height: 100%;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
  background: #2b849d;
  transition: background-color 0.2s;
  margin-left: -2px;
`;

export const StyledProfile = styled.div`
  display: flex;
  vertical-align: middle;
  text-align: right;
  flex: 1 31%;
  padding: 0 1.25em 0 0;
  box-sizing: border-box;
  position: relative;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: end;
`;

export const StyledAuth = styled.div``;

export const StyledSubscriber = styled.div``;
export const StyledSubscriberText = styled.div``;
export const StyledSubscriberLogo = styled(Logo)`
  color: black;
`;
