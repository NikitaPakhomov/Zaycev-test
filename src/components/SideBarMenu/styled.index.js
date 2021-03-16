import styled, {css} from 'styled-components';

export const MenuItem = styled.li`
  width: 100%;
  font-size: 16px;
  font-family: arial, sans-serif;
  cursor: pointer;
  &:hover {
    color: #00a8d9;
  }

  ${(props) => {
    return css`
      &:nth-child(${props.selected}) {
        color: #e46457;
      }
    `;
  }}
`;

export const MenuUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 17px 18px;
  margin: 0 0 -10px;
`;

export const Link = styled.a`
  display: block;
  height: 100%;
  padding: 6px 0 6px 1px;
`;
