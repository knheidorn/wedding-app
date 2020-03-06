import React, { useState } from 'react';
import Box from '@material-ui/core/Box'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

import Home from './components/landing-pages/Home'
import Venue from './components/landing-pages/Venue'
import Rsvp from './components/landing-pages/Rsvp'
import Address from './components/landing-pages/Address'
import About from './components/landing-pages/About'
import Visit from './components/landing-pages/Visit'
import Stay from './components/landing-pages/Stay'
import Toolbar from './components/dropdown-pages/Toolbar'
import Dropdown from './components/dropdown-pages/Dropdown'
import Background from './components/dropdown-pages/Background'
import Footer from './components/Footer'
import foliage from './images/app-page/foliage.png'


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
