import './App.css';
import React from 'react';
import {Router, Link} from '@reach/router';

import Home from './components/Home'
import Number from './components/Number'
import Colors from './components/Colors'

function App() {
  return (
    <div className="App">
      <div>
        <Link to = "/home">Home</Link>
      </div>
      <Router>
        <Home path="/home"/>
        <Number path="/:item"/>
        <Colors path="/:item/:font/:background"/>
      </Router>
    </div>
  );
}

export default App;
