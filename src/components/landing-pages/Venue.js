import React from 'react'
import Friday from './Friday'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Saturday from './Saturday'

const Venue = () => {
  return(
    <>
      <div className="transbox">
        <p className="page-title">
          Itinerary
        </p>
      </div>
      <div className="main-image-venue">
        <div className="transbox">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Paper><Friday/></Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper><Saturday/></Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  )
}
export default Venue;
