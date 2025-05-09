import React, { useState } from "react";
import { ListGroup, Collapse } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const categoryData = [
  {
    section: "Telefonia",
    items: ["Smartphone", "iPhone", "Accessori Telefonia", "Wearables"],
  },
  {
    section: "Computer",
    items: ["Notebook", "iMac", "MacBook", "PC Desktop", "Accessori PC"],
  },
  {
    section: "Periferiche PC e Ufficio",
    items: ["Stampanti", "Scanner", "Monitor", "Tastiere e Mouse"],
  },
  {
    section: "TV e Home Cinema",
    items: ["Smart TV", "Soundbar", "Proiettori", "Lettori Blu-ray"],
  },
  {
    section: "Grandi Elettrodomestici",
    items: ["Frigoriferi", "Lavatrici", "Asciugatrici", "Lavastoviglie"],
  },
  {
    section: "Piccoli Elettrodomestici da Cucina e Caffè",
    items: ["Macchine da Caffè", "Frullatori", "Robot da Cucina"],
  },
  {
    section: "PC Gaming e Componenti",
    items: ["Schede Video", "CPU", "RAM", "Accessori Gaming"],
  },
  {
    section: "Console e Videogiochi",
    items: ["PlayStation", "Xbox", "Nintendo Switch", "Giochi"],
  },
];

const ProductSidebar: React.FC = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);
  const navigate = useNavigate();

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const handleNavigate = (filter?: string) => {
    navigate(
      filter ? `/products?category=${encodeURIComponent(filter)}` : "/products"
    );
  };

  return (
    <div style={{ borderRight: "1px solid #dee2e6", paddingRight: "1rem" }}>
      <h5 className="fw-bold mb-3">Categorie</h5>

      <ListGroup variant="flush">
        <ListGroup.Item
          action
          className="fw-bold"
          onClick={() => handleNavigate()}
        >
          Tutti i prodotti
        </ListGroup.Item>

        {categoryData.map((cat, idx) => (
          <div key={idx}>
            <ListGroup.Item
              className="d-flex justify-content-between align-items-center fw-bold"
              action
              onClick={() => {
                handleNavigate(cat.section);
                toggleSection(cat.section);
              }}
              style={{ cursor: "pointer" }}
            >
              {cat.section}
              {openSections.includes(cat.section) ? (
                <FaChevronDown size={12} />
              ) : (
                <FaChevronRight size={12} />
              )}
            </ListGroup.Item>

            <Collapse in={openSections.includes(cat.section)}>
              <div>
                {cat.items.map((sub, i) => (
                  <ListGroup.Item
                    key={i}
                    action
                    onClick={() => handleNavigate(sub)}
                    style={{ paddingLeft: "1.5rem" }}
                  >
                    {sub}
                  </ListGroup.Item>
                ))}
              </div>
            </Collapse>
          </div>
        ))}
      </ListGroup>
    </div>
  );
};

export default ProductSidebar;
