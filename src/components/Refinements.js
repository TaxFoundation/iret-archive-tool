import React from 'react';
import styled from 'styled-components';
import DropdownRefinement from './DropdownRefinement';
import Refinement from './Refinement';
import { PubTypes } from '../config';

const StyledRefinements = styled.div`
  display: grid;
  grid-template-areas:
    'authors'
    'type'
    'year'
    'categories'
    'tags';

  @media screen and (min-width: 600px) {
    grid-template-columns:
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
      'authors type year'
      'categories categories tags';
  }
`;

const Refinements = () => {
  return (
    <StyledRefinements>
      <DropdownRefinement attribute="authors" limit={100} style={{ gridArea: 'authors' }} />
      <DropdownRefinement
        attribute="type"
        style={{ gridArea: 'type' }}
        transformItems={items => {
          return items.map(item => {
            let newItem = item;
            newItem.label = PubTypes.find(type => type.id === item.label)['name'];
            return newItem;
          });
        }}
      />
      <DropdownRefinement
        attribute="year"
        limit={100}
        transformItems={items => {
          return items.sort((a, b) => +a.label - +b.label);
        }}
        style={{ gridArea: 'year' }}
      />
      <Refinement attribute="categories" searchable style={{ gridArea: 'categories' }} />
      <Refinement attribute="tags" searchable style={{ gridArea: 'tags' }} />
    </StyledRefinements>
  );
};

export default Refinements;
