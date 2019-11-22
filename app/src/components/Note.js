import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { primary, secondary, customWhite, fontBody } from './Variables';
import { Wrapper, Title, Content, ButtonsWrapper} from './PageStyles/NoteStyles';

const Note = ({note}) => {

  const StyledLink = styled(Link)`
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

const ViewButton = styled(Link)`
  color: ${customWhite};
  transition-duration: .3s;
  border: 2px solid ${primary};
  background-color: ${primary};
  flex-grow: 3;
  padding: 8px;
  text-align: center;
  text-decoration: none;
  margin-top: auto;
  font-family: ${fontBody};

  &:hover {
    cursor: pointer;
    color: ${primary};
    background-color: ${customWhite};
  }
`;

const DeleteButton = styled.a`
  color: ${customWhite};
  transition-duration: .3s;
  border: 2px solid ${secondary};
  background-color: ${secondary};
  flex-grow: ${1};
  padding: 8px;
  text-align: center;
  text-decoration: none;
  margin-top: auto;
  font-family: ${fontBody};

  &:hover {
    cursor: pointer;
    color: ${secondary};
    background-color: ${customWhite};
  }
`;

  // Truncates body content of long notes to keep note previews short
  let content = note.content;
  if (content !== undefined) {
    if(content.length > 100)
      content = content.substring(0, 99) + '...';
  }

  return (
    <Wrapper>
      <Title>{note.title}</Title>
      <Content>{content}</Content>
      <ButtonsWrapper>
        <ViewButton
          to={`/notes/${note.id}`} 
          tabIndex={0}>View</ViewButton>
        <DeleteButton 
          btnColor={secondary} 
          flexGrow='1' 
          tabIndex={0}>X</DeleteButton>
      </ButtonsWrapper>
    </Wrapper>
  );
}

export default Note;