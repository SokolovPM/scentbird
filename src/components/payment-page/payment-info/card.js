import React, { Component } from 'react';
import styled  from 'styled-components';
import Media from "react-media";

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



          <Media query="(max-width: 320px)">
            {matches =>
              matches ? (
                <div>
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
                        onBlur={() => this.notEmptyValidate('code')}
                        validation={code.validation}
                        isLight={true}
                      />
                      <Label>Security code</Label>
                      {!code.validation && <Error>This field is required</Error>}
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
                      <CodeInput
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
                </div>
              )
            }
          </Media>

        </CardData>
      </Container>
    )
  }
}

export default Card;
