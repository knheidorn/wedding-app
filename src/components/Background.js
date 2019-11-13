import React from 'react';

import './Dropdown.css'

const Background = (props) => {
  return (
    <div className="background" onClick={ props.closeDropdown }>
    </div>
  )
}

export default Background;
