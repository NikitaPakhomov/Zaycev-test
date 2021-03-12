import styled, {css} from 'styled-components';

export const StyledBanner = styled.div`
  width: 300px;

  ${(props) =>
    css`
      height: ${props.bannerHeight};
    `}
`;
