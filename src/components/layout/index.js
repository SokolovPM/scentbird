import React from 'react'
import styled from 'styled-components';

import Header from './header';
import PaymentPage from '../payment-page';

const Content = styled.div`

  margin: 10px 120px 80px 120px;

  @media only screen and (max-width: 320px) {
    margin: 20px;
  }
`;

export const Layout = ({ children }) => (
  <div>
    <Content>
      <Header />
      <PaymentPage />
    </Content>
  </div>
)
