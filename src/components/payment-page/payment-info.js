import React, { Component } from 'react';
import styled  from 'styled-components';

const Container = styled.div`
  border: 1px solid black;
  flex-grow: 1;
`;

class PaymentInfo extends Component {
  render() {
    return (
      <Container>
        payment-info
      </Container>
    )
  }
}

export default PaymentInfo
