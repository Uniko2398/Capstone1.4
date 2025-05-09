import React, { useState } from "react";
import { Container, Carousel, Row, Col, Button, Card } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

const carouselData = [
  {
    title: "MediaWorld: i nostri marchi",
    subtitle: "I NOSTRI MARCHI",
    highlight: "Koenic, Peaq, ok. e ISY",
    description:
      "Scopri i nostri marchi, pensati per tutti coloro che desiderano dispositivi di qualità a prezzi accessibili!",
    image: "https://placecats.com/800/400",
  },
  {
    title: "Tecnologia per tutti",
    subtitle: "NUOVI ARRIVI",
    highlight: "Ultime novità tech",
    description: "Scopri gli ultimi dispositivi disponibili al miglior prezzo!",
    image: "https://placecats.com/800/400",
  },
  {
    title: "Tecnologia per tutti",
    subtitle: "NUOVI ARRIVI",
    highlight: "Ultime novità tech",
    description: "Scopri gli ultimi dispositivi disponibili al miglior prezzo!",
    image: "https://placecats.com/800/400",
  },
  {
    title: "Tecnologia per tutti",
    subtitle: "NUOVI ARRIVI",
    highlight: "Ultime novità tech",
    description: "Scopri gli ultimi dispositivi disponibili al miglior prezzo!",
    image: "https://placecats.com/800/400",
  },
];

const HeroSlideComp: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const prevSlide = () => {
    setIndex(index === 0 ? carouselData.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === carouselData.length - 1 ? 0 : index + 1);
  };

  return (
    <Container className="my-5">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        controls={false}
        indicators={false}
        interval={null}
      >
        {carouselData.map((item, idx) => (
          <Carousel.Item key={idx}>
            <Card className="rounded-4 overflow-hidden shadow-sm">
              <Row className="g-0">
                <Col
                  xs={12}
                  md={8}
                  className="d-flex align-items-center justify-content-center order-1 order-md-2"
                  style={{
                    minHeight: "220px",
                  }}
                >
                  <Card.Img
                    src={item.image}
                    alt={item.highlight}
                    className="img-fluid w-100"
                    style={{
                      height: "100%",
                      objectFit: "cover",
                      borderTopLeftRadius: "1rem",
                      borderBottomRightRadius: "1rem",
                    }}
                  />
                </Col>

                <Col
                  xs={12}
                  md={4}
                  className="p-4 d-flex flex-column justify-content-center order-2 order-md-1"
                  style={{
                    backgroundColor: "#f8f9fa",
                    minHeight: "220px",
                  }}
                >
                  <h2 className="fw-bold mb-3">{item.title}</h2>
                  <h5 className="text-uppercase fw-bold">{item.subtitle}</h5>
                  <h3 className="fw-bold fst-italic">{item.highlight}</h3>
                  <p className="text-muted">{item.description}</p>
                  <Button
                    variant="outline-dark"
                    className="mt-2 rounded-pill px-4 py-2 align-self-start"
                  >
                    Scopri tutti i prodotti
                  </Button>
                </Col>
              </Row>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="d-flex justify-content-between align-items-center mt-3 px-3">
        <div>
          <Button
            variant="light"
            onClick={prevSlide}
            className="me-2 border rounded-circle p-2"
          >
            <ChevronLeft color="black" />
          </Button>
          <Button
            variant="dark"
            onClick={nextSlide}
            className="rounded-circle p-2"
          >
            <ChevronRight color="white" />
          </Button>
        </div>

        <div className="d-flex align-items-center">
          {carouselData.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setIndex(idx)}
              style={{
                width: idx === index ? "24px" : "12px",
                height: "6px",
                backgroundColor: idx === index ? "black" : "lightgray",
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

export default HeroSlideComp;
