import React from 'react'
import PaymentPage from '../payment-page';
import styled from 'styled-components';

const Content = styled.div`
  margin: 10px 120px;
`;

export const Layout = ({ children }) => (
  <div>
    <Content>
      <PaymentPage />

    </Content>
  </div>
)
