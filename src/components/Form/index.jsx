import React, { useState, useEffect } from 'react';
import useForm from 'react-hook-form';
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
} from 'antd';

import Select from './select';
import Typography from '../Typography';
const { Panel } = Collapse;

// const { MonthPicker, RangePicker, WeekPicker } = DatePicker;




export const Form = ({
  name, fields, onReset, onSubmit, data
}) => {
  const { register, handleSubmit, errors, setValue } = useForm({
    validateCriteriaMode: "firstErrorDetected",
  });

  const [catConfig, setCatConfig] = useState([]);

  useEffect(() => {
    console.log('hello')
    // getDataFromApi(params);
  }, [])

  const handleChange = (e) => {
    console.log('ok', e.target.name)
    const { name, value } = e.target;
    setValue(name, value);
  }


  const onChange = (date, dateString) => {
    console.log(date, dateString);
  }


  const renderSection = section => {
    return section.map(field => {
      const {
        id, type, name, label, required, value, disabled, options
      } = field;

      if (type === 'text') {
        return (
          <Col span={8} key={id}>
            <label htmlFor={name}>{label}</label>
            <Input
              onChange={handleChange}
              name={name}
              required={required}
              disabled={disabled}
            />
          </Col>
        )
      } else if (type === 'date') {
        return (
          <Col span={8} key={id}>
            <label htmlFor={name}>{label}</label>
            <Row>
            <Col span={24}>
              <DatePicker onChange={onChange} name={name} required={required} />
            </Col>
            </Row>
          </Col>
        )
      } else if (type === 'select') {
        return (
          <Col span={8} key={id}>
            <label htmlFor={name}>{label}</label>
            <Select
              mode='single'
              onChange={onChange}
              name={name}
              required={required}
              options={options} />
          </Col>
        )
      } else {
        return null;
      }
    })
  }

  const renderCategory = ({ category, fields }) => {
    console.log(category)
    return (
      <Panel header={category.label} key={category.id}>
        <Row gutter={{ xs: 10, sm: 16, md: 24 }}  className='form-panel'>
          {renderSection(fields)}
        </Row>
        <Row>
        <h4>end /</h4>
        </Row>
      </Panel>
    )
  }

  useEffect(() => {
    fields.map(({ name, value, validation }) => {
      const validRegex = new RegExp(validation, 'g');

      register({
        name,
        value,
        validate: val => validRegex.test(val)
      })
    })
  }, [register]);


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
  }, [])


  const defaultKey = catConfig.length ? catConfig[0].category.id : 0;
  console.log(defaultKey)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='full-width'>
      { defaultKey &&
        (<Collapse defaultActiveKey={defaultKey} className='full-width'>
          {catConfig.map(renderCategory)}
        </Collapse>)
      }
      <Button className='m50' type='submit' onSubmit={onSubmit}>Submit</Button>

    </form>
  );
}

export default Form;

