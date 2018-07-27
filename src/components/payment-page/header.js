import React, { Component } from 'react';
import styled  from 'styled-components';
console.log('here', styled)

const Container = styled.div`
  border: 1px solid black;
  height: 50px;
`;


class Header extends Component {
  render() {
    return (
      <Container>
        header
      </Container>
    )
  }
}

export default Header;
