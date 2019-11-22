import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
   BrowserRouter as Router,
   Switch, Route
} from 'react-router-dom';
import HomePage from './components/HomePage';
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

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <HomePage notes={notes} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
