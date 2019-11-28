import React from 'react';
import Note from './Note';
import { FeedTitle, ListWrapper } from './PageStyles/NotesFeedStyles';

const NotesFeed = ({title, notes, deleteNote }) => {
  
  let noteList = notes.map(note => {
    return <Note key={note.id} note={note} deleteNote={deleteNote} />
  });

  return (
    <div>
      <FeedTitle>{title}</FeedTitle>
      <ListWrapper>
        {noteList}
      </ListWrapper>
    </div>
  );
}

export default NotesFeed;