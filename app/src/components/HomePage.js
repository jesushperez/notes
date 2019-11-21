import React from 'react';
import NotesFeed from './NotesFeed';
import PageTitle from './reusable/PageTitle';
import pinnedFilter from '../helper/pinnedFilter';

const Home = ({notes}) => {

  let pinnedNotes = pinnedFilter(notes, true);
  let otherNotes = pinnedFilter(notes, false);

  return(
    <div>
      <PageTitle>My Notes</PageTitle>
      <NotesFeed title="Pinned Notes" notes={pinnedNotes} />
      <NotesFeed title="Other Notes" notes={otherNotes} />
    </div>
  );
}

export default Home;