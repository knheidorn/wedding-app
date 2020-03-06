import React from 'react';
import Grid from '@material-ui/core/Grid';

const Friday = () => {
  return(
    <Grid container spacing={0}>
      <Grid item xs={12} className="day-of-title">
        Friday, June 19
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <p className="body-text-large">
            <strong>Like Golf?</strong>
            <br/><i className="body-text-medium">Join Nich for a Par-Tee</i>
          </p>
          <p className="body-text-medium">
            Tee Times 12-1pm
            <br/><i className="body-text-small">
              RSVP knheidorn@gmail.com
            </i>
          </p>
          <p className="body-text-small">
            <strong>Veterans Golf Course</strong>
            <br/>201 E Rees Ave, Walla Walla
          </p>
        </Grid>
        <Grid item xs={6}>
          <p className="body-text-large">
            <strong>Have Little Ones?</strong>
            <br/><i className="body-text-medium">Join Kim for a Pool Party</i>
          </p>
          <p className="body-text-medium">
            Arrive anytime after 12pm
            <br/><i className="body-text-small">
              Crafts, Yard Games and Sun!
            </i>
          </p>
          <p className="body-text-small">
            <strong>Basel Cellars</strong>
            <br/>2901 Old Milton Hwy, Walla Walla
          </p>
        </Grid>
        <Grid item xs={12}>
          <p className="body-text-large">
            <strong>Welcome Dinner</strong>
            <br/><i className="body-text-medium">Music, Drinks & Food</i>
            <br/><b className="body-text-small">Hours 4-11pm</b>
          </p>
          <p className="body-text-small">
            <strong>Passatempo Taverna</strong>
            <br/>215 W Main St, Walla Walla
            <br/><i>Back Patio / Wine Bar</i>
          </p>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default Friday;
