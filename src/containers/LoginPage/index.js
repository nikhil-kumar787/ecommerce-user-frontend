import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import amazonlogin from "../../images/amazon1.jpg";
import { login } from "../../actions";

import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import { Spinner } from "react-bootstrap";
import ErrorMessage from "../../components/ErrorMessage";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(50),
      height: theme.spacing(40),
    },
  },
  text: {
    "& > *": {
      margin: theme.spacing(2),
      width: "20ch",
    },
  },
  btn: {
    "& > *": {
      width: "30ch",
      
    },
  },
}));

export default function LoginPage({history}) {
  const classes = useStyles();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // const history=useHistory()
  
  const dispatch = useDispatch();

   const auth = useSelector(state => state.auth)
   
   console.log(error)

  
   console.log(auth)

  useEffect(() => {
      if (auth.authenticate) {
          history.push('/')
      }
  }, [history, auth.authenticate])

  const submitHandler = async (e) => {
      e.preventDefault();
      setLoading(true)

      dispatch(login({email, password}));
  }

  return (
    <>
      <div className="Login">
      {/* {userLogin.error && <ErrorMessage severity="error">{userLogin.error}</ErrorMessage>} */}
      {auth.error && (
                  <div style={{ color: "red", fontSize: 12 }}>{auth.message}</div>
                )}
        <div className="logoL">
          <a href="/">
            <img src={amazonlogin} className="logoimageL" alt="" />
          </a>
        </div>
        
        <div className={classes.root}>
        
          <Paper>
            <h3 className="sigin">Sign-In</h3>
            <form className={classes.text} noValidate autoComplete="off" onSubmit={submitHandler}>
              <TextField id="outlined-email" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
              <TextField
                id="outlined-password"
                label="Password"
                variant="outlined"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                className={classes.btn}
                variant="contained"
                color="primary"
                onClick={submitHandler}
                disabled={auth.loading}
              >
               {auth.loading && <CircularProgress size={30} />}
                                    {!auth.loading && 'Continue'}
                
              </Button>
            </form>
          </Paper>
        </div>

        <div>
          <h6>New to Amazon? </h6>
          <Button
            href="/register"
            className={classes.btn}
            variant="contained"
            color="default"
          >
            Create New Account
          </Button>
        </div>
      </div>

      <hr></hr>
    </>
  );
}