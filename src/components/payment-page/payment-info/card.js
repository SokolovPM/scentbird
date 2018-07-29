import React, { Component } from 'react';
import styled  from 'styled-components';

import { Icon } from '../../icon';

import { Container, Title, Row, RowItem, Input, Label, Error } from './common-components';
import CustomSelect from './custom-select';

import { months, years } from './data-utils';

const CardData = styled.div`
  background-color: #FAFAFA;
  padding: 10px 30px 30px ;
  width: 100%;
  min-height: 100px;
  border: 1px solid #E6E6E6;
`;

const SecureMessage = styled.div`
  color: #299501;
  font-size: 14px;
`;

const Text = styled.span`
  margin-left: 10px;
  position: relative;
  bottom: 12px;
`;

const CardsWrapper = styled.div`
`;

const BlackQuestion = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #000000;
  border-radius: 3px;
  font-weight: 700;
  text-align: center;
  font-size: 16px;
  padding-bottom: 2px;
  line-height: 1;
  margin-top: 15px;
`;

const ExpirationTitle = styled.div`
  color: #9B9B9B;
  font-size: 18px;
  margin-left: 20px;
  padding-top: 14px;
`;

class Card extends Component {
  state = {
    number: {
      value: '',
      validation: true
    },
    code: {
      value: '',
      validation: true
    }
  }

  handleInput = (e, name) => {
    const field = this.state[name];
    field.value = e.target.value;
    this.setState({ [name]: field });
  }

  notEmptyValidate = (name) => {
    const field = this.state[name];
    field.validation = !!field.value;
    this.setState({ [name]: field });
  }

  render () {

    const { number, code } = this.state;

    return (
      <Container>
        <Title>Secure credit card payment</Title>
        <CardData>
          <Row>
            <SecureMessage>
              <Icon name="shield" />
              <Text>128-BIT ENCRYPTION. YOU’RE SAFE</Text>
            </SecureMessage>
            <CardsWrapper>
              <Icon name="cards" />
            </CardsWrapper>
          </Row>
          <Row>
            <RowItem width={70}>
              <Input
                placeholder="Credit card number"
                value={number.value}
                onChange={(e) => this.handleInput(e, 'number')}
                onBlur={() => this.notEmptyValidate('number')}
                validation={number.validation}
                isLight={true}
              />
              <Label>Credit card number</Label>
              {!number.validation && <Error>This field is required</Error>}
            </RowItem>
            <RowItem width={25}>
              <Input
                type="number"
                placeholder="Security code"
                value={code.value}
                onChange={(e) => this.handleInput(e, 'code')}
                onBlur={() => this.notEmptyValidate('code')}
                validation={code.validation}
                isLight={true}
              />
              <Label>Security code</Label>
              {!code.validation && <Error>This field is required</Error>}
            </RowItem>
            <RowItem width={5} isLastBlock={true}>
              <BlackQuestion>?</BlackQuestion>
            </RowItem>
          </Row>
          <Row>
            <RowItem width={25} style={{ paddingRight: '0', marginRight: '10px' }}>
              <CustomSelect options={months} iconName="selectArrowGrey" light={true} placeholder="Month" />
            </RowItem>
            <RowItem width={25} isLastBlock={true} style={{ paddingLeft: '0', marginLeft: '10px' }}>
              <CustomSelect options={years} iconName="selectArrowGrey" light={true} placeholder="Year" />
            </RowItem>
            <RowItem>
              <ExpirationTitle>Exp.</ExpirationTitle>
            </RowItem>
          </Row>
        </CardData>
      </Container>
    )
  }
}

export default Card;
