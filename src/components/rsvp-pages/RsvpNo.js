import React from 'react';
import winkSmile from '../../images/rsvp-page/wink_smile.png'

const RsvpNo = () => {
  return(
    <div>
      <div class="day-of-title">
        <p>We Will Miss You!</p>
      </div>
      <div class="body-text-small">
        <p>But probably not as much as you'll miss us.</p>
        <p>We're pretty awesome.</p>
      </div>
      <img class="smile-face" src={winkSmile} alt="Winky Smiley Face"/>
    </div>
  )
}

export default RsvpNo;
