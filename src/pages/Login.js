import React, { Component } from 'react';
import Login from '../components/Login'
import Page from '../components/Page'

class LoginPage extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
        <Page title="Login" showMenu={false}>
          <Login />
        </Page>
    );
  }
}

export default LoginPage;
