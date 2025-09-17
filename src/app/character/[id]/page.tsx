"use client";
import React, { useEffect, useState } from "react";
import { StylesCharacter } from "./page.styled";
import { fetchCharacterId, CharacterDetails } from "@/services/api";
import { useParams, useRouter } from "next/navigation";

export default function CharacterPage() {
  const [character, setCharacter] = useState<CharacterDetails | null>(null);
  const params = useParams(); // pega o [id] da rota
  const router = useRouter();

  const characterId = Array.isArray(params?.id) ? params.id[0] : params?.id;

  const back = () => {
    router.push("/app-wars");
  };

  const fetchCharacterDetails = async () => {
    if (!characterId) return;
    const data = await fetchCharacterId(characterId);
    setCharacter(data);
  };

  useEffect(() => {
    fetchCharacterDetails();
  }, [characterId]);

  if (!character)
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
        </div>
      </div>
    );

  return (
    <StylesCharacter backdrop={character.backdrop_url ?? ""}>
      <div className="content-section">
        <h1 className="logo" onClick={back}>
          SW
        </h1>
        <div className="character-text">
          <h1>{character.title || "Sem nome"}</h1>
          <div className="details-text">
            <p className="text">{character.description ?? "Sem descrição"}</p>
            <p>
              <strong>Idade:</strong> {character.age ?? "Desconhecida"}.
            </p>
            <p>
              <strong>Aliança:</strong> {character.side ?? "Desconhecida"}.
            </p>
            <p>
              <strong>Aprendizes:</strong>{" "}
              {character.apprentices && character.apprentices.length > 0
                ? character.apprentices.join(", ")
                : "Nenhum"}
              .
            </p>
          </div>
        </div>
      </div>
    </StylesCharacter>
  );
}
