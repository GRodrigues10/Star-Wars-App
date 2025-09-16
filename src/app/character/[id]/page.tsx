"use client";
import React, { useEffect, useState } from "react";
import { StylesCharacter } from "./page.styled";
import { fetchCharacterId } from "@/services/api";
import { useParams, useRouter } from "next/navigation";

function Page() {
  const [character, setCharacter] = useState<any>(null);
  const params = useParams(); // pega o [id] da rota
  //   const router = useRouter();

  const fetchCharacterDetails = async () => {
    if (!params?.id) return;
    const data = await fetchCharacterId(params.id);
    setCharacter(data);
  };

  //   const goToCharacter = (id: string) => {
  //     router.push(`/character/${id}`);
  //   };

  useEffect(() => {
    fetchCharacterDetails();
  }, [params?.id]);
  const router = useRouter();
  const back = () => {
    router.push("/app-wars");
  };

  if (!character) return <p>Carregando...</p>;

  return (
    <StylesCharacter backdrop={character.backdrop_url}>
      <div className="content-section">
        <h1 className="logo" onClick={back}>
          SW
        </h1>
        <div className="character-text">
          <h1>{character.name}</h1>
          <div className="details-text">
            <p className="text">{character.description}</p>
            <p>
              <strong>Idade:</strong> {character.age}.
            </p>
            <p>
              <strong>Aliança:</strong> {character.side}.
            </p>
            <p>
              <p>
                <strong>Aprendizes:</strong>{" "}
                {character.apprentices && character.apprentices.length > 0
                  ? character.apprentices.join(", ")
                  : "Nenhum"}
                .
              </p>
            </p>
          </div>
        </div>
      </div>
    </StylesCharacter>
  );
}

export default Page;
