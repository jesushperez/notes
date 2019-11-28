import styled from 'styled-components';
import { primary, fontBody } from '../Variables';
import { Link } from 'react-router-dom';

const Menus = styled.div`
  margin-top: 10px;
  margin-bottom: 50px;
`;

const NewNote = styled(Link)`
  color: #FFFFFF;
  padding: 8px;
  text-decoration: none;
  font-family: ${fontBody};
  background-color: ${primary};
  border-radius: 5px;
  border: 2px solid ${primary};
  margin-left: 15px;
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

const Search = styled.input`
  padding:  8px;
  display: inline-block;

  @media screen and (min-width: 500px) {
    width: 100%;
    max-width: 300px;
  }
`;

export { Menus, NewNote, Search };