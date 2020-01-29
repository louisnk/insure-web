import React, { useEffect, useState } from 'react';
import { shape, string, bool, func } from 'prop-types';
import { Row, Col, Form, Button } from 'antd';

import Api from '../../api';
import { Content } from '../../pages/styles';
import { FORMS } from '../../redux/constants';
import { LABEL } from '../Typography/constants';
// import Panel from '../Panel';
import DynamicForm from '../Form/';
// import StatusBar from '../StatusBar';
import Typography from '../Typography';
import builder from './builder';

import { config } from './base_form.json';

const api = Api.Create()

const Customer = ({
  data, onSubmit,
}) => {
  const [loading, setLoading] = useState(false);
  const [canEdit, setCanEdit] = useState(false);

  const { CUSTOMER } = FORMS;
  // const hasFacial = data.type === KEYS.ID;

  const submitCustomer = async (data) => {
    const res = await api.createCustomer({ data });
    console.log(res);
    return res;
  }

  const handleSubmit = (data, e) => {
    e.preventDefault();

    const customer = builder(data);

    console.log(customer);

    submitCustomer(customer);
  };

  const handleReset = () => {
    // const msg = reset(form);
    // dispatch(msg);
    // onEdit(false);
  };

  const toggleMode = () => {
    setCanEdit(!!!canEdit)
  }


  return (
    <Content>
      <Row>
      <Col span={12}>
        <h1>Customer</h1>
      </Col>
      <Col span={12}>
        <Button onClick={toggleMode}>Toggle Edit</Button>
      </Col>
      </Row>
      <DynamicForm
        name={CUSTOMER}
        onReset={handleReset}
        onSubmit={handleSubmit}
        fields={config}
        data={data}
        editable={canEdit}
      />
    </Content>
  );
};

Customer.propTypes = {
  data: shape({}).isRequired,
  onSubmit: func.isRequired,
};

export default Customer;
