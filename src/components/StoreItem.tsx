import { Button, Card } from 'react-bootstrap';
import { formatCurrency } from './../utility/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContext';
type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="250px"
        style={{ objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <div>
            <span className="fs-2">{name}</span>
          </div>
          <div>
            <span className="ms-2 text-muted">{formatCurrency(price)}</span>
          </div>
        </Card.Title>
        <div className="mt-auto">
          {quantity <= 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              + Add to Cart
            </Button>
          ) : (
            <>
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ gap: '.5rem' }}
              >
                <Button onClick={() => increaseCartQuantity(id)}>+ </Button>
                <div>
                  <span className="fs-3">{quantity} in cart </span>
                </div>
                <Button onClick={() => decreaseCartQuantity(id)}>- </Button>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Button
                  onClick={() => removeFromCart(id)}
                  className=" fs-6 bg-danger"
                  style={{ border: 'unset' }}
                >
                  Remove
                </Button>
              </div>
            </>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
