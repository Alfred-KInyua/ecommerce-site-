import { Button, Card } from 'react-bootstrap';
import { formatCurrency } from './../utility/formatCurrency';
type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const quantity = 1;
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
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
            <Button className="w-100">+ Add to Cart</Button>
          ) : (
            <>
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ gap: '.5rem' }}
              >
                <Button>+ </Button>
                <div>
                  <span>{quantity} cart </span>
                </div>
                <Button>- </Button>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Button>- Remove</Button>
              </div>
            </>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
