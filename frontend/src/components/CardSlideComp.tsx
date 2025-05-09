import React, { useState } from "react";
import { Container, Card, Button, Badge } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

const featuredItems = [
  {
    id: 1,
    badge: "CONSEGNA GRATUITA ONLINE",
    image: "https://placecats.com/300/200",
    title: "CONTROLLER SONY DualSense V2",
    rating: 4.5,
    reviews: 261,
    priceOld: 64.99,
    priceNew: 59.99,
    discount: 7.69,
  },
  {
    id: 2,
    image: "https://placecats.com/300/200",
    title: "Consenti consigli sui prodotti",
    description:
      "Ti consiglieremo prodotti adatti a te sulla base dei tuoi interessi. Se sei concorde accetta questo punto",
    button: "Attiva",
  },
  {
    id: 3,
    badge: "NOVITÀ · PREORDINE",
    image: "https://placecats.com/300/200",
    title: "NINTENDO Switch 2+Mario Kart World, NERO",
    rating: 0,
    reviews: 0,
    priceNew: 509.99,
  },
  {
    id: 4,
    badge: "TASSO ZERO",
    image: "https://placecats.com/300/200",
    title: "APPLE iPhone 16 Pro Max 256GB Titanio nero",
    rating: 4.5,
    reviews: 157,
    priceOld: 1489.0,
    priceNew: 1299.0,
  },
  {
    id: 5,
    badge: "CONSEGNA GRATUITA ONLINE",
    image: "https://placecats.com/300/200",
    title: "APPLE AirPods 4",
    rating: 4.5,
    reviews: 360,
    priceOld: 149.0,
    priceNew: 129.99,
  },
  {
    id: 6,
    badge: "CONSEGNA GRATUITA ONLINE",
    image: "https://placecats.com/300/200",
    title: "CONTROLLER SONY DualSense V2",
    rating: 4.5,
    reviews: 261,
    priceOld: 64.99,
    priceNew: 59.99,
    discount: 7.69,
  },
  {
    id: 7,
    image: "https://placecats.com/300/200",
    title: "Consenti consigli sui prodotti",
    description:
      "Ti consiglieremo prodotti adatti a te sulla base dei tuoi interessi. Se sei concorde accetta questo punto",
    button: "Attiva",
  },
  {
    id: 8,
    badge: "NOVITÀ · PREORDINE",
    image: "https://placecats.com/300/200",
    title: "NINTENDO Switch 2+Mario Kart World, NERO",
    rating: 0,
    reviews: 0,
    priceNew: 509.99,
  },
  {
    id: 9,
    badge: "TASSO ZERO",
    image: "https://placecats.com/300/200",
    title: "APPLE iPhone 16 Pro Max 256GB Titanio nero",
    rating: 4.5,
    reviews: 157,
    priceOld: 1489.0,
    priceNew: 1299.0,
  },
  {
    id: 10,
    badge: "CONSEGNA GRATUITA ONLINE",
    image: "https://placecats.com/300/200",
    title: "APPLE AirPods 4",
    rating: 4.5,
    reviews: 360,
    priceOld: 149.0,
    priceNew: 129.99,
  },
];

const ITEMS_PER_PAGE = 4;

const CardSlideComp: React.FC = () => {
  const [pageIndex, setPageIndex] = useState(0);

  const maxPages = Math.ceil(featuredItems.length / ITEMS_PER_PAGE);

  const prevPage = () => {
    setPageIndex(pageIndex === 0 ? maxPages - 1 : pageIndex - 1);
  };

  const nextPage = () => {
    setPageIndex(pageIndex === maxPages - 1 ? 0 : pageIndex + 1);
  };

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="fw-bold mb-0">In primo piano</h3>
      </div>

      <div
        className="overflow-hidden position-relative"
        style={{ width: "100%" }}
      >
        <div
          className="d-flex"
          style={{
            width: `${maxPages * 100}%`,
            transform: `translateX(-${pageIndex * (100 / maxPages)}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {Array.from({ length: maxPages }).map((_, pageIdx) => {
            const start = pageIdx * ITEMS_PER_PAGE;
            const pageItems = featuredItems.slice(
              start,
              start + ITEMS_PER_PAGE
            );

            return (
              <div
                key={pageIdx}
                style={{
                  flex: `0 0 ${100 / maxPages}%`,
                  display: "flex",
                  justifyContent: "start",
                  gap: "1rem",
                  padding: "1rem 0",
                }}
              >
                {pageItems.map((item, idx) => (
                  <Card
                    key={idx}
                    style={{
                      minWidth: "250px",
                      maxWidth: "250px",
                      flex: "0 0 auto",
                      height: "400px",
                    }}
                    className="border shadow-sm"
                  >
                    {item.badge && (
                      <Badge
                        bg="light"
                        text="dark"
                        className="border rounded-pill px-2 py-1 m-2 align-self-start"
                      >
                        {item.badge}
                      </Badge>
                    )}
                    <Card.Img
                      variant="top"
                      src={item.image}
                      style={{
                        height: "160px",
                        objectFit: "cover",
                        padding: "1rem",
                      }}
                    />
                    <Card.Body className="d-flex flex-column justify-content-between">
                      <div>
                        <Card.Title className="fs-6">{item.title}</Card.Title>
                        {item.description && (
                          <Card.Text className="text-muted">
                            {item.description}
                          </Card.Text>
                        )}
                        {item.rating !== undefined && (
                          <div className="text-danger small mb-2">
                            {"★".repeat(Math.floor(item.rating)) +
                              (item.rating % 1 >= 0.5 ? "½" : "")}{" "}
                            <span className="text-muted">({item.reviews})</span>
                          </div>
                        )}
                        {item.priceNew && (
                          <>
                            {item.priceOld && (
                              <div className="text-muted small mb-1">
                                {item.discount && (
                                  <Badge bg="danger" className="me-2">
                                    -{item.discount.toFixed(2)}%
                                  </Badge>
                                )}
                                <del>{item.priceOld.toFixed(2)} €</del>
                              </div>
                            )}
                            <h5 className="text-danger fw-bold">
                              {item.priceNew.toFixed(2)} €
                            </h5>
                          </>
                        )}
                      </div>
                      {item.button && (
                        <Button variant="dark" className="mt-2 w-100">
                          {item.button}
                        </Button>
                      )}
                    </Card.Body>
                  </Card>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-4 px-3">
        <div>
          <Button
            variant="light"
            onClick={prevPage}
            className="me-2 border rounded-circle p-2"
          >
            <ChevronLeft color="black" />
          </Button>
          <Button
            variant="dark"
            onClick={nextPage}
            className="rounded-circle p-2"
          >
            <ChevronRight color="white" />
          </Button>
        </div>

        <div className="d-flex align-items-center">
          {Array.from({ length: maxPages }).map((_, idx) => (
            <div
              key={idx}
              onClick={() => setPageIndex(idx)}
              style={{
                width: idx === pageIndex ? "24px" : "12px",
                height: "6px",
                backgroundColor: idx === pageIndex ? "black" : "lightgray",
                borderRadius: "3px",
                margin: "0 4px",
                transition: "all 0.3s",
                cursor: "pointer",
              }}
            ></div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default CardSlideComp;
