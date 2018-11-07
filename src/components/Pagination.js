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
    padding: 0.5rem;
    text-align: center;

    &:hover {
      background-color: #e6f4ff;
    }
  }

  a {
    color: #0094ff;
    text-decoration: none;
  }
`;

export default StyledPagination;
