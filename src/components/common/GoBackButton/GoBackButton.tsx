import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    color: "white"
  }
}));

const GoBackButton: React.FC = ({ children }) => {
  const history = useHistory();
  const classes = useStyles();

  const goBack = () => {
    history.goBack();
  };

  return (
    <Button
      onClick={goBack}
      className={classes.root}
      variant="text"
      startIcon={<ArrowBackIcon />}
    >
      {children || "Back to list"}
    </Button>
  );
};

export default GoBackButton;
