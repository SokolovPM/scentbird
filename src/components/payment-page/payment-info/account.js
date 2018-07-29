import React, { Component } from 'react';
import styled  from 'styled-components';

import { Container, Title, Row, RowItem, Input, Label, Error } from './common-components';

class Account extends Component {
  state = {
    email: {
      value: '',
      validation: true,
      error: ''
    },

    password: {
      value: '',
      validation: true,
      error: ''
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

  emailValidation = () => {
    const email = this.state.email;
    if (!email.value) {
      email.validation = false;
      email.error = 'This field is required';
      this.setState({ validation: false, });
      return;
    }
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(email.value.toLowerCase())) {
      email.validation = true;
      email.error = '';
    } else {
      email.validation = false;
      email.error = 'Wrong email format';
    }
    this.setState({ email });
  }

  passwordValidation = () => {
    const password = this.state.password;
    if (!password.value) {
      password.validation = false;
      password.error = 'This field is required';
    } else if (password.value.length < 10) {
      password.validation = false;
      password.error = 'Password should not be less than 10 symbols';
    } else {
      password.validation = true;
      password.error = '';
    }
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
              onBlur={this.emailValidation}
              validation={email.validation}
              isLight={true}
            />
            <Label>Email address</Label>
            {!email.validation && <Error>{email.error}</Error>}
          </RowItem>
          <RowItem isLastBlock={true}>
            <Input
              type="password"
              placeholder="Password"
              value={password.value}
              onChange={this.handlePassword}
              onBlur={this.passwordValidation}
              validation={password.validation}
            />
            <Label>Password</Label>
            {!password.validation && <Error>{password.error}</Error>}
          </RowItem>
        </Row>
      </Container>
    )
  }
}

export default Account;
