"use client";
import { useState } from "react";
import { StylesHome } from "./page.styled";
import { useRouter } from "next/navigation";

export default function Home() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const register = () => {
    router.push("/register");
  };

  const login = () => {
    if (!user.trim() || !password.trim()) {
      alert("Preencha todos os campos!");
      return;
    }

    const savedUser = localStorage.getItem("user");
    const savedPassword = localStorage.getItem("password");

    if (user === savedUser && password === savedPassword) {
      alert("Login realizado com sucesso!");
      router.push("/app-wars");
    } else {
      alert("Usuário ou senha inválidos!");
    }
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

          {/* Input de senha com macaquinho dentro */}
          <div className="input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="toggle-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🐵" : "🙈"}
            </span>
          </div>

          <button onClick={login}>Login</button>
          <p className="account">
            Ainda não tem conta? <span onClick={register}>Cadastrar</span>
          </p>
        </div>
      </div>
    </StylesHome>
  );
}
