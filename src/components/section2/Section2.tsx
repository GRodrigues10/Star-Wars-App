import React, { useRef } from "react";
import { StylesSection2 } from "./Section2.styled";
import DataCard from "../dataCard/DataCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Section2: React.FC = () => {
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
    <StylesSection2>
      <div className="content-section">
        <h2><span>Populares</span> no StarApp</h2>

        <div className="carousel-container">
          <button className="arrow left" onClick={scrollLeft}>
            <FaChevronLeft />
          </button>

          <div className="cards" ref={cardsRef}>
            <DataCard types={["populares"]} />
          </div>

          <button className="arrow right" onClick={scrollRight}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </StylesSection2>
  );
};

export default Section2;
