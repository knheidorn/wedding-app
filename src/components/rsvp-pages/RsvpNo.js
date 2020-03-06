import React from 'react';
import winkSmile from '../../images/rsvp-page/wink_smile.png';
import missYou from '../../images/rsvp-page/miss-you.png';

const RsvpNo = () => {
  return(
    <div>
      <div>
        <img src={missYou}
          alt="Miss you!"
          id="rsvp-no"
        />
      </div>
      <div class="body-text-large">
        <p>Probably not as much as you'll miss us.
          <br/><i class="body-text-medium">We're pretty awesome.</i>
        </p>
      </div>
      <img class="smile-face" src={winkSmile} alt="Winky Smiley Face"/>
    </div>
  )
}

export default RsvpNo;
