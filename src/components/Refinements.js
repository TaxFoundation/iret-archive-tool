import React, { Component } from 'react';
import styled from 'styled-components';
import DropdownRefinement from './DropdownRefinement';
import Refinement from './Refinement';

const StyledRefinements = styled.div`
  background-color: #e6f4ff;
  border-radius: 4px;
  display: grid;
  grid-gap: 1rem;
  grid-template-areas:
    'authors'
    'type'
    'year'
    'categories'
    'tags';
  margin-bottom: 1rem;
  padding: 1rem;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
      'authors authors type type year year'
      'categories categories categories tags tags tags';
  }
`;

const Dropdown = styled.button`
  background-color: #0094ff;
  border: 1px solid #0094ff;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-family: 'Lato', sans-serif;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  text-align: center;
  width: 100%;
`;

class Refinements extends Component {
  constructor() {
    super();
    this.state = {
      showRefinements: false,
    };

    this.toggleRefinements = this.toggleRefinements.bind(this);
  }

  toggleRefinements() {
    this.setState({ showRefinements: !this.state.showRefinements });
  }

  render() {
    return (
      <div>
        {this.state.showRefinements ? (
          <StyledRefinements>
            <DropdownRefinement attribute="authors" label="Author" limit={100} style={{ gridArea: 'authors' }} />
            <DropdownRefinement attribute="type" label="Publication Type" style={{ gridArea: 'type' }} />
            <DropdownRefinement
              attribute="year"
              label="Year"
              limit={100}
              transformItems={items => {
                return items.sort((a, b) => +a.label - +b.label);
              }}
              style={{ gridArea: 'year' }}
            />
            <Refinement
              label="Categories"
              attribute="categories"
              limit={5}
              searchable
              style={{ gridArea: 'categories' }}
            />
            <Refinement label="Tags" attribute="tags" limit={5} searchable style={{ gridArea: 'tags' }} />
          </StyledRefinements>
        ) : (
          <Dropdown onClick={() => this.toggleRefinements()}>Click to Refine Search</Dropdown>
        )}
      </div>
    );
  }
}

export default Refinements;
