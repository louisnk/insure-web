import styled from 'styled-components';

import { BG_GREY } from '../../themes/constants';

export const FormWrapper = styled.form`
  background-color: ${BG_GREY};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 3rem;
  padding-right: 3rem;
`;

