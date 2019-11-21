import React from 'react';
import Note from './Note';
import styled from 'styled-components';
import { fontTitle, customBlack } from './Variables';

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  align-items: stretch;
`;

const FeedTitle = styled.h2`
  font-family: ${fontTitle};
  color: ${customBlack};
  text-transform: uppercase;
  font-size: 0.9rem;
  margin-top: 35px;
  padding-left: 15px;
`;

const NotesFeed = ({title, notes}) => {
  
  let noteList = notes.map(note => {
    return <Note key={note.id} note={note} />
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