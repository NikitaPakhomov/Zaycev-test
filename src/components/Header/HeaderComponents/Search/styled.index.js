import styled, {css} from 'styled-components';

export const StyledSearchCont = styled.div`
  flex: 1 44%;
  width: 100%;
`;

export const StyledSearchForm = styled.form`
  height: 2.0625em;
  display: flex;
  flex-direction: row;
`;

export const StyledSearchField = styled.div`
  width: calc(100% - 5.875em);
  height: 100%;
`;

export const StyledSearch = styled.input`
  width: 100%;
  color: #00a8d9;
  font-size: 0.9375em;
  background: #cceef7;
  padding: 0 0.5em;
  height: 100%;
  border: none;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  transition: background-color 0.2s, color 0.2s;
  box-sizing: border-box;
  &::placeholder {
    color: #2b849d;
  }
  &:focus {
    background: #fff;
  }
`;

export const StyledSearchBtn = styled.button`
  width: 5.875em;
  border: 1px solid #cceef7;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  height: 100%;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
  background: #2b849d;
  transition: background-color 0.2s;
  margin-left: -2px;
  &:hover {
    outline: 0;
    background: #45a1bb;
  }
`;
