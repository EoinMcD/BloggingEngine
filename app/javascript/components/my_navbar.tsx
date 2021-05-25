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
  },
  button: {
    color: "white"
  }
}));

interface NavbarProps {
  loggedIn: boolean;
  regPath: string;
  homePath: string;
  loginPath: string
}
const MyNavbar: React.FC<NavbarProps> = ({
  loggedIn,
  regPath,
  homePath,
  loginPath
}) => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.toolbar}>
      <Toolbar>
        <Typography variant="h1" className={classes.title}>
          <Button data-testid="home-button" href={homePath} className={classes.button} >
            BlogEngine
          </Button>
        </Typography>
        {loggedIn
          ? null
          : (
          <Button data-testid="reg-button" href={regPath} className={classes.button} >
            Register
          </Button>
            )}
        {loggedIn
          ? (
          <Button className={classes.button} >Logout</Button>
            )
          : (
          <Button className={classes.button} data-testid="login-button" href={loginPath}>
            Login
          </Button>
            )}
      </Toolbar>
    </AppBar>
  );
};

export default MyNavbar;
