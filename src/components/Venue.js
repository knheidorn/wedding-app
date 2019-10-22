import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import venue from '../images/venue.jpg'
import meal from '../images/meals.jpg'
import winery from '../images/winery.jpg'
import stay from '../images/stay.jpg'
import downtown from '../images/downtown.jpg'
import hike from '../images/hike.jpg'
import backyard from '../images/backyard.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 250,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    color: "white",
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const Venue = () => {
  const classes = useStyles()

  return(
    <div>
      <div className="main-image-venue">
        <div className="transbox">
          <h4
            color="black"
            className={classes.imageTitle}
          >
            Wedding Itinerary to Come
          </h4>
        </div>
      </div>
      <div className={classes.root}>
      <ButtonBase
        focusRipple
        key="Venue"
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        style={{
          width: '40%',
        }}
      >
        <img src={venue}
          className={classes.imageSrc}
          alt="Venue"
          id="venue"
        />
        <span className={classes.imageBackdrop} />
        <span className={classes.imageButton} />
          <Typography
            component="span"
            variant="h4"
            color="white"
            className={classes.imageTitle}
          >
            Venue
            <span className={classes.imageMarked} />
          </Typography>
      </ButtonBase>
      <ButtonBase
        focusRipple
        key="Eat"
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        style={{
          width: '30%',
        }}
      >
        <img src={meal}
          className={classes.imageSrc}
          alt="Eat"
          id="eat"
        />
        <span className={classes.imageBackdrop} />
        <span className={classes.imageButton} />
          <Typography
            component="span"
            variant="h4"
            color="white"
            className={classes.imageTitle}
          >
            Eat
            <span className={classes.imageMarked} />
          </Typography>
      </ButtonBase>
      <ButtonBase
        focusRipple
        key="Downtown"
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        style={{
          width: '30%',
        }}
      >
        <img src={downtown}
          className={classes.imageSrc}
          alt="Downtown"
          id="downtown"
        />
        <span className={classes.imageBackdrop} />
        <span className={classes.imageButton} />
          <Typography
            component="span"
            variant="h4"
            color="white"
            className={classes.imageTitle}
          >
            Downtown
            <span className={classes.imageMarked} />
          </Typography>
      </ButtonBase>
      </div>
      <div className={classes.root}>
      <ButtonBase
        focusRipple
        key="Venue"
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        style={{
          width: '30%',
        }}
      >
        <img src={stay}
          className={classes.imageSrc}
          alt="Stay"
          id="stay"
        />
        <span className={classes.imageBackdrop} />
        <span className={classes.imageButton} />
          <Typography
            component="span"
            variant="h4"
            color="white"
            className={classes.imageTitle}
          >
            Stay
            <span className={classes.imageMarked} />
          </Typography>
      </ButtonBase>
      <ButtonBase
        focusRipple
        key='Drink'
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        style={{
          width: "45%",
        }}
      >
      <img src={winery}
        className={classes.imageSrc}
        alt="Drink"
        id="winery"
      />
        <span className={classes.imageBackdrop} />
        <span className={classes.imageButton} />
          <Typography
            component="span"
            variant="h4"
            color="white"
            className={classes.imageTitle}
          >
            Drink
            <span className={classes.imageMarked} />
          </Typography>
      </ButtonBase>
      <ButtonBase
        focusRipple
        key='Outdoors'
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        style={{
          width: "25%",
        }}
      >
      <img src={hike}
        className={classes.imageSrc}
        alt="Outdoors"
        id="hike"
      />
        <span className={classes.imageBackdrop} />
        <span className={classes.imageButton} />
          <Typography
            component="span"
            variant="h4"
            color="white"
            className={classes.imageTitle}
          >
            Outdoors
            <span className={classes.imageMarked} />
          </Typography>
      </ButtonBase>
      </div>
    </div>
  )
}

export default Venue;
