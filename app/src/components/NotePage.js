import React from 'react';
import { Wrapper, BackLink, PinButton, NoteTitle, NoteContent, SaveButton } from './PageStyles/NotePageStyles';

const NotePage = ({note, togglePinned, onTitleChange, onContentChange, updateNote}) => {
  let pinLabel = note.isPinned ? 'Unpin Note' : 'Pin Note';
  
  return(
    <Wrapper>
      <BackLink className="note-page__back-btn" to="/">back</BackLink>

      <PinButton onClick={togglePinned}>{ pinLabel }</PinButton>

      <NoteTitle 
        wrap="soft" 
        defaultValue={note.title}
        onChange={onTitleChange}
      ></NoteTitle>

      <NoteContent
        wrap="soft"
        defaultValue={note.content}
        onChange={onContentChange}
      ></NoteContent>

      <SaveButton 
        data-id={note.id}
        onClick={updateNote}
      >Save</SaveButton>

    </Wrapper>
  );
}

export default NotePage;