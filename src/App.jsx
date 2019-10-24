import React from 'react';
import './App.scss';

import { Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

const TestPage = () => (
  <div>
    <h1>Test Page</h1>
  </div>
);

function App() {
  return (
    <div className="app">
      <Route exact path='/' component={HomePage} />
      <Route path='/appetizer' component={TestPage} />
    </div>
  );
}

export default App;
