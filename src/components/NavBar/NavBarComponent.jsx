import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidgetComponent/CartWidgetComponent';

const NavBarComponent = ()=> {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><b>Pablo's Music Store</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Tu usuario</Nav.Link>
            <Nav.Link href="#link">Notificaciones</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Instrumentos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Audio
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Preferencias
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget />
    </Navbar>
  );
}

export default NavBarComponent;