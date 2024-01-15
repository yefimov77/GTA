import styled from 'styled-components';

const StyledButton = styled.button`
  
  color: ${props => props.disabled ? 'gray' : 'darkgray'};
  background-color:${props => props.disabled ? 'rgba(153, 153, 153, 1)' : 'rgba(0, 0, 0, 0.45)'};
  padding: 14px 25px;
  border-radius: 10px;
  border: ${props => props.disabled ? `1px solid gray` : '1px solid black'};
  text-align: center;
  font-size: 16px;
  width: 100%;
  max-height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: ${props => props.disabled ? 'rgba(153, 153, 153, 1)' : 'white'};
    color: ${props => props.disabled ? 'gray' : '#6CBFB6'} ;
  }
`

export const RulesBtn = styled(StyledButton)`
 &::before {
  content: '';
  background-image: url('/img/navigation/rules-logo.svg');
  height: 24px;
  width: 24px;
  display: inline-block;
  padding-right: 10px;
 }

 &:hover::before {
  background-image: url('/img/navigation/rules-hover-logo.svg');
 }
`

export const InputsBtn = styled(StyledButton)`
 &::before {
  content: '';
  background-image: url('/img/navigation/inputs-logo.svg');
  height: 24px;
  width: 24px;
  display: inline-block;
  
 }

 &:hover::before {
  background-image: ${props => props.disabled ? '' : 'url(/img/navigation/inputs-hover-logo.svg)'};
 }
`

export const ShopBtn = styled(StyledButton)`
 &::before {
  content: '';
  background-image: url('/img/navigation/shop-logo.svg');
  height: 24px;
  width: 24px;
  display: inline-block;
  
 }

 &:hover::before {
  background-image: ${props => props.disabled ? '' : 'url(/img/navigation/shop-hover-logo.svg)'};
 }
`

export const AnimationsBtn = styled(StyledButton)`
  & {
    padding-right: 10px;
  }

 &::before {
  content: '';
  background-image: url('/img/navigation/animations-logo.svg');
  height: 24px;
  width: 24px;
  display: inline-block;
 }

 &:hover::before {
  background-image: ${props => props.disabled ? '' : 'url(/img/navigation/animations-hover-logo.svg)'};
 }
`