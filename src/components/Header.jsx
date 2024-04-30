import "./Header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";


function Header() {

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
            <Link className="link-navbar text-decoration-none text-white" to={"/"}>
              Home
            </Link>
            <Link className="link-navbar text-decoration-none text-white" to={"/menu"}>
              Menù
            </Link>
            <Link className="link-navbar text-decoration-none text-white" to={"/about"}>
              Chi siamo
            </Link>
            <Link className="link-navbar text-decoration-none text-white" to={"/dove-siamo"}>
              Dove siamo
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;