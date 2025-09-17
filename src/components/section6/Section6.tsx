import React, { useEffect, useState } from "react";
import { StylesSection6 } from "./Section6.styled";
import { fetchCharacters, Character } from "@/services/api";
import { useRouter } from "next/navigation";

export default function Section6() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const router = useRouter();

  const dataCharacters = async () => {
    const data = await fetchCharacters();
    setCharacters(data);
  };

  const goToCharacter = (id: string) => {
    router.push(`/character/${id}`);
  };

  useEffect(() => {
    dataCharacters();
  }, []);

  return (
    <StylesSection6>
      <div className="content-section">
        <h1>Personagens</h1>
        <div className="cards">
          {characters.map((c) => (
            <div key={c._id} onClick={() => goToCharacter(c._id)}>
              <img src={c.poster_url} alt={c.name} />
            </div>
          ))}
        </div>
      </div>
    </StylesSection6>
  );
}
