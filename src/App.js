import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Pokedex from './containers/Pokedex';
import AppNav from './components/AppNav';
import PokemonDetails from './containers/PokemonDetails';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react';

function App(props) { 
  return (
    <div>
      <Provider store = {store}>
        <PersistGate loading = {null} persistor = { persistor }>
          <Router>
            <AppNav/>
            <Route exact path='/' component = {Pokedex}/>
            <Route exact path='/pokemon/:id' component = {PokemonDetails}/> 
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;