import React, { Component } from 'react';
import styled  from 'styled-components';
import Media from "react-media";

import Address from './address';
import Account from './account';
import Card from './card';
import Buttons from './buttons';
import Gender from './gender';

import OfferHeader from '../offer-header';

const Container = styled.div`
  flex-grow: 1;

  @media only screen and (max-width: 320px) {
    width: 100%;
  }
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
        <Media query="(max-width: 320px)">
          {matches =>
            matches ? (
              <Gender />
            ) : (
              <div>
                <OfferHeader />
                <Account />
              </div>
            )
          }
        </Media>
        <Address />
        <Card />
        <Buttons />
      </Container>
    )
  }
}

export default PaymentInfo
