import React from 'react'
import './App.css';
import { HomePage } from './pages/homepages/homepage.component.jsx';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
  <div>
    <Switch> 
      <Route exact path='/' component={HomePage} />
      <Route  path='/shop' component={ShopPage} />
    </Switch>
  </div>
  );
}

export default App;
