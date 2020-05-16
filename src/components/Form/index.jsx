import React, { useState, useEffect } from 'react';
import { arrayOf, bool, shape, string, func } from 'prop-types';
import uuid from 'uuid/v4'
import useForm from 'react-hook-form';
import cloneDeep from 'lodash/cloneDeep';
import throttle from 'lodash/throttle';
import reduce from 'lodash/reduce';
import sortBy from 'lodash/sortBy';
import {
  Row,
  Col,
  Collapse,
  Divider,
  Button,
  DatePicker,
  Input,
  Typography
} from 'antd';

import Select from './select';
const { Panel } = Collapse;
const { Title } = Typography;

// const { MonthPicker, RangePicker, WeekPicker } = DatePicker;




export const Form = ({
  name,
  fields,
  onReset,
  onSubmit,
  data,
  editable,
  collapsible,
  addRemoveEnabled
}) => {
  const { register, handleSubmit, errors, setValue } = useForm();
  const dRegex = new RegExp(/\d$/);

  const [catConfig, setCatConfig] = useState([]);


  useEffect(() => {
    fields.map(({ name, value, validation }) => {
      const validRegex = new RegExp(validation, 'g');

      register({
        name,
        value,
        validate: val => validRegex.test(val)
      })
    })
  }, [register, fields]);


  useEffect(() => {
    const groups = reduce(fields, (next, { category, ...field }) => {
      if (!(category.id in next)) {
        next[category.id] = {
          category,
          fields: []
        }
      }

      next[category.id].fields.push(field);
      return next;
    }, {});



    const categories = sortBy(groups, g => {
      g.fields = sortBy(g.fields, ['order', 'asc']);
      return g.category.order;
    });


    setCatConfig(categories);
  }, [fields])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue(name, value);
  }


  const onChange = (date, dateString) => {
    console.log(date, dateString);
  }

  console.log(data, catConfig)

  const renderSection = section => {
    return section.map(field => {
      const {
        id, type, name, label, required, disabled, options
      } = field;

      const value = data[name];

      if (value) {
        console.log(name, value);
      }

      if (type === 'text') {
        return (
          <Col span={8} key={id}>
            <label htmlFor={name}>{label}</label>
            { editable
              ? (<Input
                onChange={handleChange}
                name={name}
                defaultValue={value}
                required={required}
                disabled={disabled}
              />)
              : (<p>{value}</p>)
            }
          </Col>
        )
      } else if (type === 'date') {
        return (
          <Col span={8} key={id}>
            <label htmlFor={name}>{label}</label>
            <Row>
            <Col span={24}>
              { editable
                ? (<DatePicker
                  onChange={onChange}
                  name={name}
                  defaultValue={value}
                  required={required} />)
                : (<p>{value}</p>)
              }
            </Col>
            </Row>
          </Col>
        )
      } else if (type === 'select') {
        return (
          <Col span={8} key={id}>
            <label htmlFor={name}>{label}</label>
            { editable
              ? (<Select
                mode='single'
                onChange={onChange}
                name={name}
                defaultValue={value}
                required={required}
                options={options} />)
              : (<p>{value}</p>)
            }
          </Col>
        )
      } else {
        return null;
      }
    })
  }

  const categoryHeader = ({ label, id }) => (
    <Row>
      <Col span={22} key={id}>
        <Title level={2}>{label}</Title>
      </Col>
    </Row>
  )

  const renderCategory = ({ category, fields }) => {
    return (
      <Collapse
        defaultActiveKey={defaultKey}
        className='full-width'>
      <Panel
        header={categoryHeader(category)}
        key={category.id}
        disabled={!collapsible}>
        <Row gutter={{ xs: 10, sm: 16, md: 24 }}  className='form-panel'>
          {renderSection(fields)}
        </Row>
        <Row>
        <h4>end /</h4>
        </Row>
      </Panel>
      </Collapse>
    )
  }

  const defaultKey = catConfig.length ? catConfig[0].category.id : 0;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='full-width'>
      { defaultKey && catConfig.map(renderCategory) }
      <Button className='m50' htmlType='submit'>Submit</Button>
    </form>
  );
}

Form.propTypes = {
  data: shape({
    id: string.isRequired,
  }).isRequired,
  addRemoveEnabled: bool.isRequired,
  collapsible: bool.isRequired,
  editable: bool.isRequired,
  fields: arrayOf(shape({})).isRequired,
  onSubmit: func.isRequired,
};

export default Form;

