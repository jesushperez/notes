import React, { useState, useEffect } from 'react';
import {
   BrowserRouter as Router,
   Switch, Route
} from 'react-router-dom';
import HomePage from './components/HomePage';
import NotePage from './components/NotePage';
import NewNotePage from './components/NewNotePage';
import './base.css';
import shortid from 'shortid';
import noteService from './services/notes';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes);
      })
  }, []);

  const handleTitleChange = (e) => {
    setNewNote({...newNote, title: e.target.value});
  }

  const handleContentChange = (e) => {
    setNewNote({...newNote, content: e.target.value});
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const addNote = (e) => {
    e.preventDefault();
    if (newNote.title === undefined && newNote.content === undefined) {
      setNewNote('');
    } else {
      let today = new Date().toLocaleDateString();
      let noteObject = {id: shortid.generate(), "date": today, ...newNote, isPinned: false};
      noteService
        .create(noteObject)
        .then(returnedNotes => {
          setNotes(notes.concat(returnedNotes));
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

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      });
  }

  const updateNote = (e) => {
    e.preventDefault();
    let noteId = e.target.dataset.id;
    let oldNote = notes.find(note => note.id === noteId);
    let newTitle = newNote.title;
    if(newNote.title === undefined)
      newTitle = oldNote.title;
    let newContent = newNote.content;
    if(newNote.content === undefined)
      newContent = oldNote.content;
    let updatedNote = {
      id: oldNote.id, 
      date: oldNote.date,
      title: newTitle,
      content: newContent,
      isPinned: oldNote.isPinned};

    noteService
    .update(noteId, updatedNote)
    .then(returnedNote => {
      setNotes(notes.map(note => note.id !== noteId ? note : returnedNote))
    });
  }

  const deleteNote = (e) => {
    e.preventDefault();
    let noteId = e.target.dataset.id;

    noteService
      .remove(noteId)
      .then(setNotes(notes.filter(note => note.id !== noteId)))
  }

  const filteredNoteList = notes.filter(note => {
    let title = note.title;
    let content = note.content;
    if (title !== undefined)
      title = title.toLowerCase();
    if (content !== undefined)
      content = content.toLowerCase();
    let searchable = title + ' ' + content;

    let searched = searchTerm.toLowerCase();
    return searchable.includes(searched);
  });

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <HomePage notes={filteredNoteList} deleteNote={deleteNote} handleSearchChange={handleSearchChange} searchTerm={searchTerm} />} />
          <Route exact path="/notes/:id" render={({match}) => <NotePage note={noteById(match.params.id)} togglePinned={() => togglePinned(match.params.id)} onTitleChange={handleTitleChange} onContentChange={handleContentChange} updateNote={updateNote} />} />
          <Route exact path="/new-note" render={() => <NewNotePage onTitleChange={handleTitleChange} onContentChange={handleContentChange} onClick={addNote} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
