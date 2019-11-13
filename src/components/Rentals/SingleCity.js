import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import gable from '../../images/stay-page/single/city/gable.png'
import duck from '../../images/stay-page/single/city/duck.png'
import barn from '../../images/stay-page/single/city/barn.png'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 225,
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
    opacity: 0.5,
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

const SingleCity = () => {
  const classes = useStyles()

  const openGable = () => {
    window.open("https://www.greengablesinn.com/")
  }

  const openBarn = () => {
    window.open("https://secure.thinkreservations.com/bnbwallawalla/reservations/availability?start_date=2020-06-18&end_date=2020-06-21&number_of_adults=2&number_of_children=0&customer_group=&coupon_code=&room_id=")
  }

  const openDuck = () => {
    window.open("http://www.fatduckinn.com/cms/")
  }

  return (
    <>
      <div className={classes.root}
        id="margin-button"
      >
        <ButtonBase
          focusRipple
          key="Barn"
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: '40%',
          }}
          onClick={openBarn}
        >
          <img src={barn}
            className={classes.imageSrc}
            alt="Barn B&B"
            id="barn"
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton} />
            <Typography
              component="span"
              variant="h5"
              color="white"
              className={classes.imageTitle}
            >
              $400 - $475/night
              <span className={classes.imageMarked} />
            </Typography>
        </ButtonBase>
        <ButtonBase
          focusRipple
          key="Gables"
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: '27%',
          }}
          onClick={openGable}
        >
          <img src={gable}
            className={classes.imageSrc}
            alt="Green Gables"
            id="gable"
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton} />
            <Typography
              component="span"
              variant="h5"
              color="white"
              className={classes.imageTitle}
            >
              $179 - $269/night
              <span className={classes.imageMarked} />
            </Typography>
        </ButtonBase>
        <ButtonBase
          focusRipple
          key="Duck"
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: '33%',
          }}
          onClick={openDuck}
        >
          <img src={duck}
            className={classes.imageSrc}
            alt="Fat Duck Inn"
            id="duck"
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton} />
            <Typography
              component="span"
              variant="h5"
              color="white"
              className={classes.imageTitle}
            >
              $149 - $229/night
              <span className={classes.imageMarked} />
            </Typography>
        </ButtonBase>
      </div>
    </>
  )
}
export default SingleCity
