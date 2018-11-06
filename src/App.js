import React, { Component } from 'react';
import styled from 'styled-components';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Hits, SearchBox, Highlight, Pagination } from 'react-instantsearch-dom';
// import List from './components/List';
// import data from './iret.json';

const fileRoot = 'https://files.taxfoundation.org/iret/';
const appId = 'F69DU4TWEG';
const searchKey = '38ec08d7e6bb2135f28503d3a806db71';
const indexName = 'iret';

const searchClient = algoliasearch(appId, searchKey);

const StyledApp = styled.div`
  font-family: 'Lato', sans-serif;
`;

const StyledSearch = styled(SearchBox)`
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

const StyledHits = styled(Hits)`
  ul,
  li {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  li {
    > div {
      border-bottom: 1px solid #ccc;
      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc;
      list-style: none;
    }

    &:first-child {
      > div {
        border-top: 1px solid #ccc;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
    }

    &:last-child {
      > div {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }
  }
`;

const StyledHit = styled.div`
  background-color: #fff;
  padding: 0.5rem;
  position: relative;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #e6f4ff;
  }

  p {
    margin: 0;
  }

  em.ais-Highlight-highlighted {
    background-color: #0094ff;
    color: #fff;
  }
`;

const Link = styled.a`
  bottom: 0;
  display: block;
  left: 0;
  position: absolute;
  right: 0;
  text-decoration: none;
  top: 0;
`;

const Entry = props => {
  return (
    <StyledHit style={{ position: 'relative' }}>
      <p>
        <Highlight attribute="title" hit={props.hit} />
      </p>
      <p>
        <em>
          <Highlight attribute="subtitle" hit={props.hit} />
        </em>
      </p>
      <p>
        <Highlight attribute="authors" hit={props.hit} />
      </p>
      <p>
        <Highlight attribute="date" hit={props.hit} />
      </p>
      {props.hit.file ? <Link href={fileRoot + props.hit.file} rel="noopener noreferrer" target="_blank" /> : null}
    </StyledHit>
  );
};

class App extends Component {
  render() {
    return (
      <StyledApp>
        <InstantSearch searchClient={searchClient} indexName={indexName}>
          <StyledSearch />
          <StyledHits hitComponent={Entry} />
          <Pagination />
        </InstantSearch>
      </StyledApp>
    );
  }
}

export default App;
