import React from 'react';
import styled from 'styled-components';
import { RefinementList } from 'react-instantsearch-dom';

const Refinement = styled(RefinementList)`
  form[role='search'] {
    display: grid;
    grid-template-columns: 1fr 48px;
    margin-bottom: 0.5rem;
  }

  input[type='search'] {
    background: #fff;
    border: solid 1px #ccc;
    border-radius: 4px;
    font-family: 'Lato', sans-serif;
    font-size: 1rem;
    margin-right: 0.5rem;
    padding: 0.5rem;

    &:focus {
      border: solid 1px #0094ff;
      outline: none;
    }
  }

  button[type='submit'] {
    background: #0094ff;
    border: solid 1px #0094ff;
    border-radius: 4px;
    cursor: pointer;
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

  button[type='reset'] {
    display: none !important;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  label {
    display: grid;
    grid-template-columns: 3rem 4fr 1fr;

    input[type='checkbox'] {
      height: 1rem;
      width: 1rem;
    }

    .ais-RefinementList-count {
      color: #888;
      font-style: italic;
      text-align: right;
    }
  }
`;

const LabeledRefinement = props => (
  <div style={props.style}>
    <p style={{ fontWeight: 'bold', margin: '0 0 0.4rem', textAlign: 'center' }}>{props.label}</p>
    <Refinement {...props} />
  </div>
);

export default LabeledRefinement;
