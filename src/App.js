import React, { Component } from 'react';
import styled from 'styled-components';
import algoliasearch from 'algoliasearch/lite';
import Search from './components/Search';
import Refinement from './components/Refinement';
import { Entry, StyledHits } from './components/Hits';
import Pagination from './components/Pagination';
import { InstantSearch, Configure } from 'react-instantsearch-dom';
// import List from './components/List';
// import data from './iret.json';

const appId = 'F69DU4TWEG';
const searchKey = '38ec08d7e6bb2135f28503d3a806db71';
const indexName = 'iret';

const searchClient = algoliasearch(appId, searchKey);

const StyledApp = styled.div`
  font-family: 'Lato', sans-serif;
`;

class App extends Component {
  render() {
    // const dataFormatted = data.map(d => {
    //   const authors = d.authors.split(', ');
    //   const tags = d.tags.split(', ');
    //   const cats = d.categories.split(', ');
    //   return {
    //     title: d.title,
    //     date: d.date,
    //     year: d.year,
    //     authors,
    //     file: d.file,
    //     type: d.type,
    //     cats,
    //     tags,
    //   };
    // });
    // console.log(dataFormatted);
    return (
      <StyledApp>
        <InstantSearch searchClient={searchClient} indexName={indexName}>
          <Configure maxValuesPerFacet={50} />
          <Search />
          <div>
            <Refinement attribute="authors" searchable />
            <Refinement attribute="type" />
            <Refinement
              attribute="year"
              limit={100}
              transformItems={items => {
                console.log(items);
                return items.sort((a, b) => +a.label - +b.label);
              }}
            />
            <Refinement attribute="categories" searchable />
            <Refinement attribute="tags" searchable />
          </div>
          <StyledHits hitComponent={Entry} />
          <Pagination />
        </InstantSearch>
      </StyledApp>
    );
  }
}

export default App;
