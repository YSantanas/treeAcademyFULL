import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Navbar as RBNavbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Arbol from '../assets/logoArbol.png';

const Navbar = () => {
  return (
    <RBNavbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <img src={Arbol} alt="" width="50" height="45" className="mx-auto"></img>

      <Container>
        <NavLink to="/" className="navbar-brand">
          Tree Academy
        </NavLink>
        <RBNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <RBNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/acerca" className="nav-link">
              Acerca
            </NavLink>
            <NavLink to="/registro" className="nav-link">
              Registro
            </NavLink>
            <NavLink to="/catalogo" className="nav-link">
              Cursos
            </NavLink>
            <NavLink to="/planes" className="nav-link">
             Planes
            </NavLink>
          </Nav>
          <Nav>
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
          </Nav>
        </RBNavbar.Collapse>
      </Container>
    </RBNavbar>
  );
};
export default Navbar;
