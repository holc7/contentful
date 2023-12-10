import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./HamburgerMenu.css";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
let styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "24px",
    top: "120px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    background: "rgba(255, 255, 255, 0.3)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderBottomLeftRadius: "30px",
    borderBottomRightRadius: "30px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(10px)",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
    display: "flex",
    flexDirection: "column",
    textDecoration: "none",
  },
  bmItem: {
    display: "inline-block",
    outline: "none",
    color: "black",
    textDecoration: "none",
  },
  bmOverlay: {
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    background: "none",
  },
};

const HamburgerMenu = (props) => {
  return (
    <Menu
      styles={styles}
      onStateChange={({ isOpen }) => props.onStateChange({ isOpen })}
    >
      <Nav.Link as={Link} to="/">
        Home
      </Nav.Link>

      <Nav.Link as={Link} to="/">
        About
      </Nav.Link>

      <Nav.Link as={Link} to="contact">
        Contact
      </Nav.Link>

      <Nav.Link as={Link} to="/">
        Countries
      </Nav.Link>
      <Nav.Link as={Link} to="/">
        Cities
      </Nav.Link>
    </Menu>
  );
};

export default HamburgerMenu;
