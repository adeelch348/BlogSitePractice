import React, { useEffect } from "react";
// import Logout from "./Logout";
import { withRouter, useHistory } from "react-router-dom";
import Header from "./Header";

const Dashboard = () => {
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("Token")) {
      history.push("./dashboard");
    } else {
      history.push("./login");
    }
  }, []);

  return (
    <>
      <Header />
      <h1>Welcome to Dashboard</h1>
    </>
  );
};

export default withRouter(Dashboard);
