// src/components/ProductCard.tsx
import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col, Badge } from "react-bootstrap";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa";
import { useCart, Product } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  const {
    id,
    title,

    image,
    price,
    oldPrice,
    rating,
    specs = {},
    badges = [],
  } = product;

  const { addToCart } = useCart();
  const [wishlist, setWishlist] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("wishlist");
    if (stored) setWishlist(JSON.parse(stored));
  }, []);

  const isInWishlist = wishlist.includes(id);

  const toggleWishlist = () => {
    const updated = isInWishlist
      ? wishlist.filter((pid) => pid !== id)
      : [...wishlist, id];
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));

    const event = new CustomEvent("wishlistUpdated", {
      detail: updated.length,
    });
    window.dispatchEvent(event);
  };

  const handleAddToCart = () => {
    addToCart({ ...product });
    const event = new CustomEvent("cartUpdated");
    window.dispatchEvent(event);
  };

  const goToProduct = () => {
    navigate(`/product/${id}`);
  };

  return (
    <Card
      className="shadow-sm border rounded-4 p-3 h-100 position-relative"
      style={{ cursor: "pointer" }}
      onClick={goToProduct}
    >
      <Row>
        <div className="d-flex justify-content-between mb-2 w-100">
          <div>
            {badges.map((b, idx) => (
              <Badge
                key={idx}
                bg="danger"
                className="me-2 mb-1 text-white text-uppercase"
              >
                {b}
              </Badge>
            ))}
          </div>
          <Button
            variant="link"
            className="text-dark p-0"
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist();
            }}
            style={{ position: "absolute", top: "10px", right: "10px" }}
          >
            {isInWishlist ? (
              <FaHeart color="red" size={18} />
            ) : (
              <FaRegHeart size={18} />
            )}
          </Button>
        </div>
      </Row>

      <Row className="mb-2">
        <Col>
          <h6 className="fw-bold text-uppercase">{title}</h6>
        </Col>
      </Row>

      <Row className="align-items-center mb-3">
        <Col sm={5}>
          <Card.Img
            src={image}
            alt={title}
            className="img-fluid"
            style={{ maxHeight: "240px", objectFit: "contain" }}
          />
        </Col>
        <Col sm={7}>
          <div style={{ fontSize: "0.9rem" }}>
            {Object.entries(specs).map(([key, value]) => (
              <div key={key}>
                <strong>{key}:</strong> {value}
              </div>
            ))}
          </div>
        </Col>
      </Row>

      <Row className="align-items-center mb-3">
        <Col>
          {oldPrice && oldPrice > price && (
            <div>
              <Badge bg="danger" className="me-2">
                -{Math.round(((oldPrice - price) / oldPrice) * 100)}%
              </Badge>
              <small className="text-muted">
                <del>{oldPrice.toFixed(2)} €</del>
              </small>
            </div>
          )}
          <h5 className="text-danger fw-bold mt-1">{price.toFixed(2)} €</h5>
        </Col>
        <Col className="text-end">
          {rating ? (
            <Button
              variant="link"
              className="p-0 text-warning"
              onClick={(e) => e.stopPropagation()}
            >
              {Array.from({ length: Math.floor(rating) }).map((_, idx) => (
                <FaStar key={idx} />
              ))}
              <span className="text-muted ms-1">({rating})</span>
            </Button>
          ) : (
            <span className="text-muted small">Nessuna recensione</span>
          )}
        </Col>
      </Row>

      <Row>
        <Col>
          <Button
            variant="dark"
            className="w-100"
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart();
            }}
          >
            🛒 Aggiungi al carrello
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductCard;
