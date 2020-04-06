import React from "react";
import { Typography, AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { useLocation, Link } from "react-router-dom";
import { GoBackButton } from "../common";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navigationWrapper: {
    justifyContent: "space-between",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();
  const { pathname } = useLocation();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.navigationWrapper}>
          <Link to="/" className={classes.link}>
            <Typography display="inline" variant="h6">
              Random users application
            </Typography>
          </Link>
          {pathname.length > 1 && <GoBackButton />}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
