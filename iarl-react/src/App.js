import React from 'react';
import {Route} from 'react-router-dom';
import LoginPage from './components/pages/login/LoginPage';

const App = () =>
  <div className="ui container">
  <Route path="/login" exact component={LoginPage} />
  </div>

export default App;
