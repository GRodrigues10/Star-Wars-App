import React, { useRef } from "react";
import { StylesSection5 } from "./Section5.styled";
import DataCard from "../dataCard/DataCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Section5: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollBy({ left: -cardsRef.current.clientWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollBy({ left: cardsRef.current.clientWidth, behavior: "smooth" });
    }
  };

  return (
    <StylesSection5 id="documentarios">
      <div className="content-section">
        <h2><span>Documentários</span> Star Wars</h2>

        <div className="carousel-container">
          <button className="arrow left" onClick={scrollLeft}>
            <FaChevronLeft />
          </button>

          <div className="cards" ref={cardsRef}>
            <DataCard types={["documentario"]} />
          </div>

          <button className="arrow right" onClick={scrollRight}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </StylesSection5>
  );
};

export default Section5;
