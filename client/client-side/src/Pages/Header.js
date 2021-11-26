import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  let user = JSON.parse(localStorage.getItem("Token"));
  const history = useHistory();
  const LogOut = () => {
    localStorage.clear();
    history.push("/login");
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/" className="ms-5">
          NavBar
        </Navbar.Brand>
        <Nav
          className="d-flex ml-auto justify-content-end"
          style={{ width: "100%" }}
        >
          {localStorage.getItem("Token") ? (
            <>
              <Link to="/dashboard" className="mx-5">
                Dashboard
              </Link>
              <NavDropdown title={user && user.name}>
                <NavDropdown.Item onClick={LogOut}>Logout</NavDropdown.Item>
              </NavDropdown>
            </>
          ) : (
            <>
              <Link to="/" className="mx-5">
                Home
              </Link>
              <Link to="/login" className="mx-5">
                Login
              </Link>
            </>
          )}
        </Nav>
      </Navbar>
    </div>
  );
};
export default Header;
