import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import cart from './../assets/cart.svg';

export function Navbar() {
  const s = { style: { width: '3rem', height: '3rem', position: 'relative' } };
  const small = {
    style: {
      width: '1.5rem',
      height: '1.5rem',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
      right: 0,
      transform: 'translate(25%,25%)',
    },
  };
  return (
    <>
      <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
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
            style={s.style}
            className="rounded-circle btn-style"
            variant="outline-primary"
          >
            <img src={cart} />
            <div style={small.style} className="rounded-circle bg-danger">
              3
            </div>
          </Button>
        </Container>
      </NavbarBs>
    </>
  );
}
