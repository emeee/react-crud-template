import React, { Component } from 'react';
import Login from '../components/LoginForm'
import Page from '../components/Page'
import ErrorBar from '../components/ErrorBar'
import { login } from '../services/auth'
import { withRouter } from "react-router-dom";

class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: {
        open: false
      }
    }
  }

  handleError = (e) => {
    this.setState({ error: {
      open: true,
      message: 'Invalid credentials'
    }})
  };

  handleLogin = (username, password) => {
    login(username, password)
        .then((res) => {
          this.props.history.push('/home');
        }).catch((e) => {
          this.handleError(e)
    });
  }

  render() {
    return (
        <Page title="Login" showMenu={false}>
          <Login onSubmit={this.handleLogin}/>
          <ErrorBar error={this.state.error} />
        </Page>
    );
  }

}

export default withRouter(LoginPage);
