import { Container, Row, Col, Button, Card } from "react-bootstrap";

const HeroComp = () => {
  return (
    <Container className="my-5">
      <Card className="rounded-4 overflow-hidden shadow-sm">
        <Row className="g-0">
          <Col
            xs={12}
            md={8}
            className="d-flex align-items-center justify-content-center order-1 order-md-2"
            style={{
              height: "auto",
              minHeight: "220px",
            }}
          >
            <Card.Img
              src="https://placecats.com/800/400"
              alt="Marchi MediaWorld"
              className="img-fluid"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderTopRightRadius: "0",

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
              height: "auto",
              minHeight: "220px",
            }}
          >
            <h5 className="text-uppercase fw-bold small mb-2">
              I NOSTRI MARCHI
            </h5>
            <h2 className="fw-bold mb-2">MediaWorld: i nostri marchi</h2>
            <h3 className="fw-bold fst-italic mb-3">Koenic, Peaq, ok. e ISY</h3>
            <p className="text-muted">
              Scopri i nostri marchi, pensati per tutti coloro che desiderano
              dispositivi di qualità a prezzi accessibili!
            </p>
            <Button
              variant="outline-dark"
              className="mt-2 rounded-pill px-4 py-2 align-self-start"
            >
              Scopri tutti i prodotti
            </Button>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default HeroComp;
