/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, Row, Col } from "react-bootstrap";
import { Facebook, Instagram, Youtube } from "react-bootstrap-icons";

const FooterComp = () => {
  return (
    <div style={{ backgroundColor: "#f2f2f2", padding: "3rem 0" }}>
      <Container>
        <Row className="text-start gy-4">
          <Col xs={12} md={3}>
            <h6 className="fw-bold mb-3">CONTATTACI</h6>
            <p className="mb-2">
              Supporto clienti
              <br />
              <a href="#" className="text-decoration-underline small">
                Leggi tutte le FAQ
              </a>
            </p>
            <p className="mb-2">
              Scrivici
              <br />
              <a href="#" className="text-decoration-underline small">
                Modulo di contatto
              </a>
            </p>

            <div className="d-flex gap-3 mt-3">
              <a href="#">
                <Facebook size={24} color="black" />
              </a>
              <a href="#">
                <Instagram size={24} color="black" />
              </a>
              <a href="#">
                <Youtube size={24} color="black" />
              </a>
            </div>
          </Col>

          <Col xs={6} md={3}>
            <h6 className="fw-bold mb-3">CATALOGO</h6>
            <ul className="list-unstyled small">
              <li>Telefonia</li>
              <li>Computer</li>
              <li>Console e videogiochi</li>
              <li>Tv e Home Cinema</li>
              <li>Grandi elettrodomestici</li>
              <li>Piccoli elettrodomestici</li>
              <li>Clima e riscaldamento</li>
              <li>Mobilità Elettrica</li>
              <li>Cura della persona</li>
              <li>Tutte le Offerte</li>
              <li>Prodotti ricondizionati</li>
              <li>Tutte le marche</li>
            </ul>
          </Col>

          <Col xs={6} md={3}>
            <h6 className="fw-bold mb-3">COMPRARE ONLINE</h6>
            <ul className="list-unstyled small">
              <li>Metodi di pagamento</li>
              <li>Costi e metodi di consegna</li>
              <li>Ritiro in negozio</li>
              <li>Username e password</li>
              <li>Contattaci</li>
              <li>Condizioni di vendita</li>
              <li>Prezzi e sconti esposti (Omnibus)</li>
              <li>Limiti di acquisto</li>
              <li>Magazine</li>
              <li>Guide all'acquisto</li>
            </ul>
          </Col>

          <Col xs={6} md={3}>
            <h6 className="fw-bold mb-3">MARKETPLACE</h6>
            <ul className="list-unstyled small">
              <li>Per i consumatori</li>
              <li>Per i venditori</li>
              <li>Punto di contatto 11 Digital Service Act</li>
            </ul>
          </Col>
        </Row>
        <Row className="text-start gy-4">
          <Col xs={12} md={3}>
            <h6 className="fw-bold my-3">SERVIZI PER I CLIENTI E LE AZIENDE</h6>
            <ul className="list-unstyled small">
              <li>Soluzioni per le AZIENDE</li>
              <li>Finanziamento</li>
              <li>Installazione</li>
              <li>Servizi Assicurativi</li>
              <li>Vai all'indice Servizi</li>
            </ul>
          </Col>
          <Col xs={12} md={3}>
            <h6 className="fw-bold mb-3 mt-4">AZIENDA E LAVORA CON NOI</h6>
            <ul className="list-unstyled small">
              <li>Chi siamo</li>
              <li>Lavora con noi</li>
              <li>Codice Etico</li>
              <li>MediaWorld Club</li>
              <li>Olimpia Milano</li>
              <li>MediaWorld Studios</li>
              <li>Retail Media advertising</li>
              <li>Proigramma di divulgazione delle vulnerabilita</li>
            </ul>
          </Col>
          <Col xs={12} md={3}>
            <h6 className="fw-bold mb-3 mt-4">
              CAMPAGNE E INIZIATIVE PER PRODOTTI VENDUTI E SPEDITI DA EPIC
            </h6>
            <ul className="list-unstyled small">
              <li>Idee Regalo</li>
              <li>Festa della mamma</li>
              <li>Festa del papà</li>
              <li>San valentino</li>
              <li>Black Friday</li>
              <li>Single's Day</li>
              <li>Cyber Monday</li>
              <li>Back to School</li>
            </ul>
          </Col>
          <Col xs={12} md={3}>
            <h6 className="fw-bold mb-3 mt-4">RECESSO, GARANZIA e PRIVACY</h6>
            <ul className="list-unstyled small">
              <li>Diritto di recesso</li>
              <li>Garanzia Legale</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComp;
