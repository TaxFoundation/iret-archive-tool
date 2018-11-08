import React from 'react';
import { connectRefinementList } from 'react-instantsearch-dom';

const DropdownRefinement = ({ currentRefinement, refine, items }) => {
  return (
    <select value={currentRefinement[0]} onChange={e => refine(e.target.value)}>
      <option value="">--</option>
      {items.map(item => (
        <option key={item.label} value={item.label}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

const ConnectedDropdownRefinement = connectRefinementList(DropdownRefinement);

export default ConnectedDropdownRefinement;
