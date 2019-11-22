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

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const serverUrl = 'http://localhost:3001/notes';
    axios
      .get(serverUrl)
      .then(response => {
        setNotes(response.data);
      })
  }, []);

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

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <HomePage notes={notes} />} />
          <Route exact path="/notes/:id" render={({match}) => <NotePage note={noteById(match.params.id)} />} />
          <Route exact path="/new-note" render={() => <NewNotePage />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
