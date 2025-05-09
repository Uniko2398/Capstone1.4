import React, { useRef, useState } from "react";
import { Card, Badge, Button, Container } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const promoData = [
  {
    title: "iPhone 16 Pro Max 256GB",
    subtitle: "TUTTO VERO TASSO ZERO",
    text: "60€ di Supervalutazione con IChange. Ottieni fino al 600€",
    image: "https://placecats.com/300/200",
    badges: ["In negozio e online", "Fino al 24 aprile"],
    label: "Finanziamento Tasso Zero",
  },
  {
    title: "Supervalutiamo il tuo usato",
    subtitle: "RISPARMIA CON SCHANGE",
    text: "Con SChange Valutiamo e Supervalutiamo il tuo dispositivo usato.",
    image: "https://placecats.com/300/200",
    badges: ["SChange | Dall'11 al 24 aprile"],
    label: "Valuta il tuo usato",
  },
  {
    title: "Ricevi 120€ di sconto in estratto conto",
    subtitle: "LET'S GO!",
    text: "Richiedi Carta di Credito Oro American Express e ricevi 120€ di sconto.",
    image: "https://placecats.com/300/200",
    badges: ["In negozio e online", "Fino al 10 giugno"],
    label: "Scopri come",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    partialVisibilityGutter: 20,
  },
};

const BigCardComp: React.FC = () => {
  const carouselRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    carouselRef.current?.next();
  };

  const previous = () => {
    carouselRef.current?.previous();
  };

  const goToSlide = (index: number) => {
    carouselRef.current?.goToSlide(index);
    setCurrentSlide(index);
  };

  return (
    <Container className="my-5">
      <Carousel
        ref={carouselRef}
        responsive={responsive}
        arrows={false}
        infinite
        keyBoardControl
        showDots={false}
        itemClass="px-3"
        containerClass="pb-4"
        beforeChange={(nextSlide) => setCurrentSlide(nextSlide)}
      >
        {promoData.map((item, index) => (
          <div key={index} className="d-flex justify-content-center">
            <Card
              className="h-100 shadow-sm rounded-4"
              style={{
                minHeight: "470px",
                maxHeight: "470px",
                width: "600px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.title}
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <div className="mb-2">
                    {item.badges.map((b, i) => (
                      <Badge
                        bg="light"
                        text="dark"
                        className="me-2 border border-dark"
                        key={i}
                      >
                        {b}
                      </Badge>
                    ))}
                  </div>
                  <Card.Subtitle className="text-uppercase fw-bold small">
                    {item.subtitle}
                  </Card.Subtitle>
                  <Card.Title className="fw-bold fst-italic">
                    {item.title}
                  </Card.Title>
                  <Card.Text className="flex-grow-1">{item.text}</Card.Text>
                </Card.Body>
              </div>
              <div className="p-3">
                <Button variant="outline-dark" size="sm" className="w-100">
                  {item.label}
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </Carousel>

      <div className="d-flex justify-content-between align-items-center mt-4 px-3">
        <div>
          <Button
            variant="light"
            onClick={previous}
            className="me-2 border rounded-circle p-2"
          >
            <ChevronLeft color="black" />
          </Button>
          <Button variant="dark" onClick={next} className="rounded-circle p-2">
            <ChevronRight color="white" />
          </Button>
        </div>

        <div className="d-flex align-items-center">
          {promoData.map((_, idx) => (
            <div
              key={idx}
              onClick={() => goToSlide(idx)}
              style={{
                width: idx === currentSlide ? "24px" : "12px",
                height: "6px",
                backgroundColor: idx === currentSlide ? "black" : "lightgray",
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

export default BigCardComp;
