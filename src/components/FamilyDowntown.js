import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import birch from '../images/stay-page/family/downtown/birch.jpg'
import vue from '../images/stay-page/family/downtown/vue.jpg'
import bungalow from '../images/stay-page/family/downtown/bungalow.jpg'
import cherry from '../images/stay-page/family/downtown/cherry.jpg'
import casita from '../images/stay-page/family/downtown/casita.jpg'
import davey from '../images/stay-page/family/downtown/davey.jpg'
import traditional from '../images/stay-page/family/downtown/traditional.jpg'

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

  const openBirch = () => {
    window.open("https://www.airbnb.com/rooms/21862617?adults=2&check_in=2020-06-18&check_out=2020-06-21&source_impression_id=p3_1572389629_OHKZgLvTIYQqfp3N")
  }

  const openBungalow = () => {
    window.open("https://www.airbnb.com/rooms/6576291?adults=2&check_in=2020-06-18&check_out=2020-06-21&source_impression_id=p3_1572391321_aj7EUG42JrXR2vZ0")
  }

  const openVue = () => {
    window.open("https://www.airbnb.com/rooms/16191840?adults=2&check_in=2020-06-18&check_out=2020-06-21&source_impression_id=p3_1572391208_iXbmqzOAuIDdQJ4T")
  }

  const openCherry = () => {
    window.open("https://www.airbnb.com/rooms/16204564?adults=4&check_in=2020-06-18&check_out=2020-06-21&source_impression_id=p3_1572395719_n9XTj3IR5kqTJL4R")
  }

  const openCasita = () => {
    window.open("https://www.airbnb.com/rooms/19545218?adults=4&check_in=2020-06-18&check_out=2020-06-21&source_impression_id=p3_1572396314_i6lifUKUr%2Fi5SLEt")
  }

  const openDavey = () => {
    window.open("https://www.airbnb.com/rooms/16176508?adults=4&check_in=2020-06-18&check_out=2020-06-21&source_impression_id=p3_1572395664_Tgmedo3VXIFSRdkV")
  }

  const openTraditional = () => {
    window.open("https://www.airbnb.com/rooms/18178760?adults=6&check_in=2020-06-18&check_out=2020-06-21&source_impression_id=p3_1572394083_bxn43b1SOikFwdCH")
  }

  return (
    <>
      <div className={classes.root}
        id="margin-button"
      >
        <ButtonBase
          focusRipple
          key="Birch"
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: '36%',
          }}
          onClick={openBirch}
        >
          <img src={birch}
            className={classes.imageSrc}
            alt="Birch"
            id="birch"
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton} />
            <Typography
              component="span"
              variant="h5"
              color="white"
              className={classes.imageTitle}
            >
              2 bd / 2 ba<br/>$220/night
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
          onClick={openBungalow}
        >
          <img src={bungalow}
            className={classes.imageSrc}
            alt="Bungalow"
            id="bungalow"
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton} />
            <Typography
              component="span"
              variant="h5"
              color="white"
              className={classes.imageTitle}
            >
              2 bd / 2 ba<br/>$130/night
              <span className={classes.imageMarked} />
            </Typography>
        </ButtonBase>
        <ButtonBase
          focusRipple
          key="Vue"
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: '31%',
          }}
          onClick={openVue}
        >
          <img src={vue}
            className={classes.imageSrc}
            alt="Vue"
            id="vue"
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton} />
            <Typography
              component="span"
              variant="h5"
              color="white"
              className={classes.imageTitle}
            >
              3 bd / 3.5 ba<br/>$575/night
              <span className={classes.imageMarked} />
            </Typography>
        </ButtonBase>
        </div>
        <div className={classes.root}>
        <ButtonBase
          focusRipple
          key='Casita'
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "20%",
          }}
          onClick={openCasita}
        >
        <img src={casita}
          className={classes.imageSrc}
          alt="Casita"
          id="casita"
        />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton} />
            <Typography
              component="span"
              variant="h5"
              color="white"
              className={classes.imageTitle}
            >
              3 bd / 2 ba<br/>$130/night
              <span className={classes.imageMarked} />
            </Typography>
        </ButtonBase>
        <ButtonBase
          focusRipple
          key="Cherry"
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "32%",
          }}
          onClick={openCherry}
        >
          <img src={cherry}
            className={classes.imageSrc}
            alt="Cherry House"
            id="cherry"
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton} />
            <Typography
              component="span"
              variant="h5"
              color="white"
              className={classes.imageTitle}
            >
              3 bd / 3.5 ba<br/>$475/night
              <span className={classes.imageMarked} />
            </Typography>
        </ButtonBase>
        <ButtonBase
          focusRipple
          key='Davey'
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "23%",
          }}
          onClick={openDavey}
        >
        <img src={davey}
          className={classes.imageSrc}
          alt="Davey Home"
          id="davey"
        />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton} />
            <Typography
              component="span"
              variant="h5"
              color="white"
              className={classes.imageTitle}
            >
              5 bd / 5 ba<br/>$550/night
              <span className={classes.imageMarked} />
            </Typography>
        </ButtonBase>
        <ButtonBase
          focusRipple
          key='Traditional'
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "25%",
          }}
          onClick={openTraditional}
        >
        <img src={traditional}
          className={classes.imageSrc}
          alt="Traditional Mansion"
          id="traditional"
        />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton} />
            <Typography
              component="span"
              variant="h5"
              color="white"
              className={classes.imageTitle}
            >
              4 bd / 4 ba<br/>$475/night
              <span className={classes.imageMarked} />
            </Typography>
        </ButtonBase>
      </div>
    </>
  )
}
export default FamilyDowntown
