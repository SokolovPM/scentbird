import React, { Component } from 'react';
import styled  from 'styled-components';
import Media from "react-media";

import { Icon } from '../icon';

const Container = styled.div`
  max-width: 400px;
`;

class DeliveryInfo extends Component {
  render() {
    return (
      <Container>
        <Media query="(max-width: 320px)">
          {matches =>
            matches ? (
              <div>
                <div>
                  You will receive an email confirmation when recipient accepts your gift. Scentbird ships between the 15th and the 18th of every month. Recipient will receive an email confirmation of shipment every month. Please allow 5-7 days for delivery.
                </div>
                <div>
                  <Icon name="delivery320" />
                </div>
              </div>
            ) : (
              <div>
                <div>
                  <Icon name="delivery" />
                </div>
                <div>
                  You will receive an email confirmation when recipient accepts your gift. Scentbird ships between the 15th and the 18th of every month. Recipient will receive an email confirmation of shipment every month. Please allow 5-7 days for delivery.
                </div>
              </div>
            )
          }
        </Media>

      </Container>
    )
  }
}

export default DeliveryInfo
