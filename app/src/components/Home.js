import React from 'react';
import NotesFeed from './NotesFeed';
import pinnedFilter from '../helper/pinnedFilter';

const Home = ({notes}) => {

  let pinnedNotes = pinnedFilter(notes, 'true');
  let otherNotes = pinnedFilter(notes, 'false');

  return(
    <div>
      <h1>My Notes</h1>
      <NotesFeed title="Pinned Notes" notes={pinnedNotes} />
      <NotesFeed title="Other Notes" notes={otherNotes} />
    </div>
  );
}

export default Home;