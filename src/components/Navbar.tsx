import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import cart from './../assets/cart.svg';

export function Navbar() {
  return (
    <>
      <NavbarBs className="bg-white shadow-sm mb-3">
        <Container className="me-auto">
          <Nav>
            <Nav.Link to={'./'} as={NavLink}>
              Home
            </Nav.Link>
            <Nav.Link to={'/about'} as={NavLink}>
              About
            </Nav.Link>
            <Nav.Link to={'./store'} as={NavLink}>
              Store
            </Nav.Link>
          </Nav>
          <Button
            style={{ width: '3rem', height: '3rem' }}
            variant="outline-primary"
            className="rounded-circle"
          >
            <img src={cart} />
          </Button>
        </Container>
      </NavbarBs>
    </>
  );
}
