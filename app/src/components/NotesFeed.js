import React from 'react';
import Note from './Note';

const NotesFeed = ({title, notes}) => {
  
  let noteList = notes.map(note => {
    return <Note key={note.id} note={note} />
  });

  return (
    <div>
      <h2>{title}</h2>
      {noteList}
    </div>
  );
}

export default NotesFeed;