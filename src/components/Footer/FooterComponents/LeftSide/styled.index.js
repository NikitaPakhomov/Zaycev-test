import styled from 'styled-components';

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

export const StyledLeft = styled.div`
  width: 50%;
  height: 100%;
`;

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

export const StyledLink = styled.a`
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }
`;
