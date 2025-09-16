import React, { useEffect, useState } from "react";
import { StylesDataCard } from "./DataCard.styled";
import { fetchByType } from "@/services/api";
import { useRouter } from "next/navigation";

interface DataCardProps {
  types: string | string[]; // permite um tipo ou vários tipos
}

function DataCard({ types }: DataCardProps) {
  const [starData, setStarData] = useState<any[]>([]);

  const fetchDatas = async () => {
    const data = await fetchByType(types);
    setStarData(data);
  };

  const router = useRouter();

  const goToCard = (id:string) => {
    router.push(`/media/${id}`)
  }

  useEffect(() => {
    fetchDatas();
  }, [types]);

  return (
    <StylesDataCard>
      <div className="content-section">
        {starData.map((d: any) => (
          <div className="card" key={d._id}  onClick={() => goToCard(d._id)}>
            <img src={d.poster_url} alt={d.title} />
          </div>
        ))}
      </div>
    </StylesDataCard>
  );
}

export default DataCard;
