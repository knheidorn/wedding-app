import React from 'react'

import './Dropdown.css';

const ToggleButton = (props) => {
  return (
    <button className="toggle-list" onClick={ props.openDropdown }>
      <div className="toggle-items">
      </div>
      <div className="toggle-items">
      </div>
      <div className="toggle-items">
      </div>
    </button>
  )
}

export default ToggleButton;
