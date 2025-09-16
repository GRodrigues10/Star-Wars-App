import React, { useEffect, useState } from "react";
import { StylesSection6 } from "./Section6.styled";
import { fetchCharacters } from "@/services/api";
import { useRouter } from "next/navigation";
// const images = Array(20).fill(
//  "https://static.wikia.nocookie.net/starwars/images/1/1f/KyloRensHelmet-CGSWG.png/"
// );


function Section6() {

  const [character, setCharater]:any = useState([]);
  const router = useRouter();

  const dataCharacters = async () => {
    const data = await fetchCharacters();
    setCharater(data)
}

const goToCharacter = (id:any) => {
    router.push(`/character/${id}`)
}

useEffect(()=>{
  dataCharacters()
},[])
  return (
    <StylesSection6>
      <div className="content-section">
        <h1>Personagens</h1>
        <div className="cards">
          {character.map((c:any)=>(
            <div key={c._id} onClick={()=>goToCharacter(c._id)}>
              <img src={c.poster_url} alt="Imagem do personagem" />
              </div>
          ))}
        </div>
      </div>
    </StylesSection6>
  );
}

export default Section6;
