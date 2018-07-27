import React, { Component } from 'react';
import styled  from 'styled-components';

import Header from './header';
import PaymentInfo from './payment-info';
import ProductInfo from './product-info';
import DeliveryInfo from './delivery-info';

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

class PaymentPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content>
          <div>
            <ProductInfo />
            <DeliveryInfo />
          </div>
          <PaymentInfo />
        </Content>
      </div>
    )
  }
}

export default PaymentPage
