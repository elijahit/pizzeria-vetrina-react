import "./Header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";


function Header({isPage}) {

  return (
    <Navbar id="navbar" expand="lg" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <Link className="text-decoration-none text-white" to={"/"}>
            <img
              alt=""
              src="/src/assets/pizza.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Pizzeria Tosto
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id="navigation-principal" className="ms-auto d-lg-flex align-items-lg-center gap-3 mt-3 mt-lg-0">
            <Link className={isPage == "home" ? "link-navbar text-decoration-none text-white" : "link-navbar text-decoration-none text-white-50"} to={"/"}>
              Home
            </Link>
            <Link className={isPage == "menu" ? "link-navbar text-decoration-none text-white" : "link-navbar text-decoration-none text-white-50"} to={"/menu"}>
              Menù
            </Link>
            <Link className={isPage == "about" ? "link-navbar text-decoration-none text-white" : "link-navbar text-decoration-none text-white-50"} to={"/about"}>
              Chi siamo
            </Link>
            <Link className={isPage == "dove-siamo" ? "link-navbar text-decoration-none text-white" : "link-navbar text-decoration-none text-white-50"} to={"/dove-siamo"}>
              Dove siamo
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;