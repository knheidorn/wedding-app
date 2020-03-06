import React, { Component } from 'react'
import Friday from './Friday'
import Saturday from './Saturday'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import friday from '../../images/venue-page/friday.png'
import saturday from '../../images/venue-page/saturday.png'
import leftArrow from '../../images/venue-page/left-arrow.png'
import rightArrow from '../../images/venue-page/right-arrow.png'

class Venue extends Component {
  constructor() {
    super()
    this.state = {
      fridayOpen: false,
      saturdayOpen: false,
      backButton: false
    }
  }

  goBack = () => {
    this.setState({
      fridayOpen: false,
      saturdayOpen: false,
      backButton: false
    })
  }

  openFriday = () => {
    this.setState({
      fridayOpen: true,
      backButton: true
    })
  }

  openSaturday = () => {
    this.setState({
      saturdayOpen: true,
      backButton: true
    })
  }

  render() {
    let friToggle;
    let satToggle;
    let {
      fridayOpen,
      saturdayOpen,
      backButton
    } = this.state

    if (fridayOpen && backButton) {
      friToggle = <Friday/>
      satToggle = <Button
                    onClick={this.goBack}
                  >
                    <img src={rightArrow}
                      alt="Back"
                      className="venue-arrow-right"
                    />
                  </Button>
    } else if (saturdayOpen && backButton) {
      satToggle = <Saturday/>
      friToggle = <Button
                    onClick={this.goBack}
                  >
                    <img src={leftArrow}
                      alt="Back"
                      className="venue-arrow"
                    />
                  </Button>
    } else {
      friToggle = <Button
                    onClick={this.openFriday}
                  >
                    <img src={friday}
                      alt="Friday"
                      className="venue-arrow"
                    />
                  </Button>
      satToggle = <Button
                    onClick={this.openSaturday}
                  >
                    <img src={saturday}
                      alt="Saturday"
                      className="venue-arrow"
                    />
                  </Button>
    }

    return(
      <>
        <div className="transbox">
          <p className="page-title">
            Itinerary
          </p>
        </div>
        <div className="main-image-venue">
          <div className="transbox-venue">
            <div className="day-button">
              <Grid container spacing={0}>
                <Grid item xs={6}>
                  {friToggle}
                </Grid>
                <Grid item xs={6}>
                  {satToggle}
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default Venue;
