"use client";
import React, { useEffect, useState } from "react";
import { StylesPage } from "./page.styled";
import { fetchDataId, StarDataItem } from "@/services/api";
import { useParams, useRouter } from "next/navigation";

export default function MediaPage() {
  const [details, setDetails] = useState<StarDataItem | null>(null);
  const { id } = useParams(); // pega o :id da URL
  const router = useRouter();

  const back = () => {
    router.push("/app-wars");
  };

  const detailsData = async (id: string) => {
    try {
      const data = await fetchDataId(id);
      setDetails(data);
    } catch (err) {
      console.error("Erro ao buscar detalhes:", err);
    }
  };

  useEffect(() => {
    if (id && typeof id === "string") {
      detailsData(id);
    }
  }, [id]);

  if (!details)
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="flex flex-col items-center">
          {/* Spinner */}
          <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
        </div>
      </div>
    );

  return (
    <StylesPage backdrop={details.backdrop_url} poster={details.poster_url}>
      <div className="content-section">
        <h1 className="logo" onClick={back}>
          SW
        </h1>
        <div className="media-text">
          <h1>
            {details.title
              ? details.title.length > 45
                ? details.title.slice(0, 45) + "..."
                : details.title
              : "Título indisponível"}
          </h1>

          <div className="media-info">
            <p>{details.year ?? "2005"}</p>
            <p>{details.age_rating ?? "Livre"}</p>
            <p>{details.duration ?? (details.seasons ? "Temporadas: " + details.seasons : "N/A")}</p>
          </div>

          <div className="media-sinopse">
            <p>
              {details.description
                ? details.description.length > 150
                  ? details.description.slice(0, 150) + "..."
                  : details.description
                : "Descrição indisponível"}
            </p>
          </div>

          <div className="media-btns">
            {details.trailer_url && (
              <button className="b1">
                <a href={details.trailer_url} target="_blank" rel="noreferrer">
                  ▶ Assistir
                </a>
              </button>
            )}
            <button className="b2">Mais Informações</button>
          </div>

          {details.cast && (
            <div className="media-casting">
              <h3>Elenco:</h3>
              <p>{details.cast.length > 60 ? details.cast.slice(0, 60) + "..." : details.cast}</p>
            </div>
          )}
        </div>
      </div>
    </StylesPage>
  );
}
