import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ProductSidebar from "../components/ProductSidebar";
import ProductCard from "../components/ProductCard";
import { Product } from "../context/CartContext";
import { useProducts } from "../hooks/useProduct";

const ProductListPage: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const filter = searchParams.get("category");

  const products: Product[] = useProducts();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (!filter || filter === "tutti") {
      setFilteredProducts(products);
    } else {
      const results = products.filter(
        (p) =>
          p.category?.toLowerCase() === filter.toLowerCase() ||
          p.item?.toLowerCase() === filter.toLowerCase()
      );
      setFilteredProducts(results);
    }
  }, [filter, products]);

  return (
    <Container className="my-4">
      <Row>
        <Col md={3}>
          <ProductSidebar />
        </Col>
        <Col md={9}>
          <h4 className="mb-4">Prodotti trovati: {filteredProducts.length}</h4>
          <Row>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Col key={product.id} md={6} lg={12} className="mb-4">
                  <ProductCard product={product} />
                </Col>
              ))
            ) : (
              <p className="text-muted">
                Nessun prodotto corrisponde alla categoria selezionata.
              </p>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductListPage;
