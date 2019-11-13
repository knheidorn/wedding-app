import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import hands from '../images/proof3.jpg'

import './Dropdown.css';

const Dropdown = (props) => {
  const {
    showDropdown,
    closeDropdown
  } = props

  let dropdownClasses = "dropdown"

  if (props.showDropdown) {
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
              Home
            </li>
          </NavLink>
          <NavLink
            className="dropdown-links"
            activeClassName="dropdown-links-active"
            to="/save-the-date"
            onClick={ closeDropdown }
          >
            <li>
              Send Your Address
            </li>
          </NavLink>
          <NavLink
            className="dropdown-links"
            activeClassName="dropdown-links-active"
            to="/day-of-details"
            onClick={ closeDropdown }
          >
            <li>
              Itinerary
            </li>
          </NavLink>
          <NavLink
            className="dropdown-links"
            activeClassName="dropdown-links-active"
            to="/stay-walla"
            onClick={ closeDropdown }
          >
            <li>
              Stay
            </li>
          </NavLink>
          <NavLink
            className="dropdown-links"
            activeClassName="dropdown-links-active"
            to="/visit-walla"
            onClick={ closeDropdown }
          >
            <li>
              Visit
            </li>
          </NavLink>
        </ul>
      </div>
    </nav>
  )
}

export default Dropdown;
