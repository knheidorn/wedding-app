import React, { Component } from 'react'
import RsvpForm from '../rsvp-pages/form-components/RsvpForm'
import RsvpYes from '../rsvp-pages/RsvpYes'
import RsvpNo from '../rsvp-pages/RsvpNo'

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
      livesWith: false,
      submitYes: false,
      submitNo: false
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
    fetch("https://guest-book-wein.herokuapp.com/rsvps", config)
      .then(response => response.json())
  }

  submitForm = () => {
    let {isAttending} = this.state

    this.submitRSVP()

    if(isAttending) {
      this.setState({submitYes: true})
    } else {
      this.setState({submitNo: true})
    }
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
      livesWith,
      submitYes,
      submitNo
    } = this.state

    let rsvpPage;

    if (submitYes) {
      rsvpPage = <RsvpYes/>
    } else if (submitNo) {
      rsvpPage = <RsvpNo/>
    } else {
      rsvpPage = <RsvpForm
                  isAttending = {isAttending}
                  dietRestrict = {dietRestrict}
                  rsvpDate = {rsvpDate}
                  kidCount = {kidCount}
                  hasKids = {hasKids}
                  firstName = {firstName}
                  lastName = {lastName}
                  partFirstName = {partFirstName}
                  partLastName = {partLastName}
                  livesWith = {livesWith}
                  submitYes = {submitYes}
                  submitNo = {submitNo}
                  toggleCheck = {this.toggleCheck}
                  handleChange = {this.handleChange}
                  submitForm = {this.submitForm}
                 />
    }

    return(
      <>
        <div className="transbox">
          <p className="page-title">
            RSVP
          </p>
        </div>
        <div className="main-image-rsvp">
          <div className="transbox">
            <div class="center-form">
              {rsvpPage}
            </div>
          </div>
        </div>
      </>
    )
  }

}

export default Rsvp;
