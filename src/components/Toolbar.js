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
          className="toolbar-tabs"
        />
        <Tab
          label="Send Your Address"
          component={ Link }
          to="/save-the-date"
          className="toolbar-tabs"
        />
        <Tab
          label="Our Story"
          component={ Link }
          to="/about-us"
          className="toolbar-tabs"
        />
        <Tab
          label="Itinerary"
          component={ Link }
          to="/day-of-details"
          className="toolbar-tabs"
        />
        <Tab
          label="Travel"
          component={ Link }
          to="/travel-walla"
          className="toolbar-tabs"
        />
      </Tabs>
    </Box>
  )
}

export default Toolbar;
