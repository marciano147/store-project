import React from 'react'
import './App.css';
import { HomePage } from './pages/homepages/homepage.component.jsx';
import {Switch, Route} from 'react-router-dom';

const Hatspage = () => (
  <div>
    <h1> Hats page </h1>
  </div>
);

function App() {
  return (
  <div>
    <Switch> 
      <Route exact path='/' component={HomePage} />
      <Route  path='/shop/hats' component={Hatspage} />
    </Switch>
  </div>
  );
}

export default App;
