import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { Container, Modal } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: 10,
    right: 10
  },
  container: {
    width: 500,
    height: 550,
    background: 'white',
    position:'absolute',
    top:0,
    bottom:0,
    left:0,
    right:0,
    margin:'auto',
    [theme.breakpoints.down("sm")]:{
      width:'100vw',
      height:'100vh'
    }
  }

}));

export default function Add() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <Container className={classes.container}>
          My modal
        </Container>
      </Modal>
    </>
  )
}
