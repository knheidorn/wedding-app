import React, {Component} from 'react'

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class RsvpDetail extends Component {

  render() {
    let {
      dietRestrict,
      rsvpDate,
      kidCount,
      hasKids,
      toggleCheck,
      partFirstName,
      partLastName,
      handleChange,
      livesWith
    } = this.props

    return(
      <>
        <FormControlLabel
          control={
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              name="livesWith"
              value={livesWith}
              onChange={toggleCheck}
            />}
          checked={livesWith}
          label="Plus One?"
        />
        {livesWith &&
          <>
            <TextField type="text"
              label="Partner's First"
              name="partFirstName"
              value={partFirstName || ""}
              onChange={handleChange}
              required
            />
            <TextField type="text"
              label="Partner's Last"
              name="partLastName"
              value={partLastName || ""}
              onChange={handleChange}
              required
            />
          </>
        }
        <FormControlLabel
          control={
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              value={hasKids}
              name="hasKids"
              onChange={toggleCheck}
            />}
          checked={hasKids}
          label="Kiddos?"
        /> {
          hasKids &&
          <>
            <Select
              value={kidCount}
              onChange={handleChange}
              name="kidCount"
              autoWidth
            >
              <MenuItem value={1}>One Kid</MenuItem>
              <MenuItem value={2}>Two Kids</MenuItem>
              <MenuItem value={3}>Three Kids</MenuItem>
              <MenuItem value={4}>MORE!</MenuItem>
            </Select>
          </>
        }
        <>
          <TextField type="date"
            name="rsvpDate"
            label="Arrival Date"
            className="rsvp-date"
            value={rsvpDate}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
          />
          <TextField type="text"
            label="Dietary Restritions"
            name="dietRestrict"
            value={dietRestrict || ""}
            onChange={handleChange}
          />
        </>
      </>

    )
  }

}

export default RsvpDetail;
