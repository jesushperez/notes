import React from 'react';
import style from 'styled-components';
import NotesFeed from './NotesFeed';
import PageTitle from './reusable/PageTitle';
import pinnedFilter from '../helper/pinnedFilter';
import { fontBody, primary } from './Variables';

const Home = ({notes}) => {

  const Menus = style.div`
    margin-top: 10px;
    margin-bottom: 50px;
  `;

  const NewNote = style.a`
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

  return(
    <div>
      <PageTitle>My Notes</PageTitle>
      <Menus>
        <NewNote>New Note</NewNote>
        <Search type="text" placeholder="&#x1F50D; Search a note" />
      </Menus>
      <NotesFeed title="Pinned Notes" notes={pinnedNotes} />
      <NotesFeed title="Other Notes" notes={otherNotes} />
    </div>
  );
}

export default Home;