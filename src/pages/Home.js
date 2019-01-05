import React, { Component } from 'react';
import Page from '../components/Page'
import UsersTable from '../components/UsersTable'
import ErrorBar from '../components/ErrorBar'
import { getAllUsers } from '../services/auth'

class HomePage extends Component {

  constructor(props) {
   super(props);
   this.state = {
     users: [],
     actions: [],
     error: {
       open: false,
     }
   }
  }

  componentWillMount() {
    this.fetchData()
  }

  async fetchData() {
    try {
      const response = await getAllUsers();
      this.setState({
        users: response.data
      });
    } catch(e) {
      this.handleError(e);
    }
  }

  handleError = (e) => {
    this.setState({ error: {
      open: true
    }})
  };

  render() {
    return (
        <Page title="Home" showMenu={true}>
          <UsersTable users={this.state.users}/>
          <ErrorBar error={this.state.error} />
        </Page>
    );
  }
}

export default HomePage;
