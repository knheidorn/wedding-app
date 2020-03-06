import React, { useState } from 'react'
import useForm from '../../helpers/useForm';
import validate from '../../helpers/FormValidationRules'

import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Fab from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Address = () => {
  const [liveWithState, setLiveWith] = useState(false)
  const [isSubmitted, setFormSubmit] = useState(false)

  const liveWith = () => {
    if (liveWithState) {
      setLiveWith(false)
    } else {
      setLiveWith(true)
    }
  }

  const submitRequest = () => {
    let guest = {
      first_name: valuesSD.firstName,
      last_name: valuesSD.lastName,
      address_1: valuesSD.addressOne,
      city: valuesSD.city,
      state: valuesSD.state,
      zipcode: valuesSD.zipcode,
      email: valuesSD.email,
      partner_first: valuesSD.partFirstName,
      partner_last: valuesSD.partLastName,
      address_2: valuesSD.addressTwo
    }

    let body = {guest: guest}

    let config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    }

    fetch("https://guest-book-wein.herokuapp.com/guests", config)
      .then(response => response.json())
  }

  const submitForm = () => {
    submitRequest()
    setFormSubmit(true)
  }

  const {
    valuesSD,
    errorsSD,
    handleSubmit,
    handleChange,
  } = useForm(submitForm, validate);

  return (
    <div className="app">
      <div className="save-the-date">
        <div className="transbox-sd">
          {isSubmitted ? (
            <>
            </>
          ) : (
            <div className="form-sd">
              <h2 id="title-sd">
                Address Request
              </h2>
              <FormControl>
                <TextField type="text"
                  label="First Name"
                  name="firstName"
                  value={valuesSD.firstName || ""}
                  onChange={handleChange}
                  required
                />
                {errorsSD.firstName && (
                  <p className="sd-is-danger">{errorsSD.firstName}</p>
                )}
                <TextField type="text"
                  label="Last Name"
                  name="lastName"
                  value={valuesSD.lastName || ""}
                  onChange={handleChange}
                  required
                />
                {errorsSD.lastName && (
                  <p className="sd-is-danger">{errorsSD.lastName}</p>
                )}
                <RadioGroup aria-label="position"
                  name="position"
                  onClick={liveWith}
                >
                  <FormControlLabel
                    className="live-with"
                    value="true"
                    control={<Radio color="primary" />}
                    label={"Partner's Name"}
                    labelPlacement="start"
                    checked={liveWithState}
                  />
                </RadioGroup>
                {liveWithState &&
                  <>
                    <TextField type="text"
                      label="Partner's First"
                      name="partFirstName"
                      value={valuesSD.partFirstName || ""}
                      onChange={handleChange}
                      required
                    />
                    <TextField type="text"
                      label="Partner's Last"
                      name="partLastName"
                      value={valuesSD.partLastName || ""}
                      onChange={handleChange}
                      required
                    />
                  </>
                }
                <TextField type="text"
                  label="Address"
                  name="addressOne"
                  value={valuesSD.addressOne || ""}
                  onChange={handleChange}
                  required
                />
                {errorsSD.addressOne && (
                  <p className="sd-is-danger">{errorsSD.addressOne}</p>
                )}
                <TextField type="text"
                  label="Apt or Unit #"
                  name="addressTwo"
                  value={valuesSD.addressTwo || ""}
                  onChange={handleChange}
                />
                <TextField type="text"
                  label="City"
                  name="city"
                  value={valuesSD.city || ""}
                  onChange={handleChange}
                  required
                />
                {errorsSD.city && (
                  <p className="sd-is-danger">{errorsSD.city}</p>
                )}
                <TextField type="text"
                  label="State"
                  name="state"
                  value={valuesSD.state || ""}
                  onChange={handleChange}
                  required
                />
                {errorsSD.state && (
                  <p className="sd-is-danger">{errorsSD.state}</p>
                )}
                <TextField type="text"
                  label="Zipcode"
                  name="zipcode"
                  value={valuesSD.zipcode || ""}
                  onChange={handleChange}
                  required
                />
                {errorsSD.zipcode && (
                  <p className="sd-is-danger">{errorsSD.zipcode}</p>
                )}
                <TextField type="text"
                  label="Email"
                  name="email"
                  value={valuesSD.email || ""}
                  onChange={handleChange}
                  required
                />
                {errorsSD.email && (
                  <p className="sd-is-danger">{errorsSD.email}</p>
                )}
                <Fab type="submit"
                  aria-label="send"
                  color="primary"
                  className="submit-button"
                >
                  <SendIcon onClick={handleSubmit}/>
                </Fab>
              </FormControl>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Address
