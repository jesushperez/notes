import React, { useState } from 'react';
import {
   BrowserRouter as Router,
   Switch, Route
} from 'react-router-dom';
import Home from './components/Home';

function App() {
  const [notes, setNotes] = useState([
    {
      id: "1",
      date: "May 11, 2018",
      title: "Note 1 title",
      content: "Note 1 content.",
      isPinned: "true"
    },
    {
      id: "2",
      date: "June 23, 2019",
      title: "Note 2 title",
      content: "Note 2 content.",
      isPinned: "true"
    },
    {
      id: "3",
      date: "December 13, 2019",
      title: "Note 3 title",
      content: "Note 3 content.",
      isPinned: "true"
    }
  ]);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home notes={notes} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
