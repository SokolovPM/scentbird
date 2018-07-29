import React, { Component } from 'react';
import styled  from 'styled-components';
import Media from "react-media";
import { connect } from 'react-redux';

import { Container, Title, Row, RowItem, Input, Label, Error } from './common-components';

import {
  changeFirstName,
  checkFirstName,
  changeLastName,
  checkLastName,
  changeStreetAddress,
  checkStreetAddress,
  changeApartment,
  changePostcode,
  checkPostcode,
  changeCountry,
  checkCountry,
  changePhone
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

const Address = ({
  firstName,
  firstNameError,
  changeFirstName,
  checkFirstName,
  lastName,
  lastNameError,
  changeLastName,
  checkLastName,
  streetAddress,
  streetAddressError,
  changeStreetAddress,
  checkStreetAddress,
  apartment,
  changeApartment,
  postcode,
  postcodeError,
  changePostcode,
  checkPostcode,
  country,
  countryError,
  changeCountry,
  checkCountry,
  phone,
  changePhone
}) => (
  <Container>
    <Title>Shipping address</Title>
    <Row>
      <RowItem>
        <Input
          placeholder="First name"
          value={firstName}
          onChange={(e) => changeFirstName(e.target.value)}
          onBlur={checkFirstName}
          validation={!firstNameError}
          isLight={true}
        />
        <Label>First name</Label>
        {firstNameError && <Error>{firstNameError}</Error>}
      </RowItem>
      <RowItem isLastBlock={true}>
        <Input
          placeholder="Last name"
          value={lastName}
          onChange={(e) => changeLastName(e.target.value)}
          onBlur={checkLastName}
          validation={!lastNameError}
        />
        <Label>Last name</Label>
        {lastNameError && <Error>{lastNameError}</Error>}
      </RowItem>
    </Row>
    <Row>
      <RowItem width={70}>
        <Input
          placeholder="Street address"
          value={streetAddress}
          onChange={(e) => changeStreetAddress(e.target.value)}
          onBlur={checkStreetAddress}
          validation={!streetAddressError}
        />
        <Label>Street address</Label>
        {streetAddressError && <Error>{streetAddressError}</Error>}
      </RowItem>
      <RowItem width={30} isLastBlock={true}>
        <Input
          placeholder="Apt/Suite (Optional)"
          value={apartment.value}
          onChange={(e) => changeApartment(e.target.value)}
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
          value={postcode}
          onChange={(e) => changePostcode(e.target.value)}
          onBlur={checkPostcode}
          validation={!postcodeError}
        />
        <Label>Postal code</Label>
        {postcodeError && <Error>{postcodeError}</Error>}
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
          value={country}
          onChange={(e) => changeCountry(e.target.value)}
          onBlur={checkCountry}
          validation={!countryError}
        />
        <Label>Country</Label>
        {countryError && <Error>{countryError}</Error>}
      </RowItem>
    </Row>
    <Row>
      <RowItem>
        <Input
          placeholder="Mobile number (Optional)"
          value={phone}
          onChange={(e) => changePhone(e.target.value)}
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

export default connect(
  state => ({
    firstName: state.parameters.firstName,
    firstNameError: state.parameters.firstNameError,
    lastName: state.parameters.lastName,
    lastNameError: state.parameters.lastNameError,
    streetAddress: state.parameters.streetAddress,
    streetAddressError: state.parameters.streetAddressError,
    apartment: state.parameters.apartment,
    postcode: state.parameters.postcode,
    postcodeError: state.parameters.postcodeError,
    country: state.parameters.country,
    countryError: state.parameters.countryError,
    phone: state.parameters.phone,

  }),
  {
    changeFirstName,
    checkFirstName,
    changeLastName,
    checkLastName,
    changeStreetAddress,
    checkStreetAddress,
    changeApartment,
    changePostcode,
    checkPostcode,
    changeCountry,
    checkCountry,
    changePhone
  }
)(Address);
