import React, { Component } from 'react';
import { Snackbar } from 'material-ui';

class ErrorBar extends Component {

  render() {
    return (
        <Snackbar
            open={this.props.error.open}
            message={this.props.error.message || 'Ups! something went wrong'}
            autoHideDuration={4000}
        />
    );
  }

}

export default ErrorBar;
