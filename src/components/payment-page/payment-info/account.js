import React, { Component } from 'react';
import styled  from 'styled-components';

import { Container, Title, Row, RowItem, Input, Label, Error } from './common-components';

class Account extends Component {
  state = {
    email: {
      value: '',
      validation: true,
      required: true
    },

    password: {
      value: '',
      validation: true,
      required: true
    },
  }

  handleEmail = (e) => {
    const email = this.state.email;
    email.value = e.target.value;
    this.setState({ email })
  }

  handlePassword = (e) => {
    const password = this.state.password;
    password.value = e.target.value;
    this.setState({ password })
  }

  emailOnBlur = () => {
    const email = this.state.email;
    if (!email.value) {

    } else {
      this.emailValidation();
    }
  }

  passwordOnBlur = () => {
    const password = this.state.password;
    if (!password.value) {

    } else {
      this.passwordValidation();
    }
  }

  emailValidation = () => {
    const email = this.state.email;
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    email.validation = regex.test(email.value.toLowerCase());
    this.setState({ email })
  }

  passwordValidation = () => {
    const password = this.state.password;
    password.validation = password.value.length >= 10;
    this.setState({ password });
  }


  render() {
    const { email, password } = this.state;
    return (
      <Container>
        <Title>Create account</Title>
        <Row>
          <RowItem>
            <Input
              placeholder="Email address"
              value={email.value}
              onChange={this.handleEmail}
              onBlur={this.emailOnBlur}
              validation={email.validation}
              isLight={true}
            />
            <Label>Email address</Label>
            {!email.validation && <Error>Wrong email</Error>}
          </RowItem>
          <RowItem isLastBlock={true}>
            <Input
              type="password"
              placeholder="Password"
              value={password.value}
              onChange={this.handlePassword}
              onBlur={this.passwordOnBlur}
              validation={password.validation}
            />
            <Label>Password</Label>
            {!password.validation && <Error>Password should not be less than 10 symbols</Error>}
          </RowItem>
        </Row>
      </Container>
    )
  }
}

export default Account;
