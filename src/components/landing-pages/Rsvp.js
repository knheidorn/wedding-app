import React, { Component } from 'react'
import RsvpDetail from '../form-components/RsvpDetail'

import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import SendIcon from '@material-ui/icons/Send';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

class Rsvp extends Component {

  constructor() {
    super()
    this.state = {
      isSubmitted: false,
      firstName: null,
      lastName: null,
      partFirstName: null,
      partLastName: null,
      isAttending: false,
      hasKids: false,
      rsvpDate: null,
      dietRestrict: null,
      kidCount: null,
      livesWith: false
    }
  }

  toggleCheck = (event) => {
    let status = event.target.checked
    let name = event.target.name

    this.setState({
      [name]: status
    })

    if(!status) {
      if (name === "hasKids") {
        this.setState({
          kidCount: null
        })
      } else if (name === "livesWith") {
        this.setState({
          partFirstName: null,
          partLastName: null,
        })
      } else {
        this.setState({
          kidCount: null,
          partFirstName: null,
          partLastName: null,
          rsvpDate: null,
          dietRestrict: null,
          livesWith: false,
          hasKids: false
        })
      }
    }
  }

  submitRSVP = () => {
    let {
      isAttending,
      dietRestrict,
      rsvpDate,
      kidCount,
      firstName,
      lastName,
      partFirstName,
      partLastName
    } = this.state

    let rsvp = {
      first_name: firstName,
      last_name: lastName,
      partner_first: partFirstName,
      partner_last: partLastName,
      rsvp_date: rsvpDate,
      diet_restrict: dietRestrict,
      attending: isAttending,
      kid_pool: kidCount,
    }

    let body = {rsvp: rsvp}

    let config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    }
    console.log(body)
    // fetch("https://guest-book-wein.herokuapp.com/rsvps", config)
    //   .then(response => response.json())
  }

   submitForm = () => {
    this.submitRSVP()
  }

  handleChange = (event) => {
    event.persist()
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    let {
      isAttending,
      dietRestrict,
      rsvpDate,
      kidCount,
      hasKids,
      firstName,
      lastName,
      partFirstName,
      partLastName,
      livesWith
    } = this.state

    return(
      <>
        <div className="transbox">
          <p className="page-title">
            RSVP
          </p>
        </div>
        <div className="main-image-rsvp">
          <div className="transbox">
            <div id="center-form">
            <FormControl>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    value={isAttending}
                    name="isAttending"
                    onChange={this.toggleCheck}
                  />}
                checked={isAttending}
                label="Attending?"
              />
              <TextField type="text"
                label="First Name"
                name="firstName"
                value={firstName || ""}
                onChange={this.handleChange}
                required
              />
              <TextField type="text"
                label="Last Name"
                name="lastName"
                value={lastName || ""}
                onChange={this.handleChange}
                required
              />
              {isAttending &&
                <>
                  <RsvpDetail
                    partFirstName={partFirstName}
                    partLastName={partLastName}
                    rsvpDate={rsvpDate}
                    dietRestrict={dietRestrict}
                    kidCount={kidCount}
                    hasKids={hasKids}
                    livesWith={livesWith}
                    toggleCheck={this.toggleCheck}
                    handleChange={this.handleChange}
                  />
                </>
              }
              <Button type="submit"
                aria-label="Send"
                className="submit-button"
                onClick={this.submitForm}
                endIcon={<SendIcon />}
              >
                Send RSVP
              </Button>
              </FormControl>
            </div>
          </div>
        </div>
      </>
    )
  }

}

export default Rsvp;
