import {Provider} from 'react-redux';
import store from 'redux/store';
import {
  StyledContainer,
  StyledContent,
  StyledLeftBar,
  StyledSubscriptions,
  StyledSideBarMenu,
  StyledBanner,
  StyledHeader,
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
            <StyledBanner bannerHeight="600px" />
          </StyledLeftBar>
          <StyledSubscriptions />
        </StyledContent>
      </StyledContainer>
    </Provider>
  );
};

export default App;
