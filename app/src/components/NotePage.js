import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import noteService from '../services/notes';
import { Wrapper, BackLink, PinButton, NoteTitle, NoteContent, SaveButton } from './PageStyles/NotePageStyles';

const NotePage = ({ togglePinned, onTitleChange, onContentChange, updateNote}) => {

  let { id } = useParams();
  const [ note, setNote ] = useState({});
  const [ pinStatus, setPinStatus ] = useState();
  
  useEffect(() => {
    noteService
      .getById(id)
      .then(returnedNote => {
        setNote(returnedNote);
        setPinStatus(returnedNote.isPinned)
      })
  }, [id]);
  
  let togglePin = () => {
    togglePinned(id);
    setPinStatus(!pinStatus);
  }

  let pinLabel = pinStatus ? 'Unpin Note' : 'Pin Note';
  
  return(
    <Wrapper>
      <BackLink className="note-page__back-btn" to="/">back</BackLink>

      <PinButton onClick={togglePin}>{ pinLabel }</PinButton>

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