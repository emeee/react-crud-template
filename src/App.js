import React, { Component } from 'react';
import Login from './pages/Login'
import Home from './pages/Home'
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
            <Route path="/home" component={Home}/>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
