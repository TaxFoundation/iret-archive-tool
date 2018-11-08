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

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ${props => (props.style.gridArea ? `grid-area: ${props.style.gridArea};` : null)};
`;

export default Refinement;
