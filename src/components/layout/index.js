import React from 'react'
import styled from 'styled-components';

import Header from './header';
import PaymentPage from '../payment-page';

const Content = styled.div`
  margin: 10px 120px;
`;

export const Layout = ({ children }) => (
  <div>
    <Content>
      <Header />
      <PaymentPage />
    </Content>
  </div>
)
