import React, { Component } from 'react';
import styled from 'styled-components';

import { Row, RowItem } from './common-components';

import { Icon } from '../../icon';

const Back = styled.div`
  font-size: 18px;
  color: #9B9B9B;
  margin-right: 40px;
  padding-top: 14px;
  text-decoration: underline;
  cursor: pointer;
`;

const BuyBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  height: 50px;
  background-color: #FF458F;
  color: #ffffff;
  padding-left: 50px;
  padding-top: 14px;
  padding-right: 30px;
  font-size: 18px;
  cursor: pointer
`;

const Text = styled.span``;
const Arrow = styled.span``;

class Buttons extends Component {
  render () {
    return (
      <Row justifyContent="flex-end">
        <Back>Back</Back>
        <BuyBlock>
          <Text>BUY NOW</Text>
          <Arrow><Icon name="buyArrow" /></Arrow>
        </BuyBlock>
      </Row>
    )
  }
}

export default Buttons;
