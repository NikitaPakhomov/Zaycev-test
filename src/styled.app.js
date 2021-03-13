import styled from 'styled-components';
import Subscriptions from './pages/Subscriptions';
import SideBarMenu from './components/SideBarMenu';
import Banner from './components/Banner';
import Header from './components/Header';

export const StyledContainer = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

export const StyledLeftBar = styled.div`
  flex: 0 0 304px;
  height: 1600px;
  background-color: #fff;
`;

export const StyledContent = styled.div`
  display: flex;
`;

export const StyledSubscriptions = styled(Subscriptions)`
  flex: 1 1 100%;
`;
export const StyledSideBarMenu = styled(SideBarMenu)`
  flex: 1 1 100%;
`;
export const StyledBanner = styled(Banner)`
  color: yellow;
  background-color: brown;
`;

export const StyledHeader = styled(Header)`
  height: 66px;
  width: 100%;
  background-color: #2b849d;
`;
