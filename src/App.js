import React from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar/Navbar';
import Home from './components/dasboard/Home';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import routes from './Routes';

function App() {
  return (
    <Router>
      <React.Fragment>
        <div className="App">
            <Navbar></Navbar>
            
            <Switch>
              { routes }
            </Switch>
            
      </div>
      </React.Fragment>
     
    </Router>
    
  );
}

export default App;
