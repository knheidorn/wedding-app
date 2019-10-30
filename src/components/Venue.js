import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

const Venue = () => {
  return(
    <div className="main-image-venue">
      <div className="transbox">
        <p className="day-of-title">
          June 20, 2020
        </p>
        <p className="day-of-text-large">
          The Wedding Ceremony and Reception will be held at Basel Cellars.
          <br/>More details to follow.
        </p>
        <p className="day-of-text-small">
          <strong>Basel Cellars</strong>
          <br/>2901 Old Milton Hwy
          <br/>Walla Walla, WA 99362
        </p>
        <p className="day-of-text-medium">
          Please check out the <i>Stay</i> and <i>Visit</i> tab for
          places to stay and things to do in Walla Walla.
        </p>
      </div>
    </div>
  )
}
export default Venue;
