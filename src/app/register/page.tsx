"use client";
import React, { useState } from "react";
import { StylesRegister } from "./page.styled";
import { useRouter } from "next/navigation";

function RegisterPage() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const register = () => {
    if (!user.trim() || !password.trim() || !confirmPassword.trim()) {
      alert("Preencha todos os campos!");
      return;
    }
    if (password !== confirmPassword) {
      alert("As senhas não são iguais!");
      return;
    }

    localStorage.setItem("user", user);
    localStorage.setItem("password", password);

    alert("Usuário cadastrado com sucesso!");
    router.push("/");
  };

  return (
    <StylesRegister>
      {Array.from({ length: 100 }).map((_, i) => (
        <div key={i} className="star"></div>
      ))}
      <div className="content-section">
        <h1>Cadastre-se</h1>
        <p>Venha e junte-se à força!</p>
        <div className="inputs">
          <input
            type="text"
            placeholder="Digite o nome de usuário"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />

          {/* Campo Senha */}
          <div className="input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Digite a senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="toggle-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙉" : "🙈"}
            </span>
          </div>

          {/* Campo Confirmar Senha */}
          <div className="input-wrapper">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirme a senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span
              className="toggle-icon"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
            >
              {showConfirmPassword ? "🙉" : "🙈"}
            </span>
          </div>
        </div>
        <button onClick={register}>Cadastrar</button>
      </div>
    </StylesRegister>
  );
}

export default RegisterPage;
