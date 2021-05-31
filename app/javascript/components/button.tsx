import * as React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "SandyBrown",
    color: "White"
  }
}));

interface ButtonProps {
    buttonText: string;
    path: string;
}
const MyButton: React.FC<ButtonProps> = ({
  buttonText,
  path
}) => {
  const classes = useStyles();
  return (
      <Button variant="contained" className={classes.button} href={path}>
          {buttonText}
      </Button>
  );
};

export default MyButton;
