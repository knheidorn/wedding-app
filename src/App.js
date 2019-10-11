import React from 'react';
import { Box } from '@material-ui/core'
import { BrowserRouter as Switch, Router } from "react-router-dom";

import Toolbar from './components/Toolbar'
import './App.css';
import engagement from './images/engagement.jpg'
import foliage from './images/foliage.png'


const App = () => {
  return(
    <Router>
      <div className="app">
        <header className="header-style">
          <Box>
            <img src={ foliage } alt="Foliage" className="banner-image"/>
          </Box>
          <Toolbar />
        </header>
        <Box>
          <img src={ engagement } alt="Puppy engagement photo" className="main-image"/>
        </Box>
      </div>
    </Router>
  );
}

export default App;
