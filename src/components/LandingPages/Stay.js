import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import FamilyDowntown from '../Rentals/FamilyDowntown'
import FamilyCity from '../Rentals/FamilyCity'
import SingleDowntown from '../Rentals/SingleDowntown'
import SingleCity from '../Rentals/SingleCity'

const Stay = () => {
  return (
    <div className="app">
      <div className="transbox">
        <p className="stay-title">
          Stay in Walla Walla
        </p>
      </div>
      <p className="day-of-text-large">
        We are excited for you to visit one of our favorite towns!<br/>
      </p>
      <p className="day-of-text-medium">
        Below are a few places we would recommend checking out for your stay.<br/>
        Space is <b>limited</b>.<br/>
        We recommend booking ahead of time.
      </p>
      <p className="day-of-text-small">
        Although unlisted, all major hotel chains are also available.
      </p>
      <div className="transbox">
      <p className="scroll-title">
        Couples / Singles
      </p>
      <p className="secondary-title">
        Downtown
      </p>
        <SingleDowntown />
      <p className="secondary-title">
        City Limits
      </p>
        <SingleCity />
      <p className="scroll-title">
        Family Homes
      </p>
      <p className="secondary-title">
        Downtown
      </p>
        <FamilyDowntown />
      <p className="secondary-title">
        City Limits
      </p>
        <FamilyCity />
      </div>
    </div>
  )
}
export default Stay
