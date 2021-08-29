import React from 'react';
import { Button, Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Home } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100vh',
    color: 'white',
    paddingTop: theme.spacing(10),
    background: theme.palette.primary.main,
    [theme.breakpoints.up("sm")]:{
      background:'white',
      color:'#555',
      border:'1px solid #ece7e7'
    }
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: 'pointer'
    }
  },
  icon:{
    marginRight:theme.spacing(1),
    [theme.breakpoints.up("sm")]:{
      fontSize:'18px'
    }
  },
  text: {
    fontWeight:500,
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}));


export default function Leftbar() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>
          Homepage
        </Typography>
      </div>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>
          Homepage
        </Typography>
      </div>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>
          Homepage
        </Typography>
      </div>
    </Container>
  )
}
