import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { isUserLoggedIn } from "./actions";
import './App.css';
import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import Register from "./containers/RegisterPage";

function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if(!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  })

  return (
    <div className="App">
     <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={LoginPage} />   
          <Route path="/register" exact component={Register} />   
          </Switch>
          </Router>
    </div>
  );
}

export default App;
