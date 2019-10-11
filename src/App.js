import React from 'react';
import { Box } from '@material-ui/core'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './components/Home'
import Venue from './components/Venue'
import Rsvp from './components/Rsvp'
import Address from './components/Address'
import About from './components/About'
import Toolbar from './components/Toolbar'
import './App.css';
import foliage from './images/foliage.png'


const App = () => {

  return(
    <Router>
      <header className="header-style">
        <Box>
          <img src={ foliage } alt="Foliage" className="banner-image"/>
        </Box>
        <Toolbar />
      </header>
      <Switch>
        <Route exact path="/" component={ () =>
          <Home />
        }/>
        <Route path="/day-of-details" component={ () =>
          <Venue />
        }/>
        <Route path="/rsvp" component={ () =>
          <Rsvp />
        }/>
        <Route path="/save-the-date" component={ () =>
          <Address />
        }/>
        <Route path="/about-us" component={ () =>
          <About />
        }/>
      </Switch>
    </Router>
  );
}

export default App;
