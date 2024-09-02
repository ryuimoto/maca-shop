import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' expact Component={HomePage}/>
        <Route path='/about' Component={AboutPage}/>
      </Switch>
    </Router>
  );
}

export default App;
