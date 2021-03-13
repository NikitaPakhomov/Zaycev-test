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
            <StyledBanner bannerHeight="250px" />
          </StyledLeftBar>
          <StyledSubscriptions />
        </StyledContent>
      </StyledContainer>
    </Provider>
  );
};

export default App;
