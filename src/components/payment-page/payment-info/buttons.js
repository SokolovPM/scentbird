import React, { Component } from 'react';
import styled from 'styled-components';
import Media from "react-media";
import { connect } from 'react-redux';

import {
  goToBuy
} from '../../../actions';

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

  @media only screen and (max-width: 320px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

const Text = styled.span``;
const Arrow = styled.span``;

export const Wrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;

class Buttons extends Component {
  render () {
    return (
      <Media query="(max-width: 320px)">
        {matches =>
          matches ? (
            <Wrapper>
              <BuyBlock>
                <Text>BUY NOW</Text>
                <Arrow><Icon name="buyArrow" /></Arrow>
              </BuyBlock>
            </Wrapper>
          ) : (
            <Row justifyContent="flex-end">
              <Back>Back</Back>
              <BuyBlock onClick={this.props.goToBuy}>
                <Text>BUY NOW</Text>
                <Arrow><Icon name="buyArrow" /></Arrow>
              </BuyBlock>
            </Row>
          )
        }
      </Media>
    )
  }
}

export default connect(
  state => ({
  }),
  { goToBuy }
)(Buttons);
