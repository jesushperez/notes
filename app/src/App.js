import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
   BrowserRouter as Router,
   Switch, Route
} from 'react-router-dom';
import HomePage from './components/HomePage';
import NotePage from './components/NotePage';
import NewNotePage from './components/NewNotePage';
import './base.css';
import shortid from 'shortid';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState([]);
  const serverUrl = 'http://localhost:3001/notes';

  useEffect(() => {
    axios
      .get(serverUrl)
      .then(response => {
        setNotes(response.data);
      })
  }, []);

  const handleTitleChange = (e) => {
    setNewNote({...newNote, title: e.target.value});
  }

  const handleContentChange = (e) => {
    setNewNote({...newNote, content: e.target.value});
  }

  const addNote = (e) => {
    e.preventDefault();
    if (newNote.title === undefined && newNote.content === undefined) {
      setNewNote('');
    } else {
      let today = new Date().toLocaleDateString();
      let noteObject = {id: shortid.generate(), "date": today, ...newNote, isPinned: false};
      axios
        .post(serverUrl, noteObject)
        .then(response => {
          console.log(response);
          setNotes(notes.concat(response.data));
          setNewNote('');
        })      
    }
  }

  const autoExpand = function(field) {
    field.style.height = 'inherit';

    let computed = window.getComputedStyle(field);

    let height = parseInt(computed.getPropertyValue('border-top-width', 10))
        + parseInt(computed.getPropertyValue('padding-top'), 10)
        + field.scrollHeight
        + parseInt(computed.getPropertyValue('padding-bottom'), 10)
        + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

    field.style.height = height + 'px';
  }

  document.addEventListener('input', function(event) {
    if (event.target.tagName.toLowerCase() !== 'textarea') return;
    autoExpand(event.target);
  }, false);

  const noteById = (id) =>
    notes.find(note => note.id.toString() === id.toString());

  const togglePinned = id => {
    let note = notes.find(note => note.id === id);
    let changedNote = {...note, isPinned: !note.isPinned};

    axios
      .put(`${serverUrl}/${id}`, changedNote)
      .then(response => {
        setNotes(notes.map(note => note.id !== id ? note : response.data))
      });
  }

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <HomePage notes={notes} />} />
          <Route exact path="/notes/:id" render={({match}) => <NotePage note={noteById(match.params.id)} togglePinned={() => togglePinned(match.params.id)} />} />
          <Route exact path="/new-note" render={() => <NewNotePage onTitleChange={handleTitleChange} onContentChange={handleContentChange} onClick={addNote} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
