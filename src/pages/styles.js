import styled from 'styled-components';

import { DEFAULT_PADDING, HEADER_HEIGHT, SIDEBAR_WIDTH, BG_GREY } from '../themes/constants';


const PageContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  box-sizing: border-box;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 2.5rem;
`;

const SidebarWrapper = styled.div`
  width: ${SIDEBAR_WIDTH};
  height: calc(100vh - ${HEADER_HEIGHT});
  box-sizing: border-box;
  border-left: 1px solid black;
`;

const SubHeaderWrapper = styled.div`
  background-color: ${BG_GREY};
  height: ${HEADER_HEIGHT};
  width: 100%;
  padding: 3rem 0;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: ${(props) => props.justifyContent || ''};
  align-items: ${(props) => (props.center ? 'center' : 'flex-start')};
  padding: ${(props) => (props.padding === false ? 0 : props.padding || DEFAULT_PADDING)};
`;


const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  align-items: ${(props) => props.alignItems || 'flex-start'};
  padding: ${(props) => (props.padding === false ? 0 : props.padding || DEFAULT_PADDING)};
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  align-items: ${(props) => props.alignItems || 'flex-start'};
  padding: ${(props) => props.padding || DEFAULT_PADDING};
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  list-style: none;
  display: block;
  margin: 0;
  padding: 0;
`;

const H1 = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: ${(props) => (props.center ? 'center' : '')};
`;

const Form = styled.form`
  display: flex;
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  width: 100%;
  max-width: ${(props) => props.maxWidth || ''};
`;

export {
  PageContainer,
  Column,
  Content,
  ContentWrapper,
  Container,
  H1,
  Form,
  Row,
  List,
  ListItem,
  SidebarWrapper,
  SubHeaderWrapper,
};
