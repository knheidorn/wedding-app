import React from 'react'
import engagement from '../../images/app-page/engagement.png'
import Box from '@material-ui/core/Box'

const Home = () => {
  return(
    <div className="app">
      <Box>
        <img src={ engagement } alt="Puppy engagement" className="main-image-home"/>
      </Box>
    </div>
  )
}

export default Home
