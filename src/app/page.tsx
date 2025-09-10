"use client";
import { StylesHome } from "./page.styled";

export default function Home() {
  return (
    <StylesHome>
     
      {Array.from({ length: 100 }).map((_, i) => (
        <div key={i} className="star"></div>
      ))}

      <div className="content-section">
        <h1>STARAPP</h1>
        <p>Bem-vindo(a) ao StarApp!</p>
        <div className="inputs">
          <input type="text" placeholder="Usuário"/>
          <input type="text" placeholder="Senha"/>
          <button>Login</button>
          <p className="account">Ainda não tem conta? <span>Cadastrar</span></p>
        </div>
      </div>
    </StylesHome>
  );
}
