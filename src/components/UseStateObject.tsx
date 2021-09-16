import React, { useState } from "react";
import {
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

const UseStateObject = () => {
  const classes = useStyles();
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Grid className={classes.marginTop} item xs={12}>
            {<h2 className={classes.marginTop}> useState with Objects</h2>}
            <Typography>The following is useState with object</Typography>
          </Grid>
          <Grid item xs={12}>
            <form>
              <input
                type="text"
                placeholder="input First Name"
                value={name.firstName}
                onChange={(e) =>
                  setName({
                    ...name,
                    firstName: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="input Last Name"
                value={name.lastName}
                onChange={(e) =>
                  setName({
                    ...name,
                    lastName: e.target.value,
                  })
                }
              />
              <Typography>Your first name is - {name.firstName}</Typography>
              <Typography>Your last name is - {name.lastName}</Typography>
              <Typography>{JSON.stringify(name)}</Typography>
            </form>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default UseStateObject;
