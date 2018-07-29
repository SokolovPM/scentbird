import React, { Component } from 'react';
import styled  from 'styled-components';
import Media from "react-media";

const Container = styled.div`
  margin-bottom: 40px;
`;
const Title = styled.div`
  font-size: 36px;
  color: #000000;
  margin-top: -13px;

  @media only screen and (max-width: 320px) {
    font-size: 22px;
    text-align: center;
  }
`;
const Subtitle = styled.div`
  font-size: 16px;
  color: #FF408E;

  @media only screen and (max-width: 320px) {
    text-align: center;
  }
`;

class OfferHeader extends Component {
  render() {
    return (
      <Container>
        <Media query="(max-width: 320px)">
          {matches =>
            matches ? (
              <Title>MONTHLY SUBSCRIPTION</Title>
            ) : (
              <Title>MONTH-TO-MONTH SUBSCRIPTION</Title>
            )
          }
        </Media>
        <Subtitle>Billed monthly. Renews automatically, cancel any time. Free shipping.</Subtitle>
      </Container>
    )
  }
}

export default OfferHeader
