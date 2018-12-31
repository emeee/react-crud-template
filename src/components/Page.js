import React, { Component } from 'react';
import { AppBar } from 'material-ui';

class Page extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
        <div className="page">
          <div className="header">
            <AppBar
                title={this.props.title}
                showMenuIconButton={this.props.showMenu}
            />
          </div>
          <div className="content">
            {this.props.children}
          </div>
          <div className="footer">

          </div>
        </div>
    );
  }
}

export default Page;
