import styled from 'styled-components';
import { Z_PRIMARY } from '../../themes/constants';


const List = styled.ul`
  position: absolute;
  top: 3rem;
  width: 100%;
  left: 0;
  z-index: ${Z_PRIMARY};
  background-color: white;
  font-size: 2rem;
  border: 1px solid red;
`;

const Item = styled.li`
  display: flex;

  width: 100%;
  list-style: none;
  margin: 0;
  padding: 1rem;
`;


export { List, Item };

