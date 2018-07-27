import React, { Component } from 'react';
import styled  from 'styled-components';

const Container = styled.div`
  border: 1px solid black;
  margin-bottom: 40px;
`;

class Address extends Component {
  render() {
    return (
      <Container>
        address information
      </Container>
    )
  }
}

export default Address;
