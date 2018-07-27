import React, { Component } from 'react';
import styled  from 'styled-components';

import { Icon } from '../icon';

const Container = styled.div`
  border: 1px solid #E6E6E6;
  padding: 30px;
  margin-bottom: 30px;
`;

const ProductImg = styled.div`
  text-align: center;
`;

const Line = styled.hr`
  color: #E6E6E6;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  color: #000000;
  line-height: 2.0;
`;

const RowTotal = styled(Row)`
  font-size: 16px;
  margin-bottom: 20px;
`;
const Coupon = styled.div`
  font-size: 16px;
  color: #000000;
  cursor: pointer;
  margin-bottom: 20px;
`;

const Name = styled.div``;
const Value = styled.div`
  text-align: right;
`;

const Link = styled.span`
  color: #FF408E;
  border-bottom: 1px dashed #979797;
`;

class ProductInfo extends Component {
  render() {
    return (
      <Container>
        <ProductImg>
          <Icon name="product" />
        </ProductImg>
        <Line />
        <Row>
          <Name>Monthly subscription</Name>
          <Value>$14.95</Value>
        </Row>
        <Row>
          <Name>Shipping</Name>
          <Value>FREE</Value>
        </Row>
        <Row>
          <Name>Tax</Name>
          <Value>$2.35</Value>
        </Row>
        <Row>
          <Name>Discount</Name>
          <Value>-$5</Value>
        </Row>
        <Row>
          <Name>Credit (Balance $100)</Name>
          <Value>$50</Value>
        </Row>
        <Line />
        <RowTotal>
          <Name>TOTAL</Name>
          <Value>$25.00</Value>
        </RowTotal>
        <Coupon>
          Have a <Link>coupon code</Link>?
        </Coupon>
      </Container>
    )
  }
}

export default ProductInfo
