import styled from 'styled-components';
import Subscriptions from './pages/Subscriptions';
import SideBarMenu from './components/SideBarMenu';
import Banner from './components/Banner';
import Header from './components/Header';
import Footer from './components/Footer';
import VK from './components/VK';
import TellAboutUs from './components/TellAboutUs';

export const StyledContainer = styled.div`
  background-color: white;
  width: 1280px;
  margin: 0 auto;
`;

export const StyledLeftBar = styled.div`
  flex: 0 0 304px;
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

export const StyledFooter = styled(Footer)`
  width: 100%;
  background: #00556e;
  line-height: 16px;
`;

export const StyledVK = styled(VK)`
  width: 266px;
  height: 248px;
`;

export const StyledTellAboutUs = styled(TellAboutUs)`
  width: 300px;
  height: 180px;
`;
