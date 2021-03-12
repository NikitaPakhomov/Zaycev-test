import styled, {css} from 'styled-components';

export const Banner = styled.div`
  width: 300px;

  ${(props) =>
    css`
      height: ${props.bannerHeight};
    `}
`;
