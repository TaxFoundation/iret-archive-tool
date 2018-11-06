import styled from 'styled-components';
import { Pagination } from 'react-instantsearch-dom';

const StyledPagination = styled(Pagination)`
  ul {
    display: grid;
    grid-auto-flow: column;
    list-style: none;
    padding: 0;
  }

  li {
    border: 1px solid #ccc;
    border-left: none;
    padding: 0.5rem;
    text-align: center;

    &:hover {
      background-color: #e6f4ff;
    }

    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      border-left: 1px solid #ccc;
    }

    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }

  a {
    color: #0094ff;
    text-decoration: none;
  }
`;

export default StyledPagination;
