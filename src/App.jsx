import {Provider} from 'react-redux';
import store from 'redux/store';
import {
  StyledContainer,
  StyledContent,
  StyledLeftBar,
  StyledHeader,
  StyledSubscriptions,
  StyledSideBarMenu,
  StyledBanner,
  StyledFooter,
  StyledVK,
} from './styled.app';

const App = () => {
  return (
    <Provider store={store}>
      <StyledContainer>
        <StyledHeader />
        <StyledContent>
          <StyledLeftBar>
            <StyledSideBarMenu />
            <StyledBanner bannerHeight="250px" />
            <StyledVK />
            <StyledBanner bannerHeight="600px" />
          </StyledLeftBar>
          <StyledSubscriptions />
        </StyledContent>
        <StyledFooter />
      </StyledContainer>
    </Provider>
  );
};

export default App;
