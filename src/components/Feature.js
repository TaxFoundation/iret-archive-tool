import React from 'react';
import styled from 'styled-components';

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

const StyledFeature = styled.li`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #333;
  display: grid;
  grid-template: auto / minmax(50px, 150px) 1fr;
  position: relative;
  transition: background-color 0.2s ease-in-out;

  @media screen and (min-width: 600px) {
    grid-template: 150px auto / 1fr;
  }

  &:hover {
    background-color: #e6f4ff;
  }

  p {
    margin: 0;
  }
`;

const Info = styled.div`
  padding: 1rem;
`;

const Feature = props => {
  return (
    <StyledFeature>
      <img src={props.picture} style={{ height: '100%', margin: 0, objectFit: 'cover', width: '100%' }} />
      <Info>
        <h3 style={{ margin: '0 0 0.5rem' }}>{props.title}</h3>
        <p style={{ fontSize: '0.9rem', color: '#888' }}>
          {props.date} by {props.authors.join(', ')}
        </p>
      </Info>
      {props.file ? <Link href={fileRoot + props.file + '.PDF'} rel="noopener noreferrer" target="_blank" /> : null}
    </StyledFeature>
  );
};

export default Feature;
