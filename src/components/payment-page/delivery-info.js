import React, { Component } from 'react';
import styled  from 'styled-components';

import deliveryImg from './delivery.svg';

const Container = styled.div`
  max-width: 400px;
`;

class DeliveryInfo extends Component {
  render() {
    return (
      <Container>
        <div>
          <span dangerouslySetInnerHTML={{ __html: deliveryImg }} />
        </div>
        <div>
          You will receive an email confirmation when recipient accepts your gift. Scentbird ships between the 15th and the 18th of every month. Recipient will receive an email confirmation of shipment every month. Please allow 5-7 days for delivery.
        </div>
      </Container>
    )
  }
}

export default DeliveryInfo
