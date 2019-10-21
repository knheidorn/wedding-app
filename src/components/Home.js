import React from 'react'
import engagement from '../images/engagement.jpg'
import Box from '@material-ui/core/Box'

const Home = () => {
  return(
    <div className="app">
      <Box>
        <img src={ engagement } alt="Puppy engagement" className="main-image"/>
      </Box>
    </div>
  )
}

export default Home
