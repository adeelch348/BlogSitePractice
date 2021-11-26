import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const ProtectedRoute = (props) => {
  let Cmp = props.Cmp;
  let history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("Token")) {
      history.push("./dashboard");
    } else {
      history.push("./login");
    }
  }, []);
  return (
    <div>
      <Cmp />
    </div>
  );
};

export default ProtectedRoute;
