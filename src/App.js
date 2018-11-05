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

const Link = styled.a`
  display: block;
  text-decoration: none;
`;

const ConditionalLink = props =>
  props.file ? (
    <Link href={fileRoot + props.file} target="_blank" rel="noopener noreferrer">
      {props.children}
    </Link>
  ) : (
    <div>{props.children}</div>
  );

const Entry = props => {
  return (
    <ConditionalLink file={props.hit.file || false}>
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
    </ConditionalLink>
  );
};

class App extends Component {
  render() {
    return (
      <InstantSearch searchClient={searchClient} indexName={indexName}>
        <SearchBox />
        <Hits hitComponent={Entry} />
        <Pagination />
      </InstantSearch>
    );
  }
}

export default App;
