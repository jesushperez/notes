import React from 'react';
import NotesFeed from './NotesFeed';
import PageTitle from './reusable/PageTitle';
import pinnedFilter from '../helper/pinnedFilter';
import { Menus, NewNote, Search } from './PageStyles/HomePageStyles';

const Home = ({notes, deleteNote, handleSearchChange, searchTerm}) => {

  let pinnedNotes = pinnedFilter(notes, true);
  let otherNotes = pinnedFilter(notes, false);
  let showPinned, showOthers;

  if(pinnedNotes.length === 0 && otherNotes.length === 0) {
    showPinned = '';
    showOthers = '';
  } else if (pinnedNotes.length === 0 && otherNotes.length > 0) {
    showPinned = '';
    showOthers = <NotesFeed 
                    title="Notes" 
                    notes={otherNotes} 
                    deleteNote={deleteNote} />;
  } else if (pinnedNotes.length > 0 && otherNotes.length === 0) {
    showPinned = <NotesFeed 
                    title="Pinned Notes" 
                    notes={pinnedNotes} 
                    deleteNote={deleteNote} />;
    showOthers = '';
  } else {
    showPinned = <NotesFeed 
                    title="Pinned Notes" 
                    notes={pinnedNotes} 
                    deleteNote={deleteNote} />;
    showOthers = <NotesFeed 
                    title="Other Notes" 
                    notes={otherNotes} 
                    deleteNote={deleteNote} />;
  }

  return(
    <div>
      <PageTitle>My Notes</PageTitle>
      <Menus>
        <NewNote to="/new-note">New Note</NewNote>
        <Search 
          type="text" 
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="&#x1F50D; Search a note" />
      </Menus>
      {showPinned}
      {showOthers}
    </div>
  );
}

export default Home;