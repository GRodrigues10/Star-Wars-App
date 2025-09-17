"use client";
import React, { useState } from "react";
import { StylesRegister } from "./page.styled";
import { useRouter } from "next/navigation";

function RegisterPage() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const register = () => {
    if (!user.trim() || !password.trim() || !confirmPassword.trim()) {
      alert("Preencha todos os campos!");
      return;
    }
    if (password != confirmPassword) {
      alert("As senhas não são iguais!");
      return;
    }
    router.push("/");
  };
  return (
    <StylesRegister>
      {Array.from({ length: 100 }).map((_, i) => (
        <div key={i} className="star"></div>
      ))}
      <div className="content-section">
        <h1>Cadastre-se</h1>
        <p>Venha e junte-se a força!</p>
        <div className="inputs">
          <input
            type="text"
            placeholder="Digite o nome de usuário"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="password"
            placeholder="Digite a senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirme a senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button onClick={register}>Cadastrar</button>
      </div>
    </StylesRegister>
  );
}

export default RegisterPage;
