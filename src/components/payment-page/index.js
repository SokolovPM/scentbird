import React, { Component } from 'react';
import styled  from 'styled-components';
import Media from "react-media";

import PaymentInfo from './payment-info';
import ProductInfo from './product-info';
import DeliveryInfo from './delivery-info';


import OfferHeader from './offer-header';

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ProductAndDelivery = styled.div`
  max-width: 400px;
  margin-right: 50px;

  @media only screen and (max-width: 320px) {
    width: 100%;
    margin-right: 0px;
  }
`;

class PaymentPage extends Component {
  render() {
    return (
      <div>
        <Media query="(max-width: 320px)">
          {matches =>
            matches ? (
              <Content>
              
                <OfferHeader />
                <ProductAndDelivery>
                  <ProductInfo />
                </ProductAndDelivery>
                <PaymentInfo />
                <DeliveryInfo />
              </Content>
            ) : (
              <Content>
                <ProductAndDelivery>
                  <ProductInfo />
                  <DeliveryInfo />
                </ProductAndDelivery>
                <PaymentInfo />
              </Content>
            )
          }
        </Media>
      </div>
    )
  }
}

export default PaymentPage
