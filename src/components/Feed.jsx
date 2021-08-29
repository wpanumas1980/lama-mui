import React from 'react';
import { Button, Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container:{
    paddingTop:theme.spacing(10)
  }
}));


export default function Feed() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      Feed
    </Container>
  )
}
