import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import cart from './../assets/cart.svg';
import { useShoppingCart } from '../context/ShoppingCartContext';

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <>
      <NavbarBs sticky="top" className=" bg-secondary shadow-sm mb-3">
        <Container className="me-auto">
          <Nav>
            <Nav.Link to={'./'} as={NavLink}>
              Home
            </Nav.Link>
          </Nav>
          {cartQuantity > 0 && (
            <Button
              onClick={openCart}
              style={{ width: '3rem', height: '3rem', position: 'relative' }}
              className="rounded-circle btn-style"
              variant="outline-primary"
            >
              <img src={cart} />
              <div
                style={{
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
                }}
                className="rounded-circle bg-danger"
              >
                {cartQuantity}
              </div>
            </Button>
          )}
        </Container>
      </NavbarBs>
    </>
  );
}
