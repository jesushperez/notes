import React from 'react';
import { Wrapper, BackLink, PinButton, NoteTitle, NoteContent, SaveButton } from './PageStyles/NotePageStyles';

const NotePage = ({note, togglePinned}) => {
  let pinLabel = note.isPinned ? 'Unpin Note' : 'Pin Note';
  
  
  return(
    <Wrapper>
      <BackLink className="note-page__back-btn" to="/">back</BackLink>

      <PinButton onClick={togglePinned}>{ pinLabel }</PinButton>

      <NoteTitle 
        wrap="soft" 
        defaultValue={note.title}
      ></NoteTitle>

      <NoteContent
        wrap="soft"
        defaultValue={note.content}
      ></NoteContent>

      <SaveButton 
        className="note-page__save-btn"
        data-id={note.id}
      >Save</SaveButton>

    </Wrapper>
  );
}

export default NotePage;