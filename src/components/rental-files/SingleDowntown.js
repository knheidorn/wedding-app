import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import wesley from '../../images/stay-page/single/downtown/wesley.png'
import marcus from '../../images/stay-page/single/downtown/marcus.jpeg'
import hungate from '../../images/stay-page/single/downtown/hungate.png'

import '../../css/stay-page/SingleDowntown.css'

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

const SingleDowntown = () => {
  const classes = useStyles()

  const openWesley = () => {
    window.open("https://www.wesleywallawalla.com/")
  }

  const openHungate = () => {
    window.open("https://thehungate.com/index.php?page=check_villas")
  }

  const openMarcus = () => {
    window.open("https://marcuswhitmanhotel.com/")
  }

  return (
    <>
      <div className={classes.root}
        id="margin-button"
      >
        <ButtonBase
          focusRipple
          key="Wesley"
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: '30%',
          }}
          onClick={openWesley}
        >
          <img src={wesley}
            className={classes.imageSrc}
            alt="Wesley"
            id="wesley"
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton} />
            <Typography
              component="span"
              variant="h5"
              color="white"
              className={classes.imageTitle}
            >
              $119 - $249/night
              <span className={classes.imageMarked} />
            </Typography>
        </ButtonBase>
        <ButtonBase
          focusRipple
          key="Hungate"
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: '40%',
          }}
          onClick={openHungate}
        >
          <img src={hungate}
            className={classes.imageSrc}
            alt="Hungate"
            id="hungate"
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton} />
            <Typography
              component="span"
              variant="h5"
              color="white"
              className={classes.imageTitle}
            >
              $175 - $245/night
              <span className={classes.imageMarked} />
            </Typography>
        </ButtonBase>
        <ButtonBase
          focusRipple
          key="Marcus"
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: '30%',
          }}
          onClick={openMarcus}
        >
          <img src={marcus}
            className={classes.imageSrc}
            alt="Marcus"
            id="marcus"
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton} />
            <Typography
              component="span"
              variant="h5"
              color="white"
              className={classes.imageTitle}
            >
              $120 - $175/night
              <span className={classes.imageMarked} />
            </Typography>
        </ButtonBase>
      </div>
    </>
  )
}
export default SingleDowntown
