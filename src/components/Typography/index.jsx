import React from 'react';
import PropTypes from 'prop-types';

import { XL, LARGE, HEADER, SMALL, LABEL } from './constants';
import { H1, H2, H3, P, Psmall, Label } from './styles';


const Typography = (props) => {
  switch (props.size) {
  case XL:
    return <H1 {...props} />;
  case LARGE:
    return <H2 {...props} />;
  case HEADER:
    return <H3 {...props} />;
  case SMALL:
    return <Psmall {...props} />;
  case LABEL:
    return <Label {...props} />;
  default:
    return <P {...props} />;
  }
};

Typography.propTypes = {
  size: PropTypes.string,
};

Typography.defaultProps = {
  size: null,
};

export default Typography;
