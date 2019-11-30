import React from 'react';
import { arrayOf, func, shape } from 'prop-types';

import { ButtonRow } from '../Button';
import LabeledPair from '../Typography/LabeledPair';
import { List, Item } from './styles';


export const LookAhead = ({
  onClick, results, onMouseEnter, onMouseLeave,
}) => (
  <List onMouseEnter={() => onMouseEnter()} onMouseLeave={() => onMouseLeave()}>
    {results.slice(0, 3).map((item) => (
      <Item key={item.uuid + item.name}>
        <ButtonRow onClick={() => onClick(item.uuid)}>
          <LabeledPair inline label="- " text={item.name} />
        </ButtonRow>
      </Item>
    ))}
  </List>
);

LookAhead.propTypes = {
  results: arrayOf(shape({})).isRequired,
  onClick: func.isRequired,
  onMouseEnter: func.isRequired,
  onMouseLeave: func.isRequired,
};

export default LookAhead;
