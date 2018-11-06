import styled from 'styled-components';
import { SearchBox } from 'react-instantsearch-dom';

const Search = styled(SearchBox)`
  margin-bottom: 1rem;

  form {
    display: grid;
    grid-gap: 1rem;
    grid-template: auto / 1fr 10% 10%;
  }

  input[type='search'] {
    background: #fff;
    border: solid 1px #ccc;
    border-radius: 4px;
    font-family: 'Lato', sans-serif;
    font-size: 1rem;
    padding: 0.5rem;

    &:focus {
      border: solid 1px #0094ff;
      outline: none;
    }
  }

  button[type='submit'],
  button[type='reset'] {
    background: #0094ff;
    border: solid 1px #0094ff;
    border-radius: 4px;
    font-family: 'Lato', sans-serif;
    font-size: 1rem;
    padding: 0.5rem;

    svg {
      fill: #fff;
    }

    &:focus {
      background-color: #e6f4ff;
      border: solid 1px #e6f4ff;
      outline: none;
    }
  }
`;

export default Search;
