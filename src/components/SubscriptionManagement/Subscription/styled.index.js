import styled, {css, keyframes} from 'styled-components';
import {ReactComponent as LoaderSvg} from 'assets/loader.svg';

const Subscription = styled.div`
  & + & {
    margin-top: 10px;
  }
`;

export const StyledSubscriptionInfo = styled.div`
  flex: 0 1 100%;
  margin: 0 0 0 75px;

  ${(props) =>
    props.isHovered &&
    css`
      font-size: 14px;
    `}
`;

export const StyledSubscription = styled(Subscription)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px;
  border-radius: 4px;
  font-family: Arial;
  font-size: 15px;
  line-height: 20px;
  color: #8e8e8e;

  ${(props) =>
    props.isHovered &&
    css`
      background-color: #ffffff;

      ${StyledSubscriptionInfo} {
        margin: 0 23px 0 25px;
      }
    `}
`;

export const StyledSubscriptionContent = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 100%;
`;

export const StyledSubscriptionIcon = styled.svg`
  flex: 0 0 30px;
  height: 30px;
  margin-right: 16px;

  & > rect {
    width: 30px;
    height: 30px;
  }
`;

export const StyledSubscriptionName = styled.div`
  flex: 0 0 155px;
`;

export const StyledSubscriptionHighContrast = styled.span`
  color: #4e4e4e;

  ${(props) => props.withMargin && `margin-left: 2px;`}
`;

const buttonTypeHandler = ({type}) => {
  switch (type) {
    case 'danger':
      return css`
        background-color: #ca5454;

        &:hover {
          background-color: #e36868;
        }

        &:active {
          background-color: #b94343;
        }
      `;
    case 'warning':
      return css`
        background-color: #da8320;

        &:hover {
          background-color: #da9020;
        }

        &:active {
          background-color: #c87415;
        }
      `;
    default:
      return '';
  }
};

export const StyledSubscriptionButton = styled.a`
  flex: 0 0 251px;
  appearance: button;
  cursor: pointer;
  padding: 11px 9.86px;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
  border-radius: 4px;
  white-space: nowrap;
  ${buttonTypeHandler}
`;

export const StyledSubscriptionHidden = styled.div`
  flex: 0 0 251px;
`;

export const StyledSubscriptionLoaderWrapper = styled(Subscription)`
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledSubscriptionLoader = styled(LoaderSvg)`
  width: 30px;
  height: 30px;
  fill: #2b849d;
  animation: ${rotate} 0.8s linear infinite;
`;
