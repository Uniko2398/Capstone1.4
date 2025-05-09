import React from "react";
import { Container, Row, Col, Button, Form, Image } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CartPage: React.FC = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    totalPrice,
    clearCart,
  } = useCart();

  const navigate = useNavigate();

  const handleCheckout = () => {
    clearCart();
    navigate("/thank-you");
  };

  return (
    <Container className="my-4">
      <h3>Carrello</h3>
      <Row>
        <Col md={8}>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="d-flex justify-content-between align-items-center p-3 border rounded mb-3"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
                style={{ objectFit: "contain" }}
              />
              <div className="flex-grow-1 mx-3">
                <h6 className="fw-bold mb-1">{item.title}</h6>
                <div className="text-danger fw-bold">
                  {item.price.toFixed(2)} €
                </div>
              </div>
              <div className="d-flex align-items-center">
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => decreaseQty(item.id)}
                >
                  <FaMinus />
                </Button>
                <span className="mx-2">{item.quantity}</span>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => increaseQty(item.id)}
                >
                  <FaPlus />
                </Button>
              </div>
              <Button
                variant="link"
                className="text-danger ms-3"
                onClick={() => removeFromCart(item.id)}
              >
                <FaTrash />
              </Button>
            </div>
          ))}
        </Col>

        <Col md={4}>
          <div className="border rounded p-3">
            <h5>Riepilogo ordine</h5>
            <hr />
            <p>
              Totale prodotti:{" "}
              <span className="fw-bold">{totalPrice.toFixed(2)} €</span>
            </p>
            <Form.Group>
              <Form.Label>Codice promozionale</Form.Label>
              <Form.Control type="text" placeholder="Inserisci codice" />
            </Form.Group>
            <Button
              variant="danger"
              className="w-100 mt-3"
              onClick={handleCheckout}
            >
              Paga ora
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
