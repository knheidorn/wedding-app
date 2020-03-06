import React from 'react'
import { Link } from "react-router-dom";
import ToggleButton from './ToggleButton'
import Box from '@material-ui/core/Box'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'

const Toolbar = (props) => {
  return(
    <>
      <div>
        <ToggleButton
          openDropdown={ props.dropdownToggle }
        />
      </div>
      <Box className="toolbar-items">
        <Tabs centered>
          <Tab
            label="Home"
            component={ Link }
            to="/"
            className="toolbar-tabs"
          />
          <Tab
            label="RSVP"
            component={ Link }
            to="/rsvp"
            className="toolbar-tabs"
          />
          <Tab
            label="Itinerary"
            component={ Link }
            to="/day-of-details"
            className="toolbar-tabs"
          />
          <Tab
            label="Stay"
            component={ Link }
            to="/stay-walla"
            className="toolbar-tabs"
          />
          <Tab
            label="Visit"
            component={ Link }
            to="/visit-walla"
            className="toolbar-tabs"
          />
        </Tabs>
      </Box>
    </>
  )
}

export default Toolbar;
