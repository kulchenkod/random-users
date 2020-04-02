import React from "react";
import { Grid, TextField, makeStyles, createStyles } from "@material-ui/core";
import debounce from "debounce";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../../store/actions";

const useStyles = makeStyles(
  createStyles({
    search: {
      marginBottom: "10px"
    }
  })
);

const FilterRow: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const onChangeDispatch = (value: string) => {
    dispatch(setSearchValue(value));
  };

  const debounceChange = debounce(onChangeDispatch, 500);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debounceChange(e.target.value);
  };

  return (
    <Grid item xs={12} className={classes.search}>
      <TextField
        name="search"
        label="Поиск"
        onChange={onSearchChange}
        fullWidth
      />
    </Grid>
  );
};

export default FilterRow;
