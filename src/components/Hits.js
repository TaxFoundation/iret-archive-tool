import React from 'react';
import styled from 'styled-components';
import { Hits, Highlight } from 'react-instantsearch-dom';

const fileRoot = 'https://files.taxfoundation.org/iret/';

const Link = styled.a`
  bottom: 0;
  display: block;
  left: 0;
  position: absolute;
  right: 0;
  text-decoration: none;
  top: 0;
`;

export const StyledHits = styled(Hits)`
  ul,
  li {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  li {
    > div {
      border-bottom: 1px solid #ccc;
      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc;
      list-style: none;
    }

    &:first-child {
      > div {
        border-top: 1px solid #ccc;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
    }

    &:last-child {
      > div {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }
  }
`;

export const StyledHit = styled.div`
  background-color: #fff;
  padding: 0.5rem;
  position: relative;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #e6f4ff;
  }

  p {
    margin: 0;
  }

  em.ais-Highlight-highlighted {
    background-color: #0094ff;
    color: #fff;
  }
`;

export const Entry = props => {
  return (
    <StyledHit style={{ position: 'relative' }}>
      <p>
        <Highlight attribute="title" hit={props.hit} />
      </p>
      <p>
        <em>
          <Highlight attribute="subtitle" hit={props.hit} />
        </em>
      </p>
      <p>
        <Highlight attribute="authors" hit={props.hit} />
      </p>
      <p>
        <Highlight attribute="date" hit={props.hit} />
      </p>
      {props.hit.file ? <Link href={fileRoot + props.hit.file} rel="noopener noreferrer" target="_blank" /> : null}
    </StyledHit>
  );
};
