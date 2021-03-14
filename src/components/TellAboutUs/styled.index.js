import styled, {css} from 'styled-components';
import vk from '../../assets/Social_VK.svg';
import mail from '../../assets/Social_Mail.svg';
import ok from '../../assets/Social_OK.svg';
import vkWhite from '../../assets/Social_VK_white.svg';
import mailWhite from '../../assets/Social_Mail_white.svg';
import okWhite from '../../assets/Social_OK_white.svg';

export const StyledTellAboutUs = styled.div`
  background: #fff;
  margin: 0 0 5px;
  padding: 20px 20px 20px 10px;
  font-family: Arial, sans-serif;
  font-size: 14px;
`;

export const StyledTitle = styled.div`
  margin-left: 0.5em;
  border: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 14px;
`;

export const StyledSocialWidget = styled.div`
  min-width: 13em;
  border: 1px solid #587e9f;
  margin: 7px;
  margin-bottom: 14px;
  line-height: 1.5;
  padding: 0.11em 0.7em 0.13em 1.8em;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  &:nth-child(2) {
    border: 1px solid #587e9f;
    color: #587e9f;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: calc(50% - 8.5px);
      left: 4px;
      width: 17px;
      height: 17px;
      background: url(${vk}) no-repeat center center;
      background-size: contain;
    }
    &:hover {
      background-color: #587e9f;
      color: white;
    }
    &:hover::before {
      content: '';
      background: url(${vkWhite}) no-repeat center center;
      background-size: contain;
      border-color: white;
    }
  }

  &:nth-child(3) {
    border: 1px solid #f59310;
    position: relative;
    color: #f59310;
    &::before {
      content: '';
      position: absolute;
      top: calc(50% - 8.5px);
      left: 4px;
      width: 17px;
      height: 17px;
      background: url(${ok}) no-repeat center center;
      background-size: contain;
    }
    &:hover {
      background-color: #f59310;
      color: white;
    }
    &:hover::before {
      content: '';
      background: url(${okWhite}) no-repeat center center;
      background-size: contain;
      border-color: white;
    }
  }

  &:nth-child(4) {
    border: 1px solid #00468c;
    position: relative;
    color: #00468c;
    &::before {
      content: '';
      position: absolute;
      top: calc(50% - 8.5px);
      left: 4px;
      width: 17px;
      height: 17px;
      background: url(${mail}) no-repeat center center;
      background-size: 23px;
    }
    &:hover {
      background-color: #00468c;
      color: white;
    }
    &:hover::before {
      content: '';
      background: url(${mailWhite}) no-repeat center center;
      background-size: 23px;
      border-color: white;
    }
  }
`;

export const StyledText = styled.div``;

export const StyledLikesCount = styled.div``;
