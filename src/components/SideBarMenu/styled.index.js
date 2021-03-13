import styled, {css} from 'styled-components';

export const MenuItem = styled.li`
  width: 100%;
  padding: 6px 0 6px 1px;
  font-size: 16px;
  font-family: arial, sans-serif;
  &:hover {
    color: #00a8d9;
  }

  &:nth-child(1) {
    color: #e46457;
  }
`;

export const MenuUl = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 17px 18px;
`;
