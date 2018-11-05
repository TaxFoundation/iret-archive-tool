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

const StyledHits = styled(Hits)`
  li {
    list-style: none;
  }
`;

const StyledHit = styled.div`
  background-color: #fff;
  position: relative;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #e6f4ff;
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
        <Highlight attribute="subtitle" hit={props.hit} />
      </p>
      <p>
        <Highlight attribute="date" hit={props.hit} />
      </p>
      <p>
        <Highlight attribute="authors" hit={props.hit} />
      </p>
      {props.hit.file ? <Link href={fileRoot + props.hit.file} rel="noopener noreferrer" target="_blank" /> : null}
    </StyledHit>
  );
};

class App extends Component {
  render() {
    return (
      <InstantSearch searchClient={searchClient} indexName={indexName}>
        <SearchBox />
        <StyledHits hitComponent={Entry} />
        <Pagination />
      </InstantSearch>
    );
  }
}

export default App;
