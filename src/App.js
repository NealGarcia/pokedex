import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Pokedex from './containers/Pokedex';
import AppNav from './components/AppNav';

function App(props) {
  return (
    <div>
      <Router>
        <AppNav/>
        <Route path='/' component = {Pokedex}/>
      </Router>
    </div>
  );
}

export default App;