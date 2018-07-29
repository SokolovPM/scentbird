import React, { Component } from 'react';
import styled from 'styled-components';

import { Icon } from '../../icon';

const Container = styled.div`
  height: 50px;
  @media only screen and (max-width: 320px) {
    margin-bottom: 20px;
  }
`;

const Control = styled.div`
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${props => props.isLight ? '#FFFFFF' : '#FAFAFA'};
  padding: 0;
  color: #000000;
  font-size: 18px;
  border: 1px solid #E6E6E6;
`;

const Label = styled.div`
  height: 50px;
  padding-top: 12px;
  padding-left: 15px;
  cursor: pointer;

  &:hover > div {
    visibility: visible;
  }

  & div {
    top: 50px;
    left: 0;
  }

  & div {
    position: absolute;
    z-index: 10;
    background-color: #FAFAFA;
    transition: opacity 0.5s;
  }
`;

const List = styled.ul`
  height: 100%;
  margin: 0;
  list-style:none;
  max-height: 150px;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #FAFAFA;
  padding: 0;
  color: #000000;
  font-size: 18px;
  border: 1px solid #E6E6E6;
`;

const ListItem = styled.li`
  height: 50px;
  padding-top: 12px;
  padding-left: 15px;

  &:hover {
    background-color: #ffffff;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  visibility: hidden;
  &:hover {
    visibility: visible;
  }
`;

const ArrowDown = styled.span`
  position: absolute;
  top: 10px;
  right: 15px;
`;

const Value = styled.span`
  color: ${props => props.isPlaceholder ? '#9B9B9B' : '#000000'};
`;

class CustomSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: this.props.placeholder || this.props.options[0]
    }
  }

  handleChange = (code) => {
    const options = this.props.options;
    const selectedOption = options.find(option => option.code === code);
    this.setState({ selectedOption });
  }

  render () {
    const options = this.props.options;
    const selectedOption = this.state.selectedOption;
    return (
      <Container>
        <Control isLight={this.props.light}>
          <Label>
            <Value isPlaceholder={!selectedOption.name}>{selectedOption.name || selectedOption}</Value>
            <ArrowDown>
              <Icon name={this.props.iconName || 'arrowDown'} />
            </ArrowDown>
            <Wrapper>
              <List>
                {options.map(option => (
                  <ListItem
                    key={option.code}
                    onClick={() => this.handleChange(option.code)}
                  >
                    {option.name}
                  </ListItem>
                ))}
              </List>
            </Wrapper>
          </Label>
        </Control>
      </Container>
    )
  }
}

export default CustomSelect;
