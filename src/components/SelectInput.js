import React from 'react';
import { Select } from '../styles/Elements.styles';

const SelectInput = ({ price, setPrice }) => {
  return (
    // Select is a styled component
    <Select
      defaultValue={price}
      onChange={(e) => setPrice(e.target.value)}
    >
      <option value={0}>None</option>
      <option value={1}>Price (Low to High)</option>
      <option value={-1}>Price (High to Low)</option>
    </Select>
  );
};

export default SelectInput;