import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import * as PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 2,
    fontSize: "3rem"
  },
  toolbar: {
    backgroundColor: "SandyBrown",
    borderRadius: "15px",
    padding: "0",
    height: "70px"
  }
}));

function MyNavbar (props) {
  const classes = useStyles();
  const logged = props.logged_in;
  const regPath = props.regPath;
  const homePath = props.homePath;
  return (
    <AppBar position="static" className={classes.toolbar}>
  <Toolbar >
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
    </IconButton>
    <Typography variant="h1" className={classes.title}>
      <Button data-testid="HomeButton" href={homePath} color="inherit">BlogEngine</Button>
    </Typography>
     {logged ? null : <Button data-testid="RegButton" href={regPath} color="inherit">Register</Button>}
     {logged ? <Button data-testid="OutButton" color="inherit">Logout</Button> : <Button data-testid="InButton"color="inherit">Login</Button>}
  </Toolbar>
</AppBar>
  );
}

MyNavbar.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  regPath: PropTypes.string.isRequired,
  homePath: PropTypes.string.isRequired

};

export default MyNavbar;
