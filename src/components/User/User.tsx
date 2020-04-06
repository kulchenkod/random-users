import React from "react";
import { Grid, Paper, Typography, Avatar, makeStyles } from "@material-ui/core";

type Props = {
  uuid: string;
  large: string;
  name: {
    first: string;
    last: string;
    title: string;
  };
  onClick(id: string): void;
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
  item: {
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));

const User: React.FC<Props> = ({
  onClick,
  uuid,
  large,
  name: { first, last, title },
}) => {
  const classes = useStyles();

  const handleClick = () => {
    onClick(uuid);
  };

  return (
    <Grid
      container
      item
      xs={12}
      sm={6}
      md={4}
      lg={2}
      xl={2}
      onClick={handleClick}
      className={classes.item}
    >
      <Paper>
        <div className={classes.root}>
          <Avatar
            alt={`${first} ${last}`}
            src={large}
            className={classes.large}
          />
        </div>
        <Typography variant="h6">{`${title}. ${first} ${last}`}</Typography>
        <Typography variant="h6">{uuid}</Typography>
      </Paper>
    </Grid>
  );
};

export default React.memo(User);
