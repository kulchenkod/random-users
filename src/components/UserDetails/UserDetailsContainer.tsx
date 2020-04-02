import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/selectors";
import {
  Container,
  CircularProgress,
  Paper,
  makeStyles
} from "@material-ui/core";
import { getDetailsUser, clearCurrentUser } from "../../store/actions";
import UserDetailsInfo from "./UserDetailsInfo";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2)
    }
  },
  container: {
    margin: 0
  },
  item: {
    cursor: "pointer"
  }
}));

const UserDetailsContainer: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const classes = useStyles();

  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    if (id) dispatch(getDetailsUser(id));
    return () => {
      dispatch(clearCurrentUser());
    };
  }, [dispatch, id]);

  if (!currentUser) {
    return (
      <div className={classes.root}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <Container maxWidth="sm">
      <Paper>
        <UserDetailsInfo currentUser={currentUser} />
      </Paper>
    </Container>
  );
};

export default UserDetailsContainer;
