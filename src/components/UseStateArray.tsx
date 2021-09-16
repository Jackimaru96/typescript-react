import React, { useState } from "react";
import {
  Button,
  Grid,
  createStyles,
  makeStyles,
  Theme,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      margin: theme.spacing(2),
      padding: theme.spacing(2),
      textAlign: "center",
    },
    grid: {
      width: "80%",
      margin: "auto",
    },
    marginTop: {
      margin: "15px 0 0 0",
    },
  })
);

const UseStateArray = () => {
  const classes = useStyles();
  const [items, setItems] = useState<{ id: number; value: number }[]>([]);

  const addItem = () => {
    setItems([
      // Need to copy the array before adding new item in
      ...items,
      { id: items.length, value: Math.floor(Math.random() * 10) + 1 },
    ]);
  };
  return (
    <>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <h2>useState with Arrays</h2>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => addItem()}
            >
              Add Items{" "}
            </Button>
            <Paper className={classes.paper}>
              <ul>
                {items.map((item) => (
                  <li key={item.id}>{item.value}</li>
                ))}
              </ul>
            </Paper>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default UseStateArray;
