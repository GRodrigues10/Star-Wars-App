import React from "react";
import { StylesSection1 } from "./Section.styled";

function Section1() {
  return (
    <StylesSection1>
      <div className="content-section">
        <div className="title">
        
          <h1>OBI-WAN KENOBI</h1>
          </div>
          <div className="description">
            <p className="p1">Assista a temporada 1</p>
              <p className="p2">
                Dez anos após os eventos de Star Wars: Episódio III — A Vingança dos
                Sith, o Jedi exilado Obi-Wan...
              </p>
              <div className="btns">
                <button className="b1">▶ Assistir</button>
                <button className="b2">Mais Informações</button>
              </div>
          
        </div>
      </div>
    </StylesSection1>
  );
}

export default Section1;
