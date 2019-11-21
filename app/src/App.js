import React, { useState } from 'react';
import {
   BrowserRouter as Router,
   Switch, Route
} from 'react-router-dom';
import HomePage from './components/HomePage';
import './base.css';

function App() {
  const [notes, setNotes] = useState([
    {
      id: "1",
      date: "May 11, 2018",
      title: "Note 1 title",
      content: "Note 1 content.",
      isPinned: true
    },
    {
      id: "2",
      date: "June 23, 2019",
      title: "Note 2 title",
      content: "Note 2 content.",
      isPinned: true
    },
    {
      id: "3",
      date: "December 13, 2019",
      title: "Note 3 title",
      content: "Note 3 content.",
      isPinned: false
    },
    {
      id: "4",
      date: "April 24, 2020",
      title: "Note Four Has a Long Title Than the Other Four",
      content: "Bacon ipsum dolor amet tongue capicola landjaeger pig, prosciutto shank bacon beef hamburger pastrami. Jowl biltong strip steak swine sausage capicola.",
      isPinned: true
    }
  ]);

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
