import React, { Component } from 'react';
import styled from 'styled-components';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Configure } from 'react-instantsearch-dom';

import featured from './featured.json';
import Feature from './components/Feature';
import Search from './components/Search';
import Refinements from './components/Refinements';
import { Entry, StyledHits } from './components/Hits';
import Pagination from './components/Pagination';

const appId = 'F69DU4TWEG';
const searchKey = '38ec08d7e6bb2135f28503d3a806db71';
const indexName = 'iret';

const searchClient = algoliasearch(appId, searchKey);

const StyledApp = styled.div`
  font-family: 'Lato', sans-serif;

  * {
    box-sizing: border-box;
  }
`;

const Features = styled.ul`
  display: grid;
  grid-gap: 1rem;
  grid-template: auto / 1fr;
  list-style: none;

  @media screen and (min-width: 600px) {
    grid-template: repeat(2, auto) / repeat(3, 1fr);
  }
`;

const HR = styled.hr`
  background-color: #ccc;
  border: 0;
  color: #ccc;
  height: 1px;
  margin: 1.5rem 0;
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <InstantSearch searchClient={searchClient} indexName={indexName}>
          <div>
            <h2 style={{ textAlign: 'center' }}>Featured IRET Research</h2>
            <Features>
              {featured.map(f => (
                <Feature {...f} />
              ))}
            </Features>
          </div>
          <HR />
          <div>
            <h2 style={{ textAlign: 'center' }}>Search the IRET Archives</h2>
            <Configure maxValuesPerFacet={50} />
            <Search />
            <Refinements />
            <StyledHits hitComponent={Entry} />
            <Pagination />
          </div>
        </InstantSearch>
      </StyledApp>
    );
  }
}

export default App;
