import React from 'react';
import { secondary } from './Variables';
import { Wrapper, Title, Content, ButtonsWrapper, ViewButton, DeleteButton } from './PageStyles/NoteStyles';

const Note = ({note, deleteNote}) => {

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
          data-id={note.id}
          onClick={deleteNote}
          btnColor={secondary} 
          flexGrow='1' 
          tabIndex={0}>X</DeleteButton>
      </ButtonsWrapper>
    </Wrapper>
  );
}

export default Note;