import React,{Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import './App.css';

class App extends Component {
  render(){
    return (
          <MuiThemeProvider>
            <div>
             <Navbar/>
             <Search/>
            </div>
          </MuiThemeProvider>
      );
  }
 
}

export default App;
