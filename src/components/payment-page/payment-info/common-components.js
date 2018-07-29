import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.div`
  font-size: 24px;
  color: #000000;
`;

export const Row = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'space-between'};
`;

export const RowItem = styled.div`
  width: ${props => props.width || 50}%;
  ${props => props.isLastBlock ? 'padding-left: 10px;' : 'padding-right: 10px;'}
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
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
`;
