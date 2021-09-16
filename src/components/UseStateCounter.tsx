import React, { useState } from "react";
import {
  Button,
  Typography,
  Grid,
  createStyles,
  makeStyles,
  Theme,
  Paper,
  ThemeProvider,
  createTheme,
} from "@material-ui/core";

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
    marginTop: {
      margin: "15px 0 0 0",
    },
  })
);

const theme = createTheme({
  palette: {
    primary: {
      main: "#5F1A37",
    },
    secondary: {
      main: "#776885",
    },
  },
});

const UseStateCounter = () => {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <Grid className={classes.grid} container spacing={3} xs={12}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            {<h1>useState</h1>}
            <Typography>
              {" "}
              This uses the useState Hook to control the `count` state{" "}
            </Typography>
            <Typography> The count now is {count} </Typography>
            <ThemeProvider theme={theme}>
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
            </ThemeProvider>
            <Grid className={classes.marginTop} item xs={12}>
              <Typography>The following is useState with object</Typography>
            </Grid>
            <Grid item xs={12}>
              <form>
                <input
                  type="text"
                  value={name.firstName}
                  onChange={(e) =>
                    setName({
                      firstName: e.target.value,
                      lastName: name.lastName,
                    })
                  }
                />
                <input
                  type="text"
                  value={name.lastName}
                  onChange={(e) =>
                    setName({
                      firstName: name.firstName,
                      lastName: e.target.value,
                    })
                  }
                />
                <h2>Your first name is - {name.firstName}</h2>
                <h2>Your last name is - {name.lastName}</h2>
              </form>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default UseStateCounter;
