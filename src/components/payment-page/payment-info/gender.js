import React, { Component } from 'react';
import styled from 'styled-components';

import { Container, Title, Row, Input, Label } from './common-components';

import { Icon } from '../../icon';

const Text = styled.span`
  font-size: 24px;
  color: #000000;
`;

const Error = styled.div`
  text-align: center;
  color: red;
`;

const RowItem = styled.div`
  width: 50%;
  text-align: center;
`;

class Gender extends Component {
  state = {
    gender: ''
  }

  render() {
    return (
      <Container>
        <Title>Choose your subscription type</Title>
        <Row>
          <RowItem onClick={() => this.setState({ gender: 'woman' })}>
            <Icon name="woman" />
          </RowItem>
          <RowItem onClick={() => this.setState({ gender: 'man' })}>
            <Icon name="man" />
          </RowItem>
        </Row>
        <Row>
          <RowItem textAlign="center"><Text>For women</Text></RowItem>
          <RowItem isLastBlock={true} textAlign="center"><Text>For man</Text></RowItem>
        </Row>
        {!this.state.gender && <Error>Your gender is required</Error>}
      </Container>
    )
  }
}

export default Gender;
