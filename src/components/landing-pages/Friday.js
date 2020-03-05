import React from 'react';
import Grid from '@material-ui/core/Grid';

const Friday = () => {
  return(
    <Grid container spacing={2}>
      <Grid item xs={12} className="day-of-title">
        Friday, June 19
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <p className="body-text-large">
            <strong>Like Golf?</strong>
          </p>
          <p className="body-text-large">
            <i>Join Nich for a Par-Tee</i>
          </p>
          <p className="body-text-medium">
            Tee Times 12-1pm
            <br/><i>RSVP knheidorn@gmail.com</i>
          </p>
          <p className="body-text-small">
            <strong>Veterans Golf Course</strong>
            <br/>201 E Rees Ave
            <br/>Walla Walla, WA 99362
          </p>
        </Grid>
        <Grid item xs={6}>
          <p className="body-text-large">
            <strong>Have Little Ones?</strong>
          </p>
          <p className="body-text-large">
            <i>Join Kim for a Pool Party</i>
          </p>
          <p className="body-text-medium">
            Arrive anytime after 12pm
          </p>
          <p className="body-text-small">
            Hang with the Bride at the Basel Cellars pool!
          </p>
          <p className="body-text-small">
            Fun crafty activities
            <br/>and yard games for all ages.
          </p>
        </Grid>
      </Grid>

    </Grid>
  )
}
export default Friday;
