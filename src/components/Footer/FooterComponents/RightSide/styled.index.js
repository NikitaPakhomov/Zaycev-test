import styled from 'styled-components';
import btns from '../../../../assets/store_buttons.png';

export const StyledRight = styled.div`
  width: 50%;
  height: 100%;
  margin-left: 70px;
`;

export const StyledAppLinksCont = styled.div`
  display: flex;
`;

export const StyledAppLink = styled.a`
  background: url(${btns}) no-repeat;
  height: 45px;
  margin-left: 0;
  margin-right: 12px;
  width: 146px;
  &:hover {
    background-position: 0 -45px;
    border-bottom: none !important;
  }

  &:nth-child(2) {
    background-position: -146px 0;
    &:hover {
      background-position: -146px -45px;
    }
  }
  &:nth-child(3) {
    background-position: -436px 0;
    &:hover {
      background-position: -436px -45px;
    }
  }
`;

export const StyledLinksCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 29px;
`;

export const StyledLinkContainer = styled.div`
  margin-top: 6px;
`;

export const StyledLink = styled.a`
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }
`;

export const StyledAbuseLinkContainer = styled(StyledLinkContainer)`
  margin-top: 73px;
`;
