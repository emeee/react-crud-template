import React, { Component } from 'react';
import Page from '../components/Page'

class HomePage extends Component {

  render() {
    return (
        <Page title="Home" showMenu={true}>
          <span>Hola :)</span>
        </Page>
    );
  }
}

export default HomePage;
