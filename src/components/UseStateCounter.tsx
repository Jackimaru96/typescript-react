import React, { useState } from "react";
import {
  Button,
  Typography,
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

const UseStateCounter = () => {
  const classes = useStyles();
  const [count, setCount] = useState(0);

  return (
    <>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          {
            <h2 className={classes.marginTop}>
              {" "}
              useState with previousState and numbers{" "}
            </h2>
          }
          <Typography>
            {" "}
            This uses the useState Hook to control the `count` state{" "}
          </Typography>
          <Typography> The count now is {count} </Typography>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setCount(count + 1)}
            >
              {" "}
              Increment 1{" "}
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setCount(count - 1)}
            >
              {" "}
              Decrement 1{" "}
            </Button>
            <Button
              variant="contained"
              color="default"
              style={{ backgroundColor: "#8DB580", color: "white" }}
              onClick={() => setCount(0)}
            >
              {" "}
              Reset{" "}
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default UseStateCounter;
