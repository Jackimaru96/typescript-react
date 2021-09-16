import React, { useReducer } from "react";
import {
  Button,
  Typography,
  createStyles,
  makeStyles,
  Theme,
  Grid,
  Paper,
} from "@material-ui/core";

interface CounterProps {
  count: number;
}

interface UpdateAction {
  type: "increment" | "decrement";
  payload: number;
}

interface ResetAction {
  type: "initial";
}

const initialState = { count: 0 };

const reducer = (state: CounterProps, action: ResetAction | UpdateAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "initial":
      return initialState;
    default:
      return state;
  }
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
    },
    grid: {
      width: "80%",
      margin: "auto",
    },
  })
);

const UseReducerCounter: React.FC = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <Grid container className={classes.grid} spacing={3} xs={12}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            {<h1>useReducer</h1>}
            <Typography>
              This uses the useReducer Hook to control the `count` state
            </Typography>
            <Typography>The count now is {state.count}</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                dispatch({ type: "increment", payload: 10 });
              }}
            >
              Increment by 10
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                dispatch({ type: "decrement", payload: 10 });
              }}
            >
              Decrement by 10
            </Button>
            <Button
              variant="contained"
              color="default"
              onClick={() => {
                dispatch({ type: "initial" });
              }}
            >
              Reset
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default UseReducerCounter;
