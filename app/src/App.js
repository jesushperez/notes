import React from 'react';
import {
   BrowserRouter as Router,
   Switch, Route
} from 'react-router-dom';
import Home from './components/Home';
import './styles/base.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
