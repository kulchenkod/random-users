import React from "react";
import { Grid, Typography, makeStyles, Avatar } from "@material-ui/core";
import moment from "moment";
import { User } from "../../types";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  avatar: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));

type Props = {
  currentUser: User;
};

const UserDetailsInfo: React.FC<Props> = ({
  currentUser: {
    location: {
      street: { number, name },
    },
    picture: { large },
    email,
    gender,
    dob: { date, age },
    phone,
  },
}) => {
  const classes = useStyles();

  const birthdayFormat = moment(date).format("DD-MM-YYYY");

  return (
    <Grid item>
      <Typography align="center" variant="h6">
        Details Page User
      </Typography>
      <div className={classes.avatar}>
        <Avatar src={large} className={classes.large} />
      </div>
      <Typography variant="h6">{`Address - ${name} ${number}`}</Typography>
      <Typography variant="h6">{`Email - ${email}`}</Typography>
      <Typography variant="h6">{`Gender - ${gender}`}</Typography>
      <Typography variant="h6">{`Birthday - ${birthdayFormat}(${age}) `}</Typography>
      <Typography variant="h6">{`Phone - ${phone}`}</Typography>
    </Grid>
  );
};

export default React.memo(UserDetailsInfo);
