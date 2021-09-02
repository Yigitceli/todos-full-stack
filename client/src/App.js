import NavBar from "./components/navBar/NavBar";
import Todos from "./components/todos/todos";
import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Log from "./components/log/log";
import { useEffect } from "react";
import axios from "axios";
import { logIn } from "./store/userSlice";
import { fetchTodos, setFetch } from "./store/todosSlice";
// 
function App() {
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://todos-serverside.herokuapp.com/api/user/logged", { withCredentials: true })
      .then((response) => {        
        if (response.data.loggedIn) {                   
          dispatch(logIn(response.data.user));
          
          
        }
      });
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {!loggedIn ? <Log /> : <Redirect to="/todos" />}
          </Route>
          <Route exact path="/todos">
            {!loggedIn && <Redirect to="/" />}
            <NavBar />
            <Todos />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
