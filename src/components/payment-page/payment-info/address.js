import React, { Component } from 'react';
import styled  from 'styled-components';

import { Container, Title, Row, RowItem, Input, Label, Error } from './common-components';

const Offer = styled.div`
  color: #000000;
  font-size: 14px;
  padding-top: 17px;
  padding-left: 10px;
`;

class Address extends Component {
  state = {
    firstName: {
      value: '',
      validation: true
    },
    lastName: {
      value: '',
      validation: true
    },
    streetAddress: {
      value: '',
      validation: true
    },
    apartment: {
      value: ''
    },
    postcode: {
      value: '',
      validation: true
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

  render() {
    const { firstName, lastName, streetAddress, apartment, postcode, phone, country } = this.state;
    return (
      <Container>
        <Title>Shipping address</Title>
        <Row>
          <RowItem>
            <Input
              placeholder="First name"
              value={firstName.value}
              onChange={(e) => this.handleInput(e, 'firstName')}
              onBlur={() => this.notEmptyValidate('firstName')}
              validation={firstName.validation}
            />
            <Label>First name</Label>
            {!firstName.validation && <Error>This field is required</Error>}
          </RowItem>
          <RowItem isLastBlock={true}>
            <Input
              placeholder="Last name"
              value={lastName.value}
              onChange={(e) => this.handleInput(e, 'lastName')}
              onBlur={() => this.notEmptyValidate('lastName')}
              validation={lastName.validation}
            />
            <Label>Last name</Label>
            {!lastName.validation && <Error>This field is required</Error>}
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
              placeholder="Postcode"
              value={postcode.value}
              onChange={(e) => this.handleInput(e, 'postcode')}
              onBlur={() => this.notEmptyValidate('postcode')}
              validation={postcode.validation}
            />
            <Label>Postcode</Label>
            {!postcode.validation && <Error>This field is required</Error>}
          </RowItem>
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
          <RowItem isLastBlock={true}>
            <Offer>
              We may send you special discounts and offers
            </Offer>
          </RowItem>
        </Row>
      </Container>
    )
  }
}

export default Address;
