import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Pokedex from './components/Pokedex';

function App(props) {
  return (
    <div>
      <Router>
        <Route path='/' component = {Pokedex}/>
      </Router>
    </div>
  );
}

export default App;