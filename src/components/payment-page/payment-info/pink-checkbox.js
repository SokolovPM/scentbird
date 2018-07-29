import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  margin-bottom: 15px;

  & input {
    padding: 0;
    margin-bottom: 0;
    display: none;
    cursor: pointer;
  }

  & label {
    position: relative;
    cursor: pointer;
    font-size: 14px;
    color: #9B9B9B;
    font-weight: 400;
  }

  & label:before {
    content:'';
    -webkit-appearance: none;
    background-color: #ffffff ;
    border: 1px solid #FF458F;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 7px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 5px;
  }

  & input:checked + label:after {
    content: '';
    display: block;
    position: absolute;
    top: 4px;
    left: 5px;
    width: 6px;
    height: 11px;
    border: solid #ffffff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  & input:checked + label:before {
    background-color: #FF6BA6;
  }
`;



class PinkCheckbox extends Component {
  render() {
    return (
      <Wrapper>
        <input type="checkbox" id={this.props.id} />
        <label htmlFor={this.props.id}>{this.props.text}</label>
      </Wrapper>
    )
  }
}

export default PinkCheckbox;
