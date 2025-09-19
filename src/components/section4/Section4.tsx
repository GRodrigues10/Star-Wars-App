import React, { useRef } from "react";
import { StylesSection4 } from "./Section4.styled";
import DataCard from "../dataCard/DataCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Section4: React.FC = () => {
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
    <StylesSection4 id="series">
      <div className="content-section">
        <h2><span>Séries</span> Star Wars</h2>

        <div className="carousel-container">
          <button className="arrow left" onClick={scrollLeft}>
            <FaChevronLeft />
          </button>

          <div className="cards" ref={cardsRef}>
            <DataCard types={["serie_animada", "serie_live_action"]} />
          </div>

          <button className="arrow right" onClick={scrollRight}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </StylesSection4>
  );
};

export default Section4;
