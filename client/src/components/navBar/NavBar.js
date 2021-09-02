import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logOut } from "../../store/userSlice";
import axios from 'axios';
import { setTodo } from "../../store/todosSlice";


const NavBar = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const handleClick = async (e) => {
    await axios.get("api/user/logout", {withCredentials:true});
    dispatch(setTodo([]));
    dispatch(logOut());
    history.push("/");  
  }

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className='navbar-brand' to="#">TODOS</Link>
        <div className="d-flex">
          <button onClick={handleClick} type="button btn-lg" className="btn btn-light">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
