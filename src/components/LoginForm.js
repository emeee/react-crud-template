import React, { Component } from 'react';
import { RaisedButton, TextField } from 'material-ui';

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleLogin = () => {
    this.props.onSubmit(this.state.username, this.state.password)
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
            <RaisedButton
                label="Submit"
                primary={true}
                onClick={this.handleLogin}
            />
          </div>
    )
  }
}

export default LoginForm;