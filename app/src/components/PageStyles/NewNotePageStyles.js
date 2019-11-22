import styled from 'styled-components';
import { primary, fontBody } from '../Variables';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 15px;
`;

const BackLink = styled(Link)`
  color: #FFFFFF;
  padding: 8px;
  text-decoration: none;
  font-family: ${fontBody};
  background-color: ${primary};
  border-radius: 5px;
  border: 2px solid ${primary};
  margin-right: 5px;
  display: inline-block;
  box-shadow: 0 0 2px #aaaaaa;
  font-size: .9rem;
  transition-duration: .2s;

  &:hover {
    cursor: pointer;
    background-color: #FFFFFF;
    color: ${primary};
  }
`;

const InputTitle = styled.textarea`
  border: none;
  background-color: transparent;
  color: black;
  font-size: 2rem;
  background-color: none;
  display: block;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  margin-top: 50px;
  margin-bottom: 25px;
  resize: none;
  min-height: 2em;

  &:focus {
    outline: none;
  }
`;

const InputContent = styled.textarea`
  resize: none;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  color: black;
  background-color: transparent;
  border: none;
  font-weight: 300;
  line-height: 1.5;

  &:focus {
    outline: none;
  }
`;

const SaveButton = styled.button`
    color: #FFFFFF;
    padding: 8px;
    text-decoration: none;
    font-family: ${fontBody};
    background-color: ${primary};
    border-radius: 5px;
    border: 2px solid ${primary};
    margin-right: 5px;
    margin-top: 25px;
    display: inline-block;
    box-shadow: 0 0 2px #aaaaaa;
    font-size: .9rem;
    transition-duration: .2s;

    &:hover {
      cursor: pointer;
      background-color: #FFFFFF;
      color: ${primary};
    }
  `;

export { Wrapper, InputTitle, InputContent, BackLink, SaveButton };