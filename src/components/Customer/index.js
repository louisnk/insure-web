import React from 'react';
import { shape, string, bool, func } from 'prop-types';
import { Button } from 'antd';

import { Content } from '../../pages/styles';
import { FORMS } from '../../redux/constants';
import { LABEL } from '../Typography/constants';
// import Panel from '../Panel';
import Form from '../Form/';
// import StatusBar from '../StatusBar';
import Typography from '../Typography';


import { config } from './base_form.json';



const Customer = ({
  data, onSubmit,
}) => {

  const { CUSTOMER } = FORMS;
  // const hasFacial = data.type === KEYS.ID;

  const handleSubmit = () => {
    // dispatch(saveSelectedKyc({ form, documentId: data.id, type: data.type }));
    // @TODO: make it close the form on submit success
    // onEdit(false);
  };

  const handleReset = () => {
    // const msg = reset(form);
    // dispatch(msg);
    // onEdit(false);
  };

  return (
    <Content>
      <h1>Customer</h1>
      <Form
        name={CUSTOMER}
        onReset={handleReset}
        onSubmit={handleSubmit}
        fields={config}
        data={data}
      />
    </Content>
  );
};

Customer.propTypes = {
  data: shape({
    type: string.isRequired,
    extracted: shape({}),
  }).isRequired,
  onSubmit: func.isRequired,
};

export default Customer;
