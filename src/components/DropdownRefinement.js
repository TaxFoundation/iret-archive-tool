import React from 'react';
import styled from 'styled-components';
import { connectRefinementList } from 'react-instantsearch-dom';

const StyledSelect = styled.select`
  border: 1px solid #ccc;
  border-radius: 0px;
  padding: 0.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAh0lEQVQ4T93TMQrCUAzG8V9x8QziiYSuXdzFC7h4AcELOPQAdXYovZCHEATlgQV5GFTe1ozJlz/kS1IpjKqw3wQBVyy++JI0y1GTe7DCBbMAckeNIQKk/BanALBB+16LtnDELoMcsM/BESDlz2heDR3WePwKSLo5eoxz3z6NNcFD+vu3ij14Aqz/DxGbKB7CAAAAAElFTkSuQmCC');
  background-repeat: no-repeat;
  background-position: 98% center;
  font-size: ${props => props.theme.fontSize};
  width: 100%;

  &:focus {
    border: solid 1px #235485;
    outline: none;
  }

  option {
    font-family: 'Roboto Flex', sans-serif;
    font-size: 0.9rem;
  }
`;

const DropdownRefinement = props => {
  return (
    <div style={props.style}>
      <p style={{ fontWeight: 'bold', margin: '0 0 0.4rem', textAlign: 'center' }}>{props.label}</p>
      <StyledSelect value={props.currentRefinement[0]} onChange={e => props.refine(e.target.value)}>
        <option value="" style={{ color: '#888', fontStyle: 'italic' }}>
          Select {props.label}
          ...
        </option>
        {props.items.map(item => (
          <option key={item.label} value={item.label}>
            {item.label}
          </option>
        ))}
      </StyledSelect>
    </div>
  );
};

const ConnectedDropdownRefinement = connectRefinementList(DropdownRefinement);

export default ConnectedDropdownRefinement;
