import React, { Component } from 'react';
import { RaisedButton, TextField, AppBar, Snackbar } from 'material-ui';
import axios from 'axios'

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false,
      username: '',
      password: '',
    }
  }

  login = () => {
    axios.post('/login', {
      username: this.state.username,
      password: this.state.password
    }).then((res) => {
      if(res.data.message === 'Success') {
        this.props.history.push('/home');
      }
    }).catch((err) => {
      this.handleSnackError();
    });
  }

  handleSnackError = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    return (
          <div className="login-container">
            <TextField
                hintText="Enter your Username"
                floatingLabelText="Username"
                onChange = {(event,newValue) => this.setState({username:newValue})}
            />
            <br/>
            <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange = {(event,newValue) => this.setState({password:newValue})}
            />
            <br/>
            <RaisedButton label="Submit" primary={true} onClick={this.login} />
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

export default Login