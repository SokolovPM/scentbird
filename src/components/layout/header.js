import React, { Component } from 'react';
import styled  from 'styled-components';
import Media from "react-media";

import { Icon } from '../icon';

const Container = styled.div`
  margin-bottom: 45px;

  @media only screen and (max-width: 320px) {
    text-align: center;
  }
`;

class Header extends Component {
  render() {
    return (
      <Container>
        <div>
          <Media query="(max-width: 320px)">
            {matches =>
              matches ? (
                <Icon name="logo320" />
              ) : (
                <Icon name="logo" />
              )
            }
          </Media>
        </div>
      </Container>
    )
  }
}

export default Header;
