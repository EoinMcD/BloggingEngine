import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function MyNavbar (props) {
  const classes = useStyles();
  const logged = props.logged_in;
  const regPath = props.regPath;
  const fName = props.fName;
  const sName = props.sName;
  function logger () {
  }
  function reg () {
    window.location.href = regPath;
  }
  function namer () {
    return fName + " " + sName;
  }
  return (
    <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      BlogEngine
    </Typography>
     {logged ? <Typography variant="h6" className={classes.title}> {fName + " " + sName} </Typography> : <Button onClick = {reg} color="inherit">Register</Button>}
     {logged ? <Button onClick = {logger} color="inherit">Logout</Button> : <Button color="inherit">Login</Button>}
  </Toolbar>
</AppBar>
  );
}

MyNavbar.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  regPath: PropTypes.string.isRequired,
  fName: PropTypes.string.isRequired,
  sName: PropTypes.string.isRequired

};

export default MyNavbar;
