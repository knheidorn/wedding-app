import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import FamilyDowntown from './FamilyDowntown'
import FamilyCity from './FamilyCity'
import SingleDowntown from './SingleDowntown'
import SingleCity from './SingleCity'

const Stay = () => {
  return (
    <div className="app">
      <p className="stay-title">
        Stay in Walla Walla
      </p>
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
      <p className="page-title">
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
      <p className="page-title">
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
