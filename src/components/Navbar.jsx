import React, { useState, useEffect } from 'react';
import { AppBar, InputBase, Toolbar, Typography, Badge, Avatar, IconButton } from "@material-ui/core";
import { alpha, makeStyles } from '@material-ui/core/styles';
import { Search, Mail, Notifications, Cancel } from '@material-ui/icons';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  logoLg: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  logoSM: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: '50%',
    [theme.breakpoints.down('xs')]: {
      display: props => props.open ? 'flex' : 'none',
      width: '70%'
    }
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1)
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  icons: {
    alignItems: 'center',
    display: props => props.open ? 'none' : 'flex',

  },
  badge: {
    marginRight: theme.spacing(2)
  },
  badgeColor:{
    color:'#fff'
  }
}));


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  useEffect(() => {
    window.addEventListener("resize", () => { matches && setOpen(false) })
  })
console.log('classes: ', classes.badgeColor);
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant='h6' className={classes.logoLg}>
          Panumas
        </Typography>
        <Typography variant='h6' className={classes.logoSM}>
          OS
        </Typography>
        <div
          className={classes.search}
        >
          <Search />
          <InputBase placeholder="Search..." className={classes.input} />
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>
        <div className={classes.icons}>
          <Search className={classes.searchButton}
            onClick={() => setOpen(true)}
          />
          <IconButton classes={{root:classes.badgeColor}}>
            <Badge badgeContent={4} color="secondary">
              <Mail />
            </Badge>
          </IconButton>
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar
            alt="os"
            src="https://avatars.githubusercontent.com/u/70122239?s=60&v=4"
          />
        </div>
      </Toolbar>
    </AppBar>
  )
}
