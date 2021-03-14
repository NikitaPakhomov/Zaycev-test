import styled, {css} from 'styled-components';
import Search from './HeaderComponents/Search/Search.jsx';
import Profile from './HeaderComponents/Profile/Profile.jsx';

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
  flex: 1 24%;
  justify-content: flex-start;
`;

export const StyledLogo = styled.img`
  display: block;
  object-fit: contain;
  object-position: center;
  max-width: 100%;
  max-height: 100%;
`;

export const StyledSearch = styled(Search)``;
export const StyledProfile = styled(Profile)``;
