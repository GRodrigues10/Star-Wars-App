"use client";
import React, { useEffect, useState } from "react";
import { StylesPage } from "./page.styled";
import { fetchDataId } from "@/services/api";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

function Page() {
  const [details, setDetails] = useState<any>(null);
  const { id } = useParams(); // pega o :id da URL
  const router = useRouter();
  const back = () => {
    router.push('/app-wars');
  }

  const detailsData = async (id: string) => {
    const data = await fetchDataId(id);
    setDetails(data);
  };

  useEffect(() => {
    if (id) {
      detailsData(id as string);
    }
  }, [id]);

  if (!details) return <p>Carregando...</p>; // Loading state

  return (
    <StylesPage backdrop={details.backdrop_url} poster={details.poster_url}>
      <div className="content-section">
        <h1 className="logo" onClick={back}>SW</h1>
        <div className="media-text">
          <h1>{details.title.length > 45 ? details.title.slice(0, 45) + '...' : details.title}</h1>
          <div className="media-info">
            <p>{details.year || "2005"}</p>
            <p>{details.age_rating || "Livre"}</p>
            <p>{details.duration || 'Temporadas: ' + details.seasons}</p>
          </div>

          <div className="media-sinopse">
            <p>
              {details.description.length > 150
                ? details.description.slice(0, 150) + "..."
                : details.description}
            </p>
          </div>

          <div className="media-btns">
            <button className="b1">
              <a href={details.trailer_url} target="_blank">▶ Assistir</a>
            </button>
            <button className="b2">Mais Informações</button>
          </div>

          <div className="media-casting">
            <h3>Elenco:</h3>
            <p>{details.cast?.length > 60 ? details.cast.slice(0, 60) + '...' : details.cast}</p>
          </div>
        </div>
      </div>
    </StylesPage>
  );
}

export default Page;
