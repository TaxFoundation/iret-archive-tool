import React from 'react';
import styled from 'styled-components';
import { Hits, Highlight } from 'react-instantsearch-dom';
import Download from './Download';

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
  color: #333;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 48px 1fr;
  align-items: center;
  padding: 1rem;
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
    <StyledHit>
      <Download style={{ justifySelf: 'center', height: '36px', width: '36px' }} />
      <div>
        <h2 style={{ margin: '0 0 0.5rem' }}>
          <Highlight attribute="title" hit={props.hit} />
        </h2>
        <p style={{ marginBottom: '0.5rem' }}>{props.hit.type}</p>
        <p style={{ fontSize: '0.9rem', color: '#888' }}>
          {props.hit.date} by <Highlight attribute="authors" hit={props.hit} />
        </p>
      </div>
      {props.hit.file ? <Link href={fileRoot + props.hit.file} rel="noopener noreferrer" target="_blank" /> : null}
    </StyledHit>
  );
};
