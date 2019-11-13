import React from 'react'

import FamilyDowntown from '../rental-files/FamilyDowntown'
import FamilyCity from '../rental-files/FamilyCity'
import SingleDowntown from '../rental-files/SingleDowntown'
import SingleCity from '../rental-files/SingleCity'

import '../../css/stay-page/Stay.css'

const Stay = () => {
  return (
    <div className="app">
      <div className="transbox">
        <p className="page-title">
          Stay in Walla Walla
        </p>
      </div>
      <p className="body-text-large">
        We are excited for you to visit one of our favorite towns!<br/>
      </p>
      <p className="body-text-medium">
        Below are a few places we would recommend checking out for your stay.<br/>
        Space is <b>limited</b>.<br/>
        We recommend booking ahead of time.
      </p>
      <p className="body-text-small">
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
