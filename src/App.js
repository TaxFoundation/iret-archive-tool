import React, { Component, Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Configure } from 'react-instantsearch-dom';

import featured from './featured.json';
import Feature from './components/Feature';
import Search from './components/Search';
import Refinements from './components/Refinements';
import { Entry, StyledHits } from './components/Hits';
import Pagination from './components/Pagination';

const appId = '8HHIUY3MSH';
const searchKey = '10b98b60a94efec51b7fb5e27f7174c8';
const indexName = 'iret';

const searchClient = algoliasearch(appId, searchKey);

const StyledApp = createGlobalStyle`
  html, body {
    font-family: 'Roboto Flex', sans-serif;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

const Features = styled.ul`
  display: grid;
  grid-gap: 1rem;
  grid-template: auto / 1fr;
  list-style: none;
  padding: 0;

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
      <Fragment>
        <StyledApp />
        <InstantSearch searchClient={searchClient} indexName={indexName}>
          <div>
            <h2 style={{ marginTop: 0, textAlign: 'center' }}>Featured IRET Research</h2>
            <Features>
              {featured.map(f => (
                <Feature key={`feature-${f.file}`} {...f} />
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
      </Fragment>
    );
  }
}

export default App;
