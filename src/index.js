import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import App from './App';
import axios from 'axios';

axios.defaults.baseURL = 'http://'+window.location.hostname+':9000';

const AppContainer = () => (
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
);

ReactDOM.render(<AppContainer/>, document.getElementById('root'));
