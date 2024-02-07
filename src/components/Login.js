import React, { useState } from "react";
import PropTypes from "prop-types";
import { loginUser } from "../utils";

export default function Login({ setToken }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div className="login-wrapper">
      <div className="login-block">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              placeholder="username"
              required
              type="text"
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              required
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div>
            <button className="button-submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
