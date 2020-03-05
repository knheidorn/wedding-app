import React from 'react';
import Grid from '@material-ui/core/Grid';

const Saturday = () => {
  return(
    <Grid container spacing={2}>
    <Grid item xs={12} className="day-of-title">
      Saturday, June 20
    </Grid>
    <Grid item xs={12} className="body-text-large">
      Ceremony starts at 5pm
      <br/><i>Reception to immediately follow</i>
    </Grid>
    <Grid item xs={12} className="body-text-medium">
      Both will be held at Basel Cellars
    </Grid>
    <Grid item xs={12} className="body-text-small">
      <strong>Basel Cellars</strong>
      <br/>2901 Old Milton Hwy
      <br/>Walla Walla, WA 99362
    </Grid>
    </Grid>
  )
}
export default Saturday;
