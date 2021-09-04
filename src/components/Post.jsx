import React from 'react'
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  media: {
    height: 250,
    [theme.breakpoints.down('sm')]: {
      height: 150
    }
  },
  card: {
    marginBottom: theme.spacing(5)
  },
}));


export default function Post() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80"
          title="MyPost"
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>My First Post</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum velit repudiandae eos sint ipsam aut placeat molestias ducimus odio nihil voluptas autem ipsum maxime, cum neque adipisci dolorem, laborum eaque.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum velit repudiandae eos sint ipsam aut placeat molestias ducimus odio nihil voluptas autem ipsum maxime, cum neque adipisci dolorem, laborum eaque.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardAction}>
        <Button size="small" color="primary">Share</Button>
        <Button size="small" color="primary">Learn more</Button>
      </CardActions>
    </Card>
  )
}
