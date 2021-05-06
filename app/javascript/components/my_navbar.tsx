import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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

function MyNavbar (props: { loggedIn: boolean; regPath: string; homePath: string; logPath: string; }) {
  const classes = useStyles();
  const loggedIn = props.loggedIn;
  const regPath = props.regPath;
  const homePath = props.homePath;
  const logPath = props.logPath;
  return (
    <AppBar position="static" className={classes.toolbar}>
      <Toolbar>
        <Typography variant="h1" className={classes.title}>
          <Button data-testid="home-button" href={homePath} color="inherit">
            BlogEngine
          </Button>
        </Typography>
        {loggedIn
          ? null
          : (
          <Button data-testid="reg-button" href={regPath} color="inherit">
            Register
          </Button>
            )}
        {loggedIn
          ? (
          <Button color="inherit" >Logout</Button>
            )
          : (
          <Button color="inherit" href={logPath}>Login</Button>
            )}
      </Toolbar>
    </AppBar>
  );
}

export default MyNavbar;
