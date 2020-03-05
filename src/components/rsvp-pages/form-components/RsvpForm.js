import React, { Component } from 'react'
import RsvpDetail from './RsvpDetail'

import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import SendIcon from '@material-ui/icons/Send';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

class RsvpForm extends Component {
  render() {
    let {
      isAttending,
      dietRestrict,
      rsvpDate,
      kidCount,
      hasKids,
      firstName,
      lastName,
      partFirstName,
      partLastName,
      livesWith,
      toggleCheck,
      handleChange,
      submitForm
    } = this.props

    return (
      <FormControl>
        <FormControlLabel
          control={
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              value={isAttending}
              name="isAttending"
              onChange={toggleCheck}
            />}
          checked={isAttending}
          label="Attending?"
        />
        <TextField type="text"
          label="First Name"
          name="firstName"
          value={firstName || ""}
          onChange={handleChange}
          required
        />
        <TextField type="text"
          label="Last Name"
          name="lastName"
          value={lastName || ""}
          onChange={handleChange}
          required
        />
        {isAttending &&
          <>
            <RsvpDetail
              partFirstName={partFirstName}
              partLastName={partLastName}
              rsvpDate={rsvpDate}
              dietRestrict={dietRestrict}
              kidCount={kidCount}
              hasKids={hasKids}
              livesWith={livesWith}
              toggleCheck={toggleCheck}
              handleChange={handleChange}
            />
          </>
        }
        <Button type="submit"
          aria-label="Send"
          className="submit-button"
          onClick={submitForm}
          endIcon={<SendIcon />}
        >
          Send RSVP
        </Button>
      </FormControl>
    )
  }
}
export default RsvpForm;
