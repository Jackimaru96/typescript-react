import React, { useState } from "react";
import {
  Grid,
  Button,
  Paper,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";

import UseStateCounter from "./UseStateCounter";
import UseStateObject from "./UseStateObject";
import UseStateArray from "./UseStateArray";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      margin: "auto",
      padding: theme.spacing(2),
      textAlign: "center",
    },
    grid: {
      width: "100%",
      margin: "auto",
    },
    marginTop: {
      margin: "15px 0 0 0",
    },
  })
);

const UseState = () => {
  const classes = useStyles();
  const [showUseState, setShowUseState] = useState(false);
  const handleClick = () => {
    setShowUseState(!showUseState);
  };
  return (
    <div>
      <Grid className={classes.grid} container spacing={1} xs={12}>
        <Paper className={classes.paper}>
          {<h1>useState</h1>}
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => handleClick()}
          >
            Show Examples
          </Button>
          {showUseState && (
            <>
              <UseStateCounter />
              <UseStateObject />
              <UseStateArray />
            </>
          )}
        </Paper>
      </Grid>
    </div>
  );
};

export default UseState;
