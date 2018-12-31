import React, { Component } from 'react';
import './App.css';
import Login from './pages/Login'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/login" component={Login}/>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
