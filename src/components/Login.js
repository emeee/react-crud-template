import React, { Component } from 'react';
import { RaisedButton, TextField, Snackbar } from 'material-ui';
import { login } from '../services/auth'
import { withRouter } from "react-router-dom";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  handleLogin = () => {
    login(this.state.username, this.state.password)
      .then((res) => {
        this.props.history.push('/home');
      }).catch(() => {
        this.handleSnackError();
      });
  }

  handleSnackError = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
          <div className="login-container">
            <TextField
                name="username"
                hintText="Enter your Username"
                floatingLabelText="Username"
                onChange={this.handleChange}
            />
            <br/>
            <TextField
                name="password"
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange={this.handleChange}
            />
            <br/>
            <RaisedButton label="Submit" primary={true} onClick={() => this.handleLogin()} />
            <Snackbar
                open={this.state.open}
                message="Login Failed"
                autoHideDuration={4000}
                onRequestClose={this.handleSnackError}
            />
          </div>
    )
  }
}

export default withRouter(Login);