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
          <Nav id="navigation" className="ms-auto">
            <Nav.Link>
              <Link className="text-decoration-none text-white" to={"/"}>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-decoration-none text-white" to={"/menu"}>Menù</Link>
            </Nav.Link>
            <NavDropdown title="Altro" id="basic-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">Su di noi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Dove ci troviamo
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;