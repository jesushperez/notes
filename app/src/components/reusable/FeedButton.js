import styled from 'styled-components';
import { customWhite, fontBody } from '../Variables';

const Button = styled.a`
  color: ${customWhite};
  transition-duration: .3s;
  border: 2px solid ${props => props.btnColor};
  background-color: ${props => props.btnColor};
  flex-grow: ${props => props.flexGrow};
  padding: 8px;
  text-align: center;
  text-decoration: none;
  margin-top: auto;
  font-family: ${fontBody};

  &:hover {
    cursor: pointer;
    color: ${props => props.btnColor};
    background-color: ${customWhite};
  }
`;

export default Button;