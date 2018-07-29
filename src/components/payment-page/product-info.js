import React, { Component } from 'react';
import styled  from 'styled-components';
import Media from "react-media";

import GreyCheckbox from './grey-checkbox';

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

const DiscountValue = styled(Value)`
  color: #FF408E;
`;

const CreditValue = styled(Value)`
  flex-grow: 1;
  margin-right: 10px;
`;

const Link = styled.span`
  color: #FF408E;
  border-bottom: 1px dashed #979797;
`;

const CheckboxItem = styled.div`
  width=
`;

class ProductInfo extends Component {
  render() {
    return (
      <Container>
        <ProductImg>
          <Media query="(max-width: 320px)">
            {matches =>
              matches ? (
                <Icon name="product320" />
              ) : (
                <Icon name="product" />
              )
            }
          </Media>
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
          <DiscountValue>-$5</DiscountValue>
        </Row>
        <Row>
          <Name>Credit (Balance $100)</Name>
          <CreditValue>$50</CreditValue>
          <div style={{ width: '5%' }}>
            <GreyCheckbox text="" id="credit"/>
          </div>
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
