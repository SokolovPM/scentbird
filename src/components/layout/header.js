import React, { Component } from 'react';
import styled  from 'styled-components';

import { Icon } from '../icon';

const Container = styled.div`
  margin-bottom: 45px;
`;

class Header extends Component {
  render() {
    return (
      <Container>
        <div>
          <Icon name="logo" />
        </div>
      </Container>
    )
  }
}

export default Header;
