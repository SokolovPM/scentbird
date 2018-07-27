import React, { Component } from 'react';
import styled  from 'styled-components';

import PaymentInfo from './payment-info';
import ProductInfo from './product-info';
import DeliveryInfo from './delivery-info';

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductAndDelivery = styled.div`
  max-width: 400px;
  margin-right: 50px;
`;

class PaymentPage extends Component {
  render() {
    return (
      <div>
        <Content>
          <ProductAndDelivery>
            <ProductInfo />
            <DeliveryInfo />
          </ProductAndDelivery>
          <PaymentInfo />
        </Content>
      </div>
    )
  }
}

export default PaymentPage
