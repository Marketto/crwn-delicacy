import React from 'react';
import './App.scss';

import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';

import Header from './components/header/header.component';

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>  
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
