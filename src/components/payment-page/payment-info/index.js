import React, { Component } from 'react';
import styled  from 'styled-components';

import Address from './address';
import Account from './account';

const Container = styled.div`
  flex-grow: 1;
`;

const Header = styled.div`
  margin-bottom: 40px;
`;
const Title = styled.div`
  font-size: 36px;
  color: #000000;
  margin-top: -13px;
`;
const Subtitle = styled.div`
  font-size: 16px;
  color: #FF408E;
`;

class PaymentInfo extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Title>MONTH-TO-MONTH SUBSCRIPTION</Title>
          <Subtitle>Billed monthly. Renews automatically, cancel any time. Free shipping.</Subtitle>
        </Header>
        <Account />
        <Address />
      </Container>
    )
  }
}

export default PaymentInfo
