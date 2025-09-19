import React, { useRef } from "react";
import { StylesSection3 } from "./Section3.styled";
import DataCard from "../dataCard/DataCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Section3: React.FC = () => {
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
    <StylesSection3 id="filmes">
      <div className="content-section">
        <h2><span>Filmes</span> Star Wars</h2>

        <div className="carousel-container">
          <button className="arrow left" onClick={scrollLeft}>
            <FaChevronLeft />
          </button>

          <div className="cards" ref={cardsRef}>
            <DataCard types={["filme"]} />
          </div>

          <button className="arrow right" onClick={scrollRight}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </StylesSection3>
  );
};

export default Section3;
