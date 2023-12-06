import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo1.png";

const Header = () => {
  return (
    <div>
      <header>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container className="container ">
            <img src={logo} alt="logo" width={80} />
            <Navbar.Brand href="#home">Contentful</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              className="justify-content-center"
              id="basic-navbar-nav"
            >
              <Nav className="">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <NavDropdown title="Categories" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Countries
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Cities</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Villages
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Villages
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;
