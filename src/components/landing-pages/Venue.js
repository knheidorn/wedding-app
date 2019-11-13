import React from 'react'

const Venue = () => {
  return(
    <>
      <div className="transbox">
        <p className="page-title">
          Itinerary
        </p>
      </div>
      <div className="main-image-venue">
        <div className="transbox">
          <p className="day-of-title">
            June 20, 2020
          </p>
          <p className="body-text-large">
            Both the Ceremony and Reception
            <br/>will be held at Basel Cellars.
            <br/>More details to follow.
          </p>
          <p className="body-text-small">
            <strong>Basel Cellars</strong>
            <br/>2901 Old Milton Hwy
            <br/>Walla Walla, WA 99362
          </p>
          <p className="body-text-medium">
            Please check out the <i>Stay</i> and <i>Visit</i> tabs
            <br/> for places to stay and things to do in Walla Walla.
          </p>
        </div>
      </div>
    </>
  )
}
export default Venue;
