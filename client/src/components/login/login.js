import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../store/userSlice";
import axios from "axios";

export default function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "api/user/login",
      { username: username, password: password },
      { withCredentials: true }
    );
    const data = response.data;   
    dispatch(
      logIn({
        username: data.username,
        user_id: data.user_id,
        first_name: data.first_name,
        last_name: data.last_name
      })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2 className="text-center">Login</h2>
        <div className="mb-3">
          <label htmlFor="username-login" className="form-label">
            Username
          </label>
          <input
            type="username"
            className="form-control"
            id="username-login"
            onChange={(e) => setUsername(e.target.value.trim())}
            value={username}
          />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={password}
          onChange={(e) => setPassword(e.target.value.trim())}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <div className="d-grid gap-2">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}
