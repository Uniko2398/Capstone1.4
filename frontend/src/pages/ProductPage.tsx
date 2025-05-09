import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Badge,
  Card,
  Form,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProduct";
import { useCart } from "../context/CartContext";

const ProductPage: React.FC = () => {
  const { id } = useParams();
  const products = useProducts();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  if (!product)
    return <p className="text-center my-5">Prodotto non trovato.</p>;

  const { title, image, price, oldPrice, specs = {} } = product;

  const discount =
    oldPrice && oldPrice > price
      ? Math.round(((oldPrice - price) / oldPrice) * 100)
      : 0;

  return (
    <Container className="my-5">
      <Row>
        {/* IMMAGINE */}
        <Col md={6}>
          <Card className="shadow-sm p-3">
            <Card.Img
              src={image}
              alt={title}
              style={{ objectFit: "contain", maxHeight: "450px" }}
            />
            <div className="d-flex justify-content-start gap-2 mt-3">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <img
                    key={i}
                    src={image}
                    alt={`Thumb ${i}`}
                    className="border"
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "contain",
                    }}
                  />
                ))}
            </div>
          </Card>
        </Col>

        <Col md={6}>
          <h3 className="fw-bold">{title}</h3>

          {oldPrice && discount > 0 && (
            <div className="mb-2">
              <Badge bg="danger" className="me-2">
                -{discount}%
              </Badge>
              <small className="text-muted">
                <del>{oldPrice.toFixed(2)} €</del>
              </small>
            </div>
          )}
          <h2 className="text-danger fw-bold">{price.toFixed(2)} €</h2>

          <p className="text-success fw-semibold">✔️ Consegna disponibile</p>

          <div className="my-3">
            <h5 className="fw-semibold">Specifiche tecniche</h5>
            <ul className="list-unstyled">
              {Object.entries(specs).map(([label, value]) => (
                <li key={label}>
                  <strong>{label}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>

          <div className="my-3">
            <h6 className="fw-semibold">Protection disponibili:</h6>
            <Form.Check
              type="checkbox"
              label="Protection 1 anno per guasti, 1 anno per danno e 1 anno per furto (+4,99 €)"
            />
            <Form.Check
              type="checkbox"
              label="Protection 2 anni per guasti, 2 anni per danno e 2 anni per furto (+6,99 €)"
            />
          </div>

          <Button
            variant="danger"
            className="w-100 py-3 fw-bold mt-3"
            onClick={() => addToCart({ ...product, id: product.id.toString() })}
          >
            🛒 Aggiungi al carrello
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
