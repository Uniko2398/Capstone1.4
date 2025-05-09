import React, { useState, useEffect, useContext } from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  Badge,
  Row,
  Alert,
} from "react-bootstrap";
import { FaHeart, FaShoppingCart, FaUserCircle, FaBars } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function NavbarComp() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("wishlist");
    const parsed = stored ? JSON.parse(stored) : [];
    setWishlistCount(Array.isArray(parsed) ? parsed.length : 0);
  }, []);

  useEffect(() => {
    setCartCount(
      Array.isArray(cartItems)
        ? cartItems.reduce((total, item) => total + (item.quantity || 1), 0)
        : 0
    );
  }, [cartItems]);

  const goToProducts = () => navigate("/products");
  const goToHome = () => navigate("/");

  const renderNavLinks = () => (
    <div className="d-flex pe-3">
      <Nav.Link href="#">
        <FaUserCircle size={30} />
      </Nav.Link>
      <Nav.Link href="#">
        <FaHeart size={30} />
        <Badge bg="light" text="dark" className="ms-1">
          {wishlistCount}
        </Badge>
      </Nav.Link>
      <Nav.Link onClick={() => navigate("/cart")}>
        <FaShoppingCart size={30} />
        <Badge bg="light" text="dark" className="ms-1">
          {cartCount}
        </Badge>
      </Nav.Link>
    </div>
  );

  const renderSearchBar = () => (
    <Form className="d-flex flex-grow-1 me-3">
      <FormControl
        type="search"
        placeholder="Cosa stai cercando?"
        className="me-2"
      />
    </Form>
  );

  const renderHeaderStrip = () => (
    <Row className="bg-danger text-white py-2 m-0">
      <ul className="d-flex list-unstyled justify-content-evenly my-0">
        {["MW CLUB", "MW APP", "MW Studios", "Negozi", "Servizi"].map(
          (item, idx) => (
            <li key={idx}>
              <Nav.Link href="#">{item}</Nav.Link>
            </li>
          )
        )}
      </ul>
    </Row>
  );

  const renderFooterStrip = () => (
    <Row className="justify-content-evenly bg-black text-white py-0 m-0">
      <ul className="d-flex list-unstyled justify-content-evenly my-2">
        {["Scarica l'APP", "Finanziamento", "Servizi"].map((item, idx) => (
          <li key={idx}>
            <Nav.Link href="#">{item}</Nav.Link>
          </li>
        ))}
      </ul>
    </Row>
  );

  return (
    <div>
      {isDesktop && renderHeaderStrip()}

      <Navbar bg="danger" variant="dark" expand="md" className="py-2">
        <Container fluid>
          <Navbar.Collapse className="d-flex flex-grow-1 my-2">
            <div className="d-flex flex-grow-1 p-2 align-items-center">
              <Button
                variant="danger"
                className="me-3 text-white d-flex align-items-center border-1 border-white"
                onClick={goToProducts}
              >
                <FaBars className="me-2" />
                {isDesktop ? "Lista dei prodotti" : " "}
              </Button>

              <Navbar.Brand className="fw-bold mx-2" onClick={goToHome}>
                EpicMediaWorld
              </Navbar.Brand>

              {isDesktop && (
                <>
                  {renderSearchBar()}
                  <div className="text-white me-3">
                    <small>Il tuo negozio</small>
                    <br />
                    <strong>EpicMediaWorld</strong>
                  </div>
                </>
              )}
            </div>
            <Nav>{renderNavLinks()}</Nav>
          </Navbar.Collapse>

          {!isDesktop && renderSearchBar()}
        </Container>
      </Navbar>

      {renderFooterStrip()}

      <Alert
        variant="danger"
        className="d-flex align-items-center justify-content-center text-white fw-bold m-0"
        style={{
          backgroundColor: "#e60000",
          border: "none",
          borderRadius: "0",
        }}
      >
        <BsInfoCircleFill className="me-2" />
        <span>
          RITIRO GRATUITO in negozio e <u>CONSEGNA GRATIS</u> su oltre 6.000
          prodotti
        </span>
      </Alert>
    </div>
  );
}

export default NavbarComp;
