import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Grid, CircularProgress, makeStyles } from "@material-ui/core";
import { getAllUsers, clearSearchValue } from "../../store/actions";
import { selectSearchUsers } from "../../store/selectors";
import { User } from "../User";
import { FilterRow } from "../common/FilterRow";
import { User as ItemUser } from "../../types";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  container: {
    margin: 0,
  },
  item: {
    cursor: "pointer",
  },
}));

const Main: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const { data, loading } = useSelector(selectSearchUsers);

  useEffect(() => {
    dispatch(getAllUsers());
    return () => {
      dispatch(clearSearchValue());
    };
  }, [dispatch]);

  const handleClick = useCallback(
    (id: string) => {
      history.push(`user/${id}`);
    },
    [history]
  );

  const renderUser = ({
    name,
    login: { uuid },
    picture: { large },
  }: ItemUser) => {
    return (
      <User
        key={`user${uuid}`}
        onClick={handleClick}
        name={name}
        uuid={uuid}
        large={large}
      />
    );
  };

  if (loading) {
    return (
      <div className={classes.root}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <Grid
      container
      item
      xs={12}
      md={12}
      lg={12}
      className={classes.container}
      spacing={2}
    >
      <FilterRow />
      {data.map(renderUser)}
    </Grid>
  );
};

export default Main;
