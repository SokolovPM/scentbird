import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.div`
  font-size: 24px;
  color: #000000;

  @media only screen and (max-width: 320px) {
    font-size: 20px;
    text-align: center;
  }
`;

export const Row = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'space-between'};

  @media only screen and (max-width: 320px) {
    flex-wrap: wrap;
    margin-top: 0;
  }
`;

export const RowItem = styled.div`
  width: ${props => props.width || 50}%;
  ${props => props.isLastBlock ? 'padding-left: 10px;' : 'padding-right: 10px;'}
  position: relative;
  ${props => props.textAlign ? `text-align: ${props.textAlign};` : ''}

  @media only screen and (max-width: 320px) {
    min-width: 280px;

    padding-left: 0;
    padding-right: 0;
  }
`;

export const Input = styled.input`
  width: 100%;

  @media only screen and (max-width: 320px) {
    margin-bottom: 20px;
  }

  height: 50px;
  ${props => props.validation ? 'border: 1px solid #E6E6E6;' : 'border: 2px solid #FD6464;'}
  ${props => props.isLight ? '' : 'background-color: #FAFAFA;'}
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

export const Label = styled.label`
  position: absolute;
  top: -10px;
  left: 20px;
  padding: 0 10px;
  background: #ffffff;
  font-size: 14px;
  color: #9B9B9B;
  font-weight: 300;
`;

export const Error = styled.div`
  position: absolute;
  color: #FF0000;
  font-size: 12px;

  @media only screen and (max-width: 320px) {
    top: 50px;
  }
`;
