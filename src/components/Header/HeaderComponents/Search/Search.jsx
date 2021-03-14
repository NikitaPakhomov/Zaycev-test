import React from 'react';
import {
  StyledSearch,
  StyledSearchBtn,
  StyledSearchField,
  StyledSearchCont,
  StyledSearchForm,
} from './styled.index';

const Search = () => {
  return (
    <StyledSearchCont>
      <StyledSearchForm>
        <StyledSearchField>
          <StyledSearch
            placeholder="Исполнитель, трек или сборник"
            autocomplete="off"
            name="query_search"
            type="text"
          />
        </StyledSearchField>
        <StyledSearchBtn disabled="disabled">Найти</StyledSearchBtn>
      </StyledSearchForm>
    </StyledSearchCont>
  );
};

export default Search;
