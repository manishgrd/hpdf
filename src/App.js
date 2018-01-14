import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Topbar from './Topbar';
import Main from './Main';
import './App.css';
class App extends Component {

  render() {
    return (
      <div className="App">
      <MuiThemeProvider>
      <Topbar />
      <Main/>
     </MuiThemeProvider>
      </div>
    );
  }
}
export default App;
