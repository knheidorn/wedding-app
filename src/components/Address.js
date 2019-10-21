import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Fab from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel';

// import useForm from 'react-hook-form'

const Address = () => {
  const [liveWithState, setLiveWith] = useState(true)

  const liveWith = (event) => {
    setLiveWith()
  }

  return(
    <div className="app">
      <FormControl>
        <TextField type="text"
          label="First name"
          name="firstName"
          value={values.firstName || ""}
          required
        />
        <TextField type="text"
          label="Last name"
          name="lastName"
          value={values.lastName || ""}
          required
        />
        <RadioGroup aria-label="position"
          name="position"
          value={values.liveWith}
          onChange={liveWith}
        >
            <FormControlLabel
              value="true"
              control={<Radio color="primary" />}
              label="I live with my plus one"
              labelPlacement="start"
            />
          </RadioGroup>
        <TextField type="text"
          label="Email"
          name="email"
          value={values.email || ""}
          required
        />
        <TextField type="text"
          label="Address"
          name="address_one"
          value={values.address_one || ""}
          required
        />
        <TextField type="text"
          label="Apt or Unit #"
          name="address_two"
          value={values.address_two || ""}
        />
        <TextField type="text"
          label="City"
          name="city"
          value={values.city || ""}
          required
        />
        <TextField type="text"
          label="State"
          name="state"
          value={values.state || ""}
          required
        />
        <TextField type="text"
          label="Zipcode"
          name="zipcode"
          value={values.zipcode || ""}
          required
        />
        <Fab type="submit"
          aria-label="send"
          color="primary"
          className="submit-button"
        >
          <SendIcon/>
        </Fab>
      </FormControl>
    </div>
  )
}

export default Address;
