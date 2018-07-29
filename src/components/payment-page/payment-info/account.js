import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  changeEmail,
  checkEmail,
  changePassword,
  checkPassword
} from '../../../actions';

import { Container, Title, Row, RowItem, Input, Label, Error } from './common-components';

const Account = ({
  email,
  password,
  emailError,
  passwordError,
  changeEmail,
  changePassword,
  checkEmail,
  checkPassword
}) => (
  <Container>
    <Title>Create account</Title>
    <Row>
      <RowItem>
        <Input
          placeholder="Email address"
          value={email}
          onChange={(e) => changeEmail(e.target.value)}
          onBlur={checkEmail}
          validation={!emailError}
          isLight={true}
        />
        <Label>Email address</Label>
        {emailError && <Error>{emailError}</Error>}
      </RowItem>
      <RowItem isLastBlock={true}>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => changePassword(e.target.value)}
          onBlur={checkPassword}
          validation={!passwordError}
        />
        <Label>Password</Label>
        {passwordError && <Error>{passwordError}</Error>}
      </RowItem>
    </Row>
  </Container>
)

export default connect(
  state => ({
    email: state.parameters.email,
    emailError: state.parameters.emailError,
    password: state.parameters.password,
    passwordError: state.parameters.passwordError
  }),
  { changeEmail, checkEmail, changePassword, checkPassword }
)(Account);
