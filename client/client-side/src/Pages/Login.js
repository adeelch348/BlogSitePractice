import React, { useState } from "react";
import "../App.css";
import { useHistory } from "react-router-dom";
import Header from "./Header";
const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("/user/login", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });
      const res = await response.json({});
      const msg = res.message;
      // setMessage(msg);
      if (response.status === 401) {
        console.log(msg);
      } else if (response.status === 200) {
        // console.log(res);
        localStorage.setItem("Token", JSON.stringify(res));
        if (localStorage.getItem("Token")) {
          history.push("/dashboard");
        }
      } else if (response.status === 404) {
        console.log(msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <div className="App">
        <div className="App-header">
          <form onSubmit={handleSubmit}>
            <h3>Login</h3>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
              <br></br>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
              <br></br>
              <input type="submit" className="mt-5"></input>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
