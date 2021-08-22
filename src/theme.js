import { createTheme } from "@material-ui/core";
import {blue} from '@material-ui/core/colors';
export const theme = createTheme({
  palette:{
    primary:{
      main:'#aabfad'
    },
    secondary:{
      main:blue[500]
    },
  },
  myButton:{
    background:'red',
    color:'white',
    border:'1px solid black'
  }
});