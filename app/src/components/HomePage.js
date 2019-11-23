import React from 'react';
import { Link } from 'react-router-dom';
import style from 'styled-components';
import NotesFeed from './NotesFeed';
import PageTitle from './reusable/PageTitle';
import pinnedFilter from '../helper/pinnedFilter';
import { fontBody, primary } from './Variables';

const Home = ({notes, deleteNote}) => {

  const Menus = style.div`
    margin-top: 10px;
    margin-bottom: 50px;
  `;

  const NewNote = style(Link)`
    color: #FFFFFF;
    padding: 8px;
    text-decoration: none;
    font-family: ${fontBody};
    background-color: ${primary};
    border-radius: 5px;
    border: 2px solid ${primary};
    margin-left: 15px;
    margin-right: 5px;
    display: inline-block;
    box-shadow: 0 0 2px #aaaaaa;
    font-size: .9rem;
    transition-duration: .2s;

    &:hover {
      cursor: pointer;
      background-color: #FFFFFF;
      color: ${primary};
    }
  `;

  const Search = style.input`
    padding:  8px;
    display: inline-block;

    @media screen and (min-width: 500px) {
      width: 100%;
      max-width: 300px;
    }
  `;

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
        <Search type="text" placeholder="&#x1F50D; Search a note" />
      </Menus>
      {showPinned}
      {showOthers}
    </div>
  );
}

export default Home;