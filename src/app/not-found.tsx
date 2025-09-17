"use client";
import React from "react";
import { StylesNotFound } from "./not-found.styled";
import { useRouter } from "next/navigation";

function NotFoundPage() {
    const router = useRouter();
    const back = () => {
        router.push('/app-wars');
    }
    
  return (
    <StylesNotFound>
      <div className="content-section">
        <div className="not-found">
          <img
            src="https://i.pinimg.com/originals/96/ea/bc/96eabc812b02070e025cb41776b91803.gif"
            alt="Imagem dos personagens"
          />
          <h1>Essa página não existe!</h1>
          <img
            src="https://i.pinimg.com/originals/96/ea/bc/96eabc812b02070e025cb41776b91803.gif"
            alt="Imagem dos personagens"
          />
        </div>
        <button onClick={back}>Voltar</button>
      </div>
    </StylesNotFound>
  );
}

export default NotFoundPage;
