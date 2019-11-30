import styled from 'styled-components';
import {
  FONT_SIZE_SMALL,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_LARGE,
  FONT_SIZE_XL,
  FONT_SIZE_H1,
} from '../../themes/constants';


// const styleBlock = `
//   color: ${(props) => (props.color ? props.color : '#111')};
//   font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
//   font-weight: ${(props) => (props.bold
//     ? 'bold'
//     : props.light
//       ? 'light'
//       : 'regular')
// };
// `;

export const H1 = styled.h1`
  font-size: ${FONT_SIZE_H1};
  margin-right: calc(${FONT_SIZE_H1} / 2);
  ${(props) => (props.inline ? 'display: inline-block;' : '')};
  text-transform: uppercase;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;
export const H2 = styled.h2`
  font-size: ${FONT_SIZE_XL};
  margin-right: calc(${FONT_SIZE_XL} / 2);
  ${(props) => (props.inline ? 'display: inline-block;' : '')};
  text-transform: uppercase;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;
export const H3 = styled.h3`
  font-size: ${FONT_SIZE_LARGE};
  margin-right: calc(${FONT_SIZE_LARGE} / 2);
  ${(props) => (props.inline ? 'display: inline-block;' : '')};
  text-transform: ${(props) => (props.capitalize ? 'capitalize' : 'none')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;
export const H4 = styled.h4`
  font-size: ${FONT_SIZE_SMALL};
  margin-right: calc(${FONT_SIZE_SMALL} / 2);
  ${(props) => (props.inline ? 'display: inline-block;' : '')};
  text-transform: ${(props) => (props.capitalize ? 'capitalize' : 'none')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;
export const P = styled.p`
  font-size: ${FONT_SIZE_MEDIUM};
  margin: 0;
  margin-right: calc(${FONT_SIZE_MEDIUM} / 2);
  ${(props) => (props.inline ? 'display: inline-block;' : '')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  text-transform: ${(props) => (props.capitalize ? 'capitalize' : 'none')};
`;
export const Psmall = styled.p`
  font-size: ${FONT_SIZE_SMALL};
  margin: 0;
  margin-right: calc(${FONT_SIZE_SMALL} / 2);
  ${(props) => (props.inline ? 'display: inline-block;' : '')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  text-transform: ${(props) => (props.capitalize ? 'capitalize' : 'none')};
`;
export const Label = styled.label`
  font-size: ${FONT_SIZE_MEDIUM};
  margin-right: calc(${FONT_SIZE_MEDIUM} / 2);
  ${(props) => (props.inline ? 'display: inline-block;' : '')};
  font-weight: 'bold';
  text-transform: ${(props) => (props.capitalize ? 'capitalize' : 'none')};
  text-align: ${(props) => props.textAlign || ''};
`;

export default styled.p``;
