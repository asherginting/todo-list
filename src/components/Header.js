import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#16ABF8',
  },
  title: {
    flexGrow: 1,
    marginLeft: '220px',
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontSize: '24px',
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          TODO LIST APP
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
