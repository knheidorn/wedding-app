import React from 'react'
import yay from '../../images/rsvp-page/yay.png'

const RsvpYes = () => {
  return(
    <div>
      <p className="day-of-title">
        <img src={yay}
          alt="Yay!"
          id="rsvp-yes"
        />
        <br/>We are excited to see you!
      </p>
      <p className="body-text-large">
        Check out our Itinerary page for Wedding Weekend details.
      </p>
    </div>
  )
}

export default RsvpYes;
