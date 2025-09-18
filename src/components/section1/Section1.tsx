import React from "react";
import { StylesSection1 } from "./Section.styled";
import { useRouter } from "next/navigation";

function Section1() {
  const router = useRouter();
  const moreInformation = () => {
    router.push('/media/68c21c47a5845876b768a1a8');
  }
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
                <button className="b1"><a href="https://youtu.be/3Yh_6_zItPU?si=iUNm452DxLkKZgOb" target="_blank">▶ Assistir</a></button>
                <button className="b2" onClick={moreInformation}>Mais Informações</button>
              </div>
          
        </div>
      </div>
    </StylesSection1>
  );
}

export default Section1;
