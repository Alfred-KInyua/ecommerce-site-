import storeItems from '../data/item.json';
import { Row, Col } from 'react-bootstrap';
import { StoreItem } from '../components/StoreItem';

export function Home() {
  return (
    <>
      <h2>Rawaki Store</h2>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
