import React from 'react';
import { arrayOf, oneOfType, shape, string } from 'prop-types';

// import { Header } from '../components/Header';
import {
  PageContainer,
  ContentWrapper,
  SidebarWrapper,
  SubHeaderWrapper,
  Content,
} from './styles';

const DefaultLayout = ({
  sidebarContent,
  subHeader,
  children,
  ...props
}) => {
  // const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <PageContainer>
      {
        subHeader
          ? <SubHeaderWrapper>{subHeader}</SubHeaderWrapper>
          : null
      }
      <ContentWrapper>
        <Content>
          { children }
        </Content>
        {
          sidebarContent
            ? <SidebarWrapper>{sidebarContent}</SidebarWrapper>
            : null
        }
      </ContentWrapper>
    </PageContainer>
  );
};

DefaultLayout.propTypes = {
  children: oneOfType([ arrayOf(shape({})), shape({}) ]).isRequired,
  sidebarContent: oneOfType([ shape({}), string ]),
  subHeader: oneOfType([ shape({}), string ]),
};

DefaultLayout.defaultProps = {
  sidebarContent: null,
  subHeader: null,
};

export default DefaultLayout;