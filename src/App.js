import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Pokedex from './containers/Pokedex';
import AppNav from './components/AppNav';
import PokemonDetails from './containers/PokemonDetails';

function App(props) { 
  return (
    <div>
      <Router>
        <AppNav/>
        <Route exact path='/' component = {Pokedex}/>
        <Route exact path='/pokemon/:id' component = {PokemonDetails}/> 
      </Router>
    </div>
  );
}

export default App;