import styled, {css} from 'styled-components';
import btns from '../../assets/store_buttons.png';

export const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  padding: 28px 20px;
  color: #fff;
  font-size: 14px;
  font-family: arial, sans-serif;
`;
export const StyledLeft = styled.div`
  width: 50%;
  height: 100%;
`;
export const StyledRight = styled(StyledLeft)``;

export const StyledRow = styled.div`
  width: 100%;
  margin-top: 25px;
  &:first-child {
    margin-top: 0;
  }
`;

export const StyledData = styled.div`
  width: 100%;
`;

export const StyledAppLinksCont = styled.div`
  display: flex;
`;

export const StyledAppLink = styled.a`
  background: url(${btns}) no-repeat;
  height: 45px;
  margin-left: 0;
  margin-right: 8px;
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
  margin-top: 32px;
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
  margin-top: 60px;
`;

export const StyledSocialLink = styled.a`
  margin-right: 6px;
  outline: 0;
  text-decoration: none;
  border-bottom: none;
  display: inline-block;
  vertical-align: middle;
  &:first-child {
    margin-left: 5px;
  }
  &:hover {
    opacity: 0.5;
  }
`;

export const StyledSocialIcon = styled.img`
  border: 0;
`;
