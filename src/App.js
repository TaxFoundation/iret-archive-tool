import React, { Component } from 'react';
import styled from 'styled-components';
import algoliasearch from 'algoliasearch/lite';
import Search from './components/Search';
import Refinements from './components/Refinements';
import { Entry, StyledHits } from './components/Hits';
import Pagination from './components/Pagination';
import { InstantSearch, Configure } from 'react-instantsearch-dom';

const appId = 'F69DU4TWEG';
const searchKey = '38ec08d7e6bb2135f28503d3a806db71';
const indexName = 'iret';

const searchClient = algoliasearch(appId, searchKey);

const StyledApp = styled.div`
  font-family: 'Lato', sans-serif;
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <InstantSearch searchClient={searchClient} indexName={indexName}>
          <Configure maxValuesPerFacet={50} />
          <Search />
          <Refinements />
          <StyledHits hitComponent={Entry} />
          <Pagination />
        </InstantSearch>
      </StyledApp>
    );
  }
}

export default App;
