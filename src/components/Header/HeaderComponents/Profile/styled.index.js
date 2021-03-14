import styled, {css} from 'styled-components';
import Star from '../Star';

export const StyledProfile = styled.div`
  display: flex;
  vertical-align: middle;
  text-align: right;
  flex: 1 31%;
  padding: 0 1.25em 0 0;
  box-sizing: border-box;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: end;
`;

export const StyledSubscriber = styled.div`
  display: flex;
  margin-left: 38px;
  cursor: pointer;
`;
export const StyledSubscriberTextContainer = styled.div`
  text-align: center;
  color: white;
  margin-left: 10px;
`;
export const StyledSubscriberTextTop = styled.div`
  font-family: Arial;
  font-size: 16px;
  line-height: 18px;
`;
export const StyledSubscriberTextBot = styled.div`
  font-family: Arial;
  font-size: 11px;
  line-height: 13px;
`;
export const StyledSubscriberLogo = styled(Star)`
  margin-top: 3px;
`;

export const StyledAuth = styled.div`
  display: inline-block;
  vertical-align: middle;
  text-align: right;
  flex: 1 27%;
  box-sizing: border-box;
`;

export const StyledAuthLink = styled.a`
  color: #fff;
  &:first-child {
    margin-right: 1.1875em;
  }
`;
