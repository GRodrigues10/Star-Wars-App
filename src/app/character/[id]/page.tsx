"use client";
import React, { useEffect, useState } from "react";
import { StylesCharacter } from "./page.styled";
import { fetchCharacterId, CharacterDetails } from "@/services/api";
import { useParams, useRouter } from "next/navigation";

export default function CharacterPage() {
  const [character, setCharacter] = useState<CharacterDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // loading geral
  const [imageLoaded, setImageLoaded] = useState<boolean>(false); // imagem carregada
  const params = useParams();
  const router = useRouter();

  const characterId = Array.isArray(params?.id) ? params.id[0] : params?.id;

  const back = () => {
    router.push("/app-wars");
  };

  const fetchCharacterDetails = async () => {
    if (!characterId) return;
    try {
      setLoading(true);
      const data = await fetchCharacterId(characterId);
      setCharacter(data);
    } catch (err) {
      console.error("Erro ao buscar personagem:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacterDetails();
  }, [characterId]);

  return (
    <>
      {/* Preload da imagem do personagem */}
      {character?.poster_url && (
        <img
          src={character.poster_url}
          alt={character.title}
          style={{ display: "none" }}
          onLoad={() => setImageLoaded(true)}
        />
      )}

      {/* Spinner enquanto loading ou imagem não carregada */}
      {(loading || !imageLoaded) && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgb(0, 0, 0)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              borderTop: "6px solid #00cfff",
              borderBottom: "6px solid #00cfff",
              borderRadius: "50%",
              width: "80px",
              height: "80px",
              animation: "spin 1s linear infinite",
            }}
          ></div>
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      )}

      {/* Conteúdo do personagem só aparece depois que tudo carregou */}
      {character && imageLoaded && (
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
      )}
    </>
  );
}
