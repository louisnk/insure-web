import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const SelectInput = ({
  mode,
  size,
  options,
  onChange,
  // onFocus,
  meta,
  ...props
}) => (
  <Select
    mode={mode || "multiple"}
    notFoundContent={null}
    onChange={onChange}
    size={size || "large"}
    {...props}
  >
    {
      options && options.map((option) => (
        <Option
          key={option.id}
          label={option.label}
          value={option.value}
          disabled={option.disabled}>
          { option.label }
        </Option>
      ))
    }
  </Select>
);

export default SelectInput;
