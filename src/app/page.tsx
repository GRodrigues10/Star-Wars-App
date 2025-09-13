"use client";
import { useState } from "react";
import { StylesHome } from "./page.styled";
import { useRouter } from "next/navigation";

export default function Home() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const login = () => {
    if (!user.trim() || !password.trim()) {
      alert("Preencha todos os campos!");
      return;
    }
    router.push("/app-wars");
  };

  return (
    <StylesHome>
      {Array.from({ length: 100 }).map((_, i) => (
        <div key={i} className="star"></div>
      ))}

      <div className="content-section">
        <h1>STARAPP</h1>
        <p>Bem-vindo(a) ao StarApp!</p>
        <div className="inputs">
          <input
            type="text"
            placeholder="Usuário"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={login}>Login</button>
          <p className="account">
            Ainda não tem conta? <span>Cadastrar</span>
          </p>
        </div>
      </div>
    </StylesHome>
  );
}
