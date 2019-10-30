import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import bryant from '../images/stay-page/bryant.jpg'
import park from '../images/stay-page/park.jpg'
import bryantbarn from '../images/stay-page/bryantbarn.jpg'
import midcentury from '../images/stay-page/midcentury.jpg'
import cottage from '../images/stay-page/cottage.jpg'
import rewind from '../images/stay-page/rewind.jpg'
import farm from '../images/stay-page/farm.jpg'

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

const FamilyDowntown = () => {
  const classes = useStyles()

  const openBryant = () => {
    window.open("https://www.airbnb.com/rooms/12985476?adults=2&check_in=2020-06-18&check_out=2020-06-21&source_impression_id=p3_1572408604_iL9pO%2BXsgsvi%2Ffj3")
  }

  const openBarn = () => {
    window.open("https://www.airbnb.com/rooms/12983536?source_impression_id=p3_1572409442_Tqul84GCmbvq6pKk&check_in=2020-06-18&guests=6&adults=6&check_out=2020-06-21")
  }

  const openPark = () => {
    window.open("https://www.airbnb.com/rooms/21679633?adults=8&check_in=2020-06-18&check_out=2020-06-21&source_impression_id=p3_1572410509_HqBzDkIAIAKW%2FwbP&guests=8")
  }

  const openMid = () => {
    window.open("https://www.airbnb.com/rooms/30818229?adults=6&check_in=2020-06-18&check_out=2020-06-21&source_impression_id=p3_1572409040_1XgjQJ6IS7hJXFhZ&guests=6")
  }

  const openCottage = () => {
    window.open("https://www.airbnb.com/rooms/17644208?check_in=2020-06-18&check_out=2020-06-21&adults=4&guests=4")
  }

  const openRewind = () => {
    window.open("https://www.airbnb.com/rooms/17406174?adults=4&check_in=2020-06-18&check_out=2020-06-21&source_impression_id=p3_1572410222_tdHLG1EAfTuRapB2&guests=4")
  }

  const openFarm = () => {
    window.open("https://www.airbnb.com/rooms/16070568?adults=10&check_in=2020-06-18&check_out=2020-06-21&source_impression_id=p3_1572410757_lu7L%2FqIKKyTka9b0&guests=10")
  }

  return (
    <>
      <div className={classes.root}
        id="margin-button"
      >
        <ButtonBase
          focusRipple
          key="Bryant"
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: '36%',
          }}
          onClick={openBryant}
        >
          <img src={bryant}
            className={classes.imageSrc}
            alt="Bryant"
            id="bryant"
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton} />
            <Typography
              component="span"
              variant="h5"
              color="white"
              className={classes.imageTitle}
            >
              3 bd / 2 ba<br/>$450/night
              <span className={classes.imageMarked} />
            </Typography>
        </ButtonBase>
        <ButtonBase
          focusRipple
          key="Bungalow"
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: '33%',
          }}
          onClick={openBarn}
        >
          <img src={bryantbarn}
            className={classes.imageSrc}
            alt="Bungalow"
            id="bryantbarn"
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton} />
            <Typography
              component="span"
              variant="h5"
              color="white"
              className={classes.imageTitle}
            >
              Studio<br/>2 bd / 2 ba<br/>$425/night
              <span className={classes.imageMarked} />
            </Typography>
        </ButtonBase>
        <ButtonBase
          focusRipple
          key="Park"
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: '31%',
          }}
          onClick={openPark}
        >
          <img src={park}
            className={classes.imageSrc}
            alt="Park"
            id="park"
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton} />
            <Typography
              component="span"
              variant="h5"
              color="white"
              className={classes.imageTitle}
            >
              4 bd / 3 ba<br/>$475/night
              <span className={classes.imageMarked} />
            </Typography>
        </ButtonBase>
        </div>
        <div className={classes.root}>
        <ButtonBase
          focusRipple
          key='Cottage'
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "20%",
          }}
          onClick={openCottage}
        >
        <img src={cottage}
          className={classes.imageSrc}
          alt="Cottage"
          id="cottage"
        />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton} />
            <Typography
              component="span"
              variant="h5"
              color="white"
              className={classes.imageTitle}
            >
              2 bd / 2 ba<br/>$175/night
              <span className={classes.imageMarked} />
            </Typography>
        </ButtonBase>
        <ButtonBase
          focusRipple
          key='Rewind'
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "32%",
          }}
          onClick={openRewind}
        >
        <img src={rewind}
          className={classes.imageSrc}
          alt="Rewind Home"
          id="rewind"
        />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton} />
            <Typography
              component="span"
              variant="h5"
              color="white"
              className={classes.imageTitle}
            >
              2 bd / 1 ba<br/>$205/night
              <span className={classes.imageMarked} />
            </Typography>
        </ButtonBase>
        <ButtonBase
          focusRipple
          key="Mid"
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "23%",
          }}
          onClick={openMid}
        >
          <img src={midcentury}
            className={classes.imageSrc}
            alt="Mid House"
            id="midcentury"
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton} />
            <Typography
              component="span"
              variant="h5"
              color="white"
              className={classes.imageTitle}
            >
              3 bd / 2.5 ba<br/>$382/night
              <span className={classes.imageMarked} />
            </Typography>
        </ButtonBase>
        <ButtonBase
          focusRipple
          key='Farm'
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "25%",
          }}
          onClick={openFarm}
        >
        <img src={farm}
          className={classes.imageSrc}
          alt="Farm Mansion"
          id="farm"
        />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton} />
            <Typography
              component="span"
              variant="h5"
              color="white"
              className={classes.imageTitle}
            >
              5 bd / 3.5 ba<br/>$495/night
              <span className={classes.imageMarked} />
            </Typography>
        </ButtonBase>
      </div>
    </>
  )
}
export default FamilyDowntown
