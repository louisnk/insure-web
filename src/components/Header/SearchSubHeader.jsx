import React, { useState } from 'react';
import { Switch, Tooltip } from 'antd';
import { func, node, bool } from 'prop-types';
import SearchForm from '../FormSearch';
import Button from '../Button';
import { Container } from '../../layouts/Default/styles';
import NewCustomer from '../NewCustomer';
import Modal from '../Modal';

const SearchSubHeader = ({
  checked, 
  handleChange, 
  handleSelect, 
  handleSubmit, 
  onSwitchChanged, 
  onResetClicked, 
  selectAfterValue, 
  selectBeforeValue,
}) => {
  const [ modalOpen, setModalOpen ] = useState(false);

  const handleAddCustomer = (id) => {
    console.log(id);
  };

  const handleCloseModal = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    console.log('closing');
    setModalOpen(false);
  };

  const onCreate = (e) => {
    if (e) e.preventDefault();
    console.log('new customer');
    setModalOpen(true);
  };

  return (
    <Container justifyContent="space-between">
      <SearchForm
        handleChange={handleChange}
        handleSelect={handleSelect}
        handleSubmit={handleSubmit}
        selectAfterValue={selectAfterValue}
        selectBeforeValue={selectBeforeValue}
      />

      <Tooltip title="Live Search">
        <Switch
          checked={checked}
          checkedChildren="On"
          onChange={onSwitchChanged}
          style={{ marginTop: '5px' }}
          unCheckedChildren="Off"
        />
      </Tooltip>

      <Button onClick={onResetClicked}>
                Reset Search
      </Button>

      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        title="The name for this modal"
      >
        <NewCustomer onSave={handleAddCustomer} />
      </Modal>

      <Button onClick={onCreate} style={{ marginRight: '3rem' }} type="primary">
                New Customer
      </Button>
    </Container>
  );
};

SearchSubHeader.propTypes = {
  checked: bool,
  handleChange: func,
  handleSelect: func,
  handleSubmit: func.isRequired,
  onSwitchChanged: func,
  onResetClicked: func,
  selectAfterValue: node,
  selectBeforeValue: node,
};

SearchSubHeader.defaultProps = {
  checked: false,
  handleChange: null,
  handleSelect: null,
  onSwitchChanged: null,
  onResetClicked: null,
  selectAfterValue: null,
  selectBeforeValue: null,
};

export default SearchSubHeader;
