import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { useAuth } from "../context/auth";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useCart } from "../context/cart";
import Searchinput from "./Searchinput";

function Header() {
  const [auth, setAuth] = useAuth();
const [cart]=useCart()
  function handlelogout() {
    localStorage.removeItem("auth");
    setAuth({
      user: null,
      token: "",
    });
  }

  return (
    <Navbar className="bg-secondary"variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold flex-grow-1">
          Online Shopping
        </Navbar.Brand>

        <Searchinput/>
        
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-center">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>

            {!auth.user ? (
              <>
                <NavLink to="/signup" className="nav-link">
                  Sign Up
                </NavLink>
                <NavLink to="/signin" className="nav-link">
                  Sign In
                </NavLink>
              </>
            ) : (
              <NavDropdown title={auth?.user.name} id="basic-nav-dropdown">
                <NavLink
                  to={`/dashboard/${auth.user.role === 1 ? "admin" : "user"}`}
                  className="dropdown-item"
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to="/signin"
                  className="dropdown-item"
                  onClick={handlelogout}
                >
                  Sign out
                </NavLink>
              </NavDropdown>
            )}

            <NavLink to="/cartitems" className="nav-link d-flex align-items-center">
              <CiShoppingCart size={22} /> <sup>{cart.length}</sup>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
