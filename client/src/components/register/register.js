import React, { useState } from "react";
import axios from "axios";

export default function Register(props) {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVeryify] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const {registered, setRegistered} = props;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === passwordVerify) {
      const response = await axios.post(
        "api/user/register",
        {
          username: username,
          password: password,
          firstName: firstName,
          lastName: lastName
        }
        
      );
      

      if (!response.data.user_id) {
        setErrors((prev) => [...prev, response.data]);
      } else {
        setErrors([]);
        setUsername("");
        setPassword("");
        setPasswordVeryify("");
        setFirstName("");
        setLastName("");
        setRegistered(true);
        
        
      }
    } else {
      if (errors.find((item) => item === "Passwords do not match.")) {
        setErrors((prev) => [...prev]);
      } else {
        setErrors((prev) => [...prev, "Passwords do not match."]);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container errors">
        <ul>
          {errors.map((item) => (
            <li key={errors.findIndex((item) => item)}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-center">Register</h2>
        {registered && <h3 className='text-center'><strong>You are successfully registered.</strong></h3>}
        <div className="mb-3">
          <label htmlFor="username-login" className="form-label">
            Username
          </label>
          <input
            type="username"
            className="form-control"
            id="username-login"
            value={username}
            onChange={(e) => setUsername(e.target.value.trim())}
          />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="Password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value.trim())}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Password-verify" className="form-label">
          Verify Password
        </label>
        <input
          type="password"
          className="form-control"
          id="Password-verify"
          value={passwordVerify}
          onChange={(e) => setPasswordVeryify(e.target.value.trim())}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="first-name" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value.trim())}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="last-name" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="last-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value.trim())}
        />
      </div>
      <div className="d-grid gap-2">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}
