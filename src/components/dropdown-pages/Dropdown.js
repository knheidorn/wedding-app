import React from 'react'
import { NavLink } from 'react-router-dom'

import '../../css/Dropdown.css'

const Dropdown = (props) => {
  const {
    showDropdown,
    closeDropdown
  } = props

  let dropdownClasses = "dropdown"

  if (showDropdown) {
    dropdownClasses = "dropdown open"
  }

  return (
    <nav className={ dropdownClasses }>
      <div>
        <ul>
          <NavLink
            className="dropdown-links"
            activeClassName="dropdown-links-active"
            exact to="/"
            onClick={ closeDropdown }
          >
            <li>
              HOME
            </li>
          </NavLink>
          <NavLink
            className="dropdown-links"
            activeClassName="dropdown-links-active"
            to="/rsvp"
            onClick={ closeDropdown }
          >
            <li>
              RSVP
            </li>
          </NavLink>
          <NavLink
            className="dropdown-links"
            activeClassName="dropdown-links-active"
            to="/day-of-details"
            onClick={ closeDropdown }
          >
            <li>
              ITINERARY
            </li>
          </NavLink>
          <NavLink
            className="dropdown-links"
            activeClassName="dropdown-links-active"
            to="/stay-walla"
            onClick={ closeDropdown }
          >
            <li>
              STAY
            </li>
          </NavLink>
          <NavLink
            className="dropdown-links"
            activeClassName="dropdown-links-active"
            to="/visit-walla"
            onClick={ closeDropdown }
          >
            <li>
              VISIT
            </li>
          </NavLink>
        </ul>
      </div>
    </nav>
  )
}

export default Dropdown;
