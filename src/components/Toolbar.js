import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Box from '@material-ui/core/Box'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import { spacing } from '@material-ui/system'

const Toolbar = () => {
  return(
    <Box>
      <Tabs centered>
        <Tab
          label="Home"
          component={ Link }
          to="/"
        />
        <Tab
          label="Our Story"
          component={ Link }
          to="/about-us"
        />
        <Tab
          label="Venue"
          component={ Link }
          to="/day-of-details"
        />
        <Tab
          label="Send Your Address"
          component={ Link }
          to="/save-the-date"
        />
      </Tabs>
    </Box>
  )
}

export default Toolbar;
