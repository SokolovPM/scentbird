import React, { Component } from 'react';
import styled  from 'styled-components';
import Media from "react-media";
import { connect } from 'react-redux';

import {
  changeSecurityCode
} from '../../../actions';

import { Icon } from '../../icon';

import { Container, Title, Row, RowItem, Input, Label, Error } from './common-components';
import CustomSelect from './custom-select';

import { months, years } from './data-utils';

const CardData = styled.div`
  margin-top: 20px;
  background-color: #FAFAFA;
  padding: 10px 30px 30px ;
  width: 100%;
  min-height: 100px;
  border: 1px solid #E6E6E6;
  @media only screen and (max-width: 320px) {
    padding: 10px 20px 20px ;
    margin-left: -20px;
    width: 320px;
  }
`;

const SecureMessage = styled.div`
  color: #299501;
  font-size: 14px;
`;

const Text = styled.span`
  margin-left: 10px;
  position: relative;
  bottom: 12px;

  @media only screen and (max-width: 320px) {
    font-size: 12px;
  }
`;

const CodeInput = styled(Input)`
  @media only screen and (max-width: 320px) {
    width: 100%;
  }
`;

const CodeItem = styled(RowItem)`
  @media only screen and (max-width: 320px) {
    margin-right: 20px;
    width: 60%;
    min-width: 60%;
  }
`;

const QuestionItem = styled(RowItem)`
  @media only screen and (max-width: 320px) {
    min-width: 30px;
    width: 30px;
  }
`;

const SelectItem = styled(RowItem)`
  @media only screen and (max-width: 320px) {
    width: 130px;
    min-width: 130px;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
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

const cardRegexps = {
  mc: /^(?:5[1-5][0-9]{14})$/,
	vi: /^(?:4[0-9]{12}(?:[0-9]{3})?)$/,
	ax: /^(?:3[47][0-9]{13})$/
};

const CardIcon = styled.div`
  margin-left: 10px;
  ${props => props.selected && 'border-top: 1px solid #FF408E;'}
  cursor: pointer;
`;

const CodeError = styled.div`
  border: 2px solid #ff0000;
  font-size: 18px;
  padding: 30px;
  text-align: center;
  color: #ff0000;
  margin-top: 30px;
`;

class Card extends Component {
  state = {
    number: {
      value: '',
      validation: true,
      error: ''
    },
    code: {
      value: '',
      validation: true
    },
    cardType: 'vi',
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

  cardNumberValidation = () => {
    const { number, cardType } = this.state;
    if (!number.value) {
      number.validation = false;
      number.error = 'This field is required';
    } else {
      const result = cardRegexps[cardType].test(number.value.trim());
      number.validation = result;
      number.error = result ? '' : 'Wrong card number format'
    }
    this.setState({ number });
  }

  changeCardType = (cardType) => {
    this.setState({ cardType }, this.cardNumberValidation);
  }

  codeValidation = () => {
    const code = this.state.code;
    if (!code.value) {
      code.validation = false;
      code.error = 'This field is required';
    } else if (code.value.length !== 3) {
      code.validation = false;
      code.error = 'Wrong security code format';
    } else {
      code.validation = true;
      code.error = '';
      this.props.changeSecurityCode(code.value)
    }
    this.setState({ code });
  }

  render () {
    const { number, code } = this.state;
    return (
      <Container>
        <Title>Secure credit card payment</Title>
        <CardData error={this.props.securityCodeError}>
          <Row>
            <SecureMessage>
              <Icon name="shield" />
              <Text>128-BIT ENCRYPTION. YOU’RE SAFE</Text>
            </SecureMessage>
            <CardsWrapper>
              <CardIcon onClick={() => this.changeCardType('vi')} selected={this.state.cardType === 'vi'}>
                <Icon name="visa" />
              </CardIcon>
              <CardIcon onClick={() => this.changeCardType('mc')} selected={this.state.cardType === 'mc'}>
                <Icon name="mastercard" />
              </CardIcon>
              <CardIcon onClick={() => this.changeCardType('ax')} selected={this.state.cardType === 'ax'}>
                <Icon name="express" />
              </CardIcon>
            </CardsWrapper>
          </Row>
          <Media query="(max-width: 320px)">
            {matches =>
              matches ? (
                <div>
                  <Row>
                    <RowItem width={70}>
                      <Input
                        type="number"
                        placeholder="Credit card number"
                        value={number.value}
                        onChange={(e) => this.handleInput(e, 'number')}
                        onBlur={this.cardNumberValidation}
                        validation={number.validation}
                        isLight={true}
                      />
                      <Label>Credit card number</Label>
                      {!number.validation && <Error>{number.error}</Error>}
                    </RowItem>
                  </Row>
                  <Row>
                    <SelectItem>
                      <CustomSelect options={months} iconName="selectArrowGrey" light={true} placeholder="Month" />
                    </SelectItem>
                    <SelectItem>
                      <CustomSelect options={years} iconName="selectArrowGrey" light={true} placeholder="Year" />
                    </SelectItem>
                  </Row>
                  <Row style={{ justifyContent: 'flex-start' }}>
                    <CodeItem>
                      <CodeInput
                        type="number"
                        placeholder="Security code"
                        value={code.value}
                        onChange={(e) => this.handleInput(e, 'code')}
                        onBlur={this.codeValidation }
                        validation={code.validation}
                        isLight={true}
                      />
                      <Label>Security code</Label>
                      {!code.validation && <Error>{code.error}</Error>}
                    </CodeItem>
                    <QuestionItem>
                      <BlackQuestion>?</BlackQuestion>
                    </QuestionItem>
                  </Row>
                </div>
              ) : (
                <div>
                  <Row>
                    <RowItem width={70}>
                      <Input
                        type="number"
                        placeholder="Credit card number"
                        value={number.value}
                        onChange={(e) => this.handleInput(e, 'number')}
                        onBlur={this.cardNumberValidation}
                        validation={number.validation}
                        isLight={true}
                      />
                      <Label>Credit card number</Label>
                      {!number.validation && <Error>{number.error}</Error>}
                    </RowItem>
                    <RowItem width={25}>
                      <CodeInput
                        type="number"
                        placeholder="Security code"
                        value={code.value}
                        onChange={(e) => this.handleInput(e, 'code')}
                        onBlur={this.codeValidation}
                        validation={code.validation}
                        isLight={true}
                      />
                      <Label>Security code</Label>
                      {!code.validation && <Error>{code.error}</Error>}
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
                </div>
              )
            }
          </Media>
        </CardData>
        {this.props.securityCodeError && <CodeError>ERROR! CURRENT SECURITY CODE IS NOT AVAILABLE</CodeError>}
      </Container>
    )
  }
}

export default connect(
  state => ({
    securityCodeError: state.parameters.securityCodeError
  }),
  { changeSecurityCode }
)(Card);
