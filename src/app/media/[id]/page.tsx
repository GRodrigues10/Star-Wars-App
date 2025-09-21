"use client";
import React, { useEffect, useState } from "react";
import { StylesPage } from "./page.styled";
import { fetchDataId, StarDataItem } from "@/services/api";
import { useParams, useRouter } from "next/navigation";

export default function MediaPage() {
  const [details, setDetails] = useState<StarDataItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const { id } = useParams();
  const router = useRouter();

  const back = () => {
    router.push("/app-wars");
  };

  const detailsData = async (id: string) => {
    try {
      setLoading(true);
      const data = await fetchDataId(id);
      setDetails(data);
    } catch (err) {
      console.error("Erro ao buscar detalhes:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id && typeof id === "string") {
      detailsData(id);
    }
  }, [id]);

  return (
    <>
      {/* Carrega a imagem mesmo durante o loading */}
      {details?.poster_url && (
        <img
          src={details.poster_url}
          alt={details.title}
          style={{ display: "none" }}
          onLoad={() => setImageLoaded(true)}
        />
      )}

      {/* Spinner até dados + imagem estarem prontos */}
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

      {/* Conteúdo só aparece depois */}
      {details && imageLoaded && (
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
                <p>
                  {details.duration ??
                    (details.seasons
                      ? "Temporadas: " + details.seasons
                      : "N/A")}
                </p>
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
                {details.trailer_url ? (
                  <button
                    className="b1"
                    onClick={() => window.open(details.trailer_url, "_blank")}
                  >
                    ▶ Assistir
                  </button>
                ) : (
                  <button
                    className="b1"
                    onClick={() => alert("Trailer indisponível")}
                  >
                    ▶ Assistir
                  </button>
                )}
                <button className="b2">Mais Informações</button>
              </div>

              {details.cast && (
                <div className="media-casting">
                  <h3>Elenco:</h3>
                  <p>
                    {details.cast.length > 60
                      ? details.cast.slice(0, 60) + "..."
                      : details.cast}
                  </p>
                </div>
              )}
            </div>
          </div>
        </StylesPage>
      )}
    </>
  );
}
