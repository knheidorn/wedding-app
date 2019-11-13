import React, { useState } from 'react';
import Box from '@material-ui/core/Box'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

import Home from './components/LandingPages/Home'
import Venue from './components/LandingPages/Venue'
import Rsvp from './components/LandingPages/Rsvp'
import Address from './components/LandingPages/Address'
import About from './components/LandingPages/About'
import Visit from './components/LandingPages/Visit'
import Stay from './components/LandingPages/Stay'
import Toolbar from './components/Dropdown/Toolbar'
import Dropdown from './components/Dropdown/Dropdown'
import Background from './components/Dropdown/Background'
import Footer from './components/Footer'
import foliage from './images/foliage.png'


const App = () => {

  let background
  const [dropdownOpen, setDropdown] = useState(false)

  const dropdownClickHandler = () => {
    setDropdown(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  const closeDropdown = () => {
    setDropdown(false)
  }

  if (dropdownOpen) {
   background = <Background
                  closeDropdown={ closeDropdown }
                />
  }

  return(
    <Router>
      <div>
        <header className="header-style">
          <Box>
            <img src={ foliage } alt="Foliage" className="banner-image"/>
          </Box>
          <Toolbar
            dropdownToggle={ dropdownClickHandler }
          />
          <Dropdown
            showDropdown={ dropdownOpen }
            closeDropdown={ closeDropdown }
          />
        </header>
        { background }
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
