import React, { Component } from 'react';
import styled  from 'styled-components';

const Container = styled.div`
  margin-bottom: 40px;
`;

const Title = styled.div`
  font-size: 24px;
  color: #000000;
`;

const Row = styled.div`
  display: flex;
  margin-top: 20px;
`;

const InputBlock = styled.div`
  width: 50%;
  padding-right: 20px;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  ${props => props.validation ? 'border: 1px solid #E6E6E6;' : 'border: 2px solid #FD6464; background-color: #FAFAFA;'}
  padding-left: 15px;
  color: #000000;
  font-size: 18px;

  & ~ label {
    visibility: hidden;
  }
  &:focus ~ label {
    visibility: visible;
  }

  ::placeholder {
    color: #9B9B9B;
    font-size: 18px;
    font-weight: 400;
  }

  ::required {
    background: red;
  }

  &:focus {
    outline: none !important;
    border: 1px solid #FF458F;
  }
`;

const Label = styled.label`
  position: absolute;
  top: -10px;
  left: 20px;
  padding: 0 10px;
  background: #ffffff;
  font-size: 14px;
  color: #9B9B9B;
  font-weight: 300;
`;

const Error = styled.div`
  color: #FF0000;
  font-size: 12px;
`;

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
          <InputBlock>
            <Input
              placeholder="Email address"
              value={email.value}
              onChange={this.handleEmail}
              onBlur={this.emailOnBlur}
              validation={email.validation}
            />
            <Label>Email address</Label>
            {!email.validation && <Error>Wrong email!</Error>}
          </InputBlock>
          <InputBlock>
            <Input
              type="password"
              placeholder="Password"
              value={password.value}
              onChange={this.handlePassword}
              onBlur={this.passwordOnBlur}
              validation={password.validation}
            />
            <Label>Password</Label>
            {!password.validation && <Error>Password should not be less than 10 symbols!</Error>}
          </InputBlock>
        </Row>
      </Container>
    )
  }
}

export default Account;
