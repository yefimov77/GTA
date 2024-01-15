import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border-radius: 10px;
  max-height: 70px;
  width: 100%;
  text-align: center;
  font-size: 18px;
  border: none;
  background-color: ${props => props.disabled ? 'gray' : 'rgba(64, 135, 127, 1)'};
  color: ${props => props.disabled ? 'rgba(0, 0, 0, 0.45)' : ' rgba(7, 42, 38, 1)'};
  padding: 30px 0;

  &:hover {
    background-color: ${props => props.disabled ? 'gray' : 'white'}
  }
`