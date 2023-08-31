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
    border-radius: 0px;
    font-family: 'Roboto Flex', sans-serif;
    font-size: 1rem;
    padding: 0.5rem;

    &:focus {
      border: solid 1px #235485;
      outline: none;
    }
  }

  button[type='submit'],
  button[type='reset'] {
    background: #235485;
    border: solid 1px #235485;
    border-radius: 0px;
    cursor: pointer;
    display: block;
    font-family: 'Roboto Flex', sans-serif;
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

  button[hidden] {
    background: #ccc;
    border: 1px solid #ccc;
  }
`;

export default Search;
