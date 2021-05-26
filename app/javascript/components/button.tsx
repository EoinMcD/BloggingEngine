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
    name: string;
    path: string;
}
const MyButton: React.FC<ButtonProps> = ({
  name,
  path
}) => {
  const classes = useStyles();
  return (
      <Button variant ="contained" className={classes.button} href={path}>
          {name}
      </Button>
  );
};

export default MyButton;
