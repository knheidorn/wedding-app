import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Box, Tab, Tabs } from '@material-ui/core'
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone'
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import MailTwoToneIcon from '@material-ui/icons/MailTwoTone';
import LocationOnTwoToneIcon from '@material-ui/icons/LocationOnTwoTone';
import { spacing } from '@material-ui/system'

const Toolbar = () => {
  return(
    <Box>
      <Tabs centered>
        <Tab icon={ <HomeTwoToneIcon /> }
          label="Home"
          component={ Link }
          to="/"
        />
        <Tab icon={ <FavoriteTwoToneIcon /> }
          label="Our Story"
          component={ Link }
          to="/about-us"
        />
        <Tab icon={ <LocationOnTwoToneIcon /> }
          label="Venue"
          component={ Link }
          to="/day-of-details"
        />
        <Tab icon={ <MailTwoToneIcon /> }
          label="Send Your Address"
          component={ Link }
          to="/save-the-date"
        />
      </Tabs>
    </Box>
  )
}

export default Toolbar;
