import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Topbar from './Topbar';
import LeftCard from './LeftCard';
import FeedCard from './FeedCard';
import RightCard from './RightCard';
import './App.css';
class App extends Component {

  render() {
    return (
      <div className="App">
      <MuiThemeProvider>
      <Topbar />
      <LeftCard/>
      <FeedCard/>
      <RightCard/>
     </MuiThemeProvider>
      </div>
    );
  }
}
export default App;
