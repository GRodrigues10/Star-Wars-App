import React, { useEffect, useState } from "react";
import { StylesDataCard } from "./DataCard.styled";
import { fetchByType, StarDataItem } from "@/services/api";
import { useRouter } from "next/navigation";

interface DataCardProps {
  types: string | string[];
}

export default function DataCard({ types }: DataCardProps) {
  const [starData, setStarData] = useState<StarDataItem[]>([]);
  const [loading, setLoading] = useState(true); // <-- estado de loading
  const router = useRouter();

  const fetchDatas = async () => {
    setLoading(true); // começa a carregar
    try {
      const data = await fetchByType(types);
      setStarData(data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    } finally {
      setLoading(false); // termina de carregar
    }
  };

  const goToCard = (id: string) => {
    router.push(`/media/${id}`);
  };

  useEffect(() => {
    fetchDatas();
  }, [types]);

if (loading) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.8)", // fundo escuro sem transparência total
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999, // acima de tudo
      }}
    >
      <div
        style={{
          borderTop: "4px solid #00cfff",
          borderBottom: "4px solid #00cfff",
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
  );
}

  return (
    <StylesDataCard>
      <div className="content-section">
        {starData.map((d) => (
          <div className="card" key={d._id} onClick={() => goToCard(d._id)}>
            <img src={d.poster_url} alt={d.title} />
          </div>
        ))}
      </div>
    </StylesDataCard>
  );
}
