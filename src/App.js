import React from 'react';
import Box from '@material-ui/core/Box'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './components/Home'
import Venue from './components/Venue'
import Rsvp from './components/Rsvp'
import Address from './components/Address'
import About from './components/About'
import Visit from './components/Visit'
import Stay from './components/Stay'
import Toolbar from './components/Toolbar'
import Footer from './components/Footer'
import './App.css';
import foliage from './images/foliage.png'


const App = () => {
  return(
    <Router>
      <div>
        <header className="header-style">
          <Box>
            <img src={ foliage } alt="Foliage" className="banner-image"/>
          </Box>
          <Toolbar />
        </header>
      </div>
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
        <Route path="/visit-walla" component={ () =>
          <Visit />
        }/>
        <Route path="/stay-walla" component={ () =>
          <Stay />
        }/>
      </Switch>
      <div>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
