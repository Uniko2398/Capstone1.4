import { Container, Row, Col, Image } from "react-bootstrap";

const promoItems = [
  { img: "https://placecats.com/50/50", caption: "Guarda Che Spettacolo!" },
  { img: "https://placecats.com/50/50", caption: "Il clima che cercavi" },
  {
    img: "https://placecats.com/50/50",
    caption: "Accessori per prestazioni al top",
  },
  { img: "https://placecats.com/50/50", caption: "Smarthome Casa Sicura" },
  {
    img: "https://placecats.com/50/50",
    caption: "Extra sconto ricondizionati",
  },
  {
    img: "https://placecats.com/50/50",
    caption: "Consegna Gratis Elettrodomestici",
  },

  { img: "https://placecats.com/50/50", caption: "Il tuo nuovo iPhone" },
  { img: "https://placecats.com/50/50", caption: "MacBook Air M4" },
  { img: "https://placecats.com/50/50", caption: "Accessori Apple" },
  { img: "https://placecats.com/50/50", caption: "Scopri tutte le puntate" },
  {
    img: "https://placecats.com/50/50",
    caption: "Motorola. L’innovazione sta arrivando",
  },
  { img: "https://placecats.com/50/50", caption: "Preordinala ora!" },
];

const SquaresSection = () => {
  return (
    <Container className="my-5">
      <Row className="mb-4">
        {promoItems.slice(0, 6).map((item, idx) => (
          <Col key={idx} xs={6} md={2} className="text-center mb-4 p-4">
            <Image
              src={item.img}
              alt={item.caption}
              fluid
              rounded
              style={{
                borderRadius: "1.25rem",
                height: "100px",
                objectFit: "cover",
              }}
            />
            <div className="mt-2 fw-semibold">{item.caption}</div>
          </Col>
        ))}
      </Row>
      <Row>
        {promoItems.slice(6).map((item, idx) => (
          <Col key={idx} xs={6} md={2} className="text-center mb-4">
            <Image
              src={item.img}
              alt={item.caption}
              fluid
              rounded
              style={{
                borderRadius: "1.25rem",
                height: "100px",
                objectFit: "cover",
              }}
            />
            <div className="mt-2 fw-semibold">{item.caption}</div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SquaresSection;
