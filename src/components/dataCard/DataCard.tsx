import React, { useEffect, useState } from "react";
import { StylesDataCard } from "./DataCard.styled";
import { fetchByType, StarDataItem } from "@/services/api";
import { useRouter } from "next/navigation";

interface DataCardProps {
  types: string | string[]; 
}

export default function DataCard({ types }: DataCardProps) {
  const [starData, setStarData] = useState<StarDataItem[]>([]);
  const router = useRouter();

  const fetchDatas = async () => {
    try {
      const data = await fetchByType(types);
      setStarData(data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  const goToCard = (id: string) => {
    router.push(`/media/${id}`);
  };

  useEffect(() => {
    fetchDatas();
  }, [types]);

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
