import React from 'react';
import { array, func, object, node } from 'prop-types';
import { Input, Select } from 'antd';
import map from 'lodash/map';

const { Option } = Select;

const DropDownSearch = ({
  input, 
  onSearch, 
  onSelectAfter, 
  onSelectBefore, 
  selectAfterItems, 
  selectBeforeItems, 
  selectAfterValue, 
  selectBeforeValue, 
  ...props
}) => {
  const itemsAfter = selectAfterItems &&
    <Select
      onSelect={onSelectAfter}
      style={{ width: '12rem' }}
      value={selectAfterValue}
    >
      {map(selectAfterItems, (item) => (
        <Option key={item.value}>{item.label}</Option>
      ))}
    </Select>;
  const itemsBefore = selectBeforeItems &&
  <Select
    onSelect={onSelectBefore}
    style={{ width: '12rem' }}
    value={selectBeforeValue}
  >
    {map(selectBeforeItems, (item) => (
      <Option key={item.value}>{item.label}</Option>
    ))}
  </Select>;
  return (
    <Input.Search
      {...props}
      addonAfter={itemsAfter}
      addonBefore={itemsBefore}
      onChange={input.onChange}
      onSearch={onSearch}
      value={input.value}
    />
  );
};

DropDownSearch.propTypes = {
  input: object,
  onSearch: func.isRequired,
  onSelectAfter: func,
  onSelectBefore: func,
  selectAfterItems: array,
  selectBeforeItems: array,
  selectAfterValue: node,
  selectBeforeValue: node,
};

DropDownSearch.defaultProps = {
  input: null,
  onSelectAfter: null,
  onSelectBefore: null,
  selectAfterItems: null,
  selectBeforeItems: null,
  selectAfterValue: null,
  selectBeforeValue: null,
};

export default DropDownSearch;
