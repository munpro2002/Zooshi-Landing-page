import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import classes from "./Header.module.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";

const Header: React.FC<{}> = () => {
  const [isActiveBar, setIsActiveBar] = useState(false);
  const [isScrollNavBar, setIsScrollNavBar] = useState(false);
  const controlNavBarHandler = () => {
    if (window.scrollY > 20) {
      setIsScrollNavBar(true);
    } else {
      setIsScrollNavBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavBarHandler);
    return () => {
      window.removeEventListener("scroll", controlNavBarHandler);
    };
  }, []);

  return (
    <Navbar
      className={`${
        isScrollNavBar ? classes["header--scroll"] : classes.header
      }`}
      expand="lg"
    >
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => {
            setIsActiveBar((prev) => !prev);
          }}
          aria-controls="basic-navbar-nav"
          bsPrefix={`
            ${classes["header__nav-toggle"]} ${
            isActiveBar ? classes.active : ""
          }`}
          as="div"
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end flex-grow-0"
        >
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="home"
              className={classes["header__nav-item"]}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="about-section"
              className={classes["header__nav-item"]}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="menu-section"
              className={classes["header__nav-item"]}
            >
              Menu
            </Nav.Link>
            <Nav.Link
              as={Link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="event-section"
              className={classes["header__nav-item"]}
            >
              Event
            </Nav.Link>
            <Nav.Link
              as={Link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={classes["header__nav-item"]}
              to="visit-section"
            >
              Visit Us
            </Nav.Link>
            <button className={classes["header__nav-button"]}>
              Book A Table
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
