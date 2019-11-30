import React from 'react';
import PropTypes, { array, string, shape, oneOfType } from 'prop-types';

import { LABEL } from './constants';
import Typography from './index';

const LabeledPair = ({
  label, text, children, style,
}) => (
  <span style={{ position: 'relative', ...style }}>
    <Typography inline size={LABEL} width="2rem">{label}</Typography>
    { text ? <Typography inline>{text}</Typography> : null }
    { children }
  </span>
);

LabeledPair.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string,
  children: oneOfType([ string, array, shape({}) ]),
  style: shape({}),
};

LabeledPair.defaultProps = {
  children: null,
  text: '',
  style: {},
};

export default LabeledPair;
