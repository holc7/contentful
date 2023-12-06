import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo1.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer-wrapper">
        <div className="bg-body-tertiary-footer">
          <div id="container-footer">
            <div className="footer-content">
              <img src={logo} alt="logo" width={80} />
              <Navbar.Brand href="#home">
                Group 1 Contentful Project
              </Navbar.Brand>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
