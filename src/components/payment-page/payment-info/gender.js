import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import {
  changeGender
} from '../../../actions';

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

const IconItem = styled(RowItem)`
  ${props => props.selected ? 'border: 1px solid #FF408E;' : 'border: 1px solid transparent;' }
`;

const Gender = ({
  gender,
  changeGender,
  genderError
}) => (
  <Container>
    <Title>Choose your subscription type</Title>
    <Row>
      <IconItem onClick={() => changeGender('woman')} selected={gender === 'woman'}>
        <Icon name="woman" />
      </IconItem>
      <IconItem onClick={() => changeGender('man')} selected={gender === 'man'}>
        <Icon name="man" />
      </IconItem>
    </Row>
    <Row>
      <RowItem textAlign="center"><Text>For women</Text></RowItem>
      <RowItem isLastBlock={true} textAlign="center"><Text>For man</Text></RowItem>
    </Row>
    {genderError && <Error>{genderError}</Error>}
  </Container>
)

export default connect(
  state => ({
    gender: state.parameters.gender,
    genderError: state.parameters.genderError
  }),
  {
    changeGender
  }
)(Gender);
