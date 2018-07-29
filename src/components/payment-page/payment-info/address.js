import React, { Component } from 'react';
import styled  from 'styled-components';
import Media from "react-media";
import { connect } from 'react-redux';

import { Container, Title, Row, RowItem, Input, Label, Error } from './common-components';

import {
  changeFirstName,
  checkFirstName,
  changeLastName,
  checkLastName
} from '../../../actions';

import CustomSelect from './custom-select'
import PinkCheckbox from './pink-checkbox';

const Offer = styled.div`
  color: #000000;
  font-size: 14px;
  padding-top: 17px;
  padding-left: 10px;
`;

export const SelectItem = styled.div`
  width: 33%;
  ${props => props.isLastBlock ? 'padding-left: 10px;' : 'padding-right: 10px; padding-left: 10px;'}
  position: relative;

  @media only screen and (max-width: 320px) {
    min-width: 280px;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 20px;
  }
`;

const states = [
  {
    code: 'NY',
    name: 'NEW YORK'
  },
  {
    code: 'CA',
    name: 'CALIFORNIA'
  },
  {
    code: 'HW',
    name: 'HAWAII'
  },
  {
    code: 'AL',
    name: 'ALABAMA'
  }
]

class Address extends Component {
  state = {
    streetAddress: {
      value: '',
      validation: true
    },
    apartment: {
      value: ''
    },
    postcode: {
      value: '',
      validation: true,
      error: ''
    },
    phone: {
      value: ''
    },
    country: {
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

  postCodeValidation = () => {
    const postcode = this.state.postcode;
    if (!postcode.value) {
      postcode.validation = false;
      postcode.error = 'This field is required';
    } else if (postcode.value.length !== 6) {
      postcode.validation = false;
      postcode.error = 'The postal code must contain six digits';
    } else {
      postcode.validation = true;
      postcode.error = '';
    }
    this.setState({ postcode });
  }

  render() {
    const { streetAddress, apartment, postcode, phone, country } = this.state;
    console.log('render', this.props)
    return (
      <Container>
        <Title>Shipping address</Title>
        <Row>
          <RowItem>
            <Input
              placeholder="First name"
              value={this.props.firstName}
              onChange={(e) => this.props.changeFirstName(e.target.value)}
              onBlur={this.props.checkFirstName}
              validation={!this.props.firstNameError}
              isLight={true}
            />
            <Label>First name</Label>
            {this.props.firstNameError && <Error>{this.props.firstNameError}</Error>}
          </RowItem>
          <RowItem isLastBlock={true}>
            <Input
              placeholder="Last name"
              value={this.props.lastName}
              onChange={(e) => this.props.changeLastName(e.target.value)}
              onBlur={this.props.checkLastName}
              validation={!this.props.lastNameError}
            />
            <Label>Last name</Label>
            {this.props.lastNameError && <Error>{this.props.lastNameError}</Error>}
          </RowItem>
        </Row>
        <Row>
          <RowItem width={70}>
            <Input
              placeholder="Street address"
              value={streetAddress.value}
              onChange={(e) => this.handleInput(e, 'streetAddress')}
              onBlur={() => this.notEmptyValidate('streetAddress')}
              validation={streetAddress.validation}
            />
            <Label>Street address</Label>
            {!streetAddress.validation && <Error>This field is required</Error>}
          </RowItem>
          <RowItem width={30} isLastBlock={true}>
            <Input
              placeholder="Apt/Suite (Optional)"
              value={apartment.value}
              onChange={(e) => this.handleInput(e, 'apartment')}
              validation={true}
            />
            <Label>Apt/Suite</Label>
          </RowItem>
        </Row>
        <Row>
          <RowItem width={33}>
            <Input
              type="number"
              placeholder="Postal code"
              value={postcode.value}
              onChange={(e) => this.handleInput(e, 'postcode')}
              onBlur={this.postCodeValidation}
              validation={postcode.validation}
            />
            <Label>Postal code</Label>
            {!postcode.validation && <Error>{postcode.error}</Error>}
          </RowItem>
          <SelectItem>
            <CustomSelect options={states} />
          </SelectItem>
          <SelectItem isLastBlock={true}>
            <CustomSelect options={states} />
          </SelectItem>
        </Row>
        <Row>
          <RowItem width={100} style={{ padding: '0' }}>
            <Input
              placeholder="Country"
              value={country.value}
              onChange={(e) => this.handleInput(e, 'country')}
              onBlur={() => this.notEmptyValidate('country')}
              validation={country.validation}
            />
            <Label>Country</Label>
            {!country.validation && <Error>This field is required</Error>}
          </RowItem>
        </Row>
        <Row>
          <RowItem>
            <Input
              placeholder="Mobile number (Optional)"
              value={phone.value}
              onChange={(e) => this.handleInput(e, 'phone')}
              validation={true}
            />
            <Label>Mobile number</Label>
          </RowItem>
          <Media query="(max-width: 320px)">
            {matches =>
              matches ? (
                null
              ) : (
                <RowItem isLastBlock={true}>
                  <Offer>
                    We may send you special discounts and offers
                  </Offer>
                </RowItem>
              )
            }
          </Media>

        </Row>
        <Row>
          <PinkCheckbox text="Use this address as my billing address" id="billingAddress" />
        </Row>
      </Container>
    )
  }
}

export default connect(
  state => ({
    firstName: state.parameters.firstName,
    firstNameError: state.parameters.firstNameError,
    lastName: state.parameters.lastName,
    lastNameError: state.parameters.lastNameError,

  }),
  { changeFirstName, checkFirstName, changeLastName, checkLastName }
)(Address);
