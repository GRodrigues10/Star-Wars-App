"use client";
import styled from "styled-components";

export const StylesRegister = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/back.png");
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;

  .star {
    position: absolute;
    width: 2px;
    height: 2px;
    background: white;
    border-radius: 50%;
    opacity: 0.8;
    animation: moveStars linear infinite;
  }

  ${Array.from({ length: 100 })
    .map(
      (_, i) => `
      .star:nth-child(${i + 1}) {
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        width: ${Math.random() * 2 + 1}px;
        height: ${Math.random() * 2 + 1}px;
        animation-duration: ${Math.random() * 10 + 10}s;
        animation-delay: ${Math.random() * 10}s;
      }
    `
    )
    .join("")}

  @keyframes moveStars {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(30px, 30px);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  .content-section {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
  }

  h1 {
    color: #00cfff;
    text-shadow: 0 0 10px #00cfff, 0 0 20px #00cfff, 0 0 30px #00cfff;
    font-size: 2rem;
    font-family: "Starjhol";
  }

  p {
    margin-bottom: 20px;
    font-size: 1.1rem;
    text-align: center;
    color: #e5e5e5;

    span {
      color: #00cfff;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        text-shadow: 0 0 10px #00cfff, 0 0 20px #00cfff;
      }
    }
  }

  .inputs {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
  }

  /* estilo base para todos os inputs */
  input {
    width: 100%;
    background: transparent;
    border: 2px solid rgba(0, 207, 255, 0.5);
    border-radius: 8px;
    padding: 10px;
    font-size: 1rem;
    max-width: 250px;
    color: #00cfff;
    outline: none;
  }

  /* wrapper para inputs com ícone (🙈/🙉) */
  .input-wrapper {
    position: relative;
    width: 100%;
    max-width: 250px; /* mesmo do input */
  }

  .input-wrapper input {
    width: 100%;
    padding-right: 40px; /* espaço pro macaquinho */
  }

  .toggle-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 20px;
    user-select: none;
  }

  button {
    width: 100%;
    max-width: 220px;
    background: rgba(0, 207, 255, 0.2);
    border: 2px solid #00cfff;
    border-radius: 8px;
    padding: 10px;
    margin-top: 25px;
    font-size: 1.1rem;
    color: white;
    cursor: pointer;
    box-shadow: 0 0 10px #00cfff, 0 0 20px #00cfff, inset 0 0 10px #00cfff;
    transition: 0.3s;

    &:hover {
      background: rgba(0, 207, 255, 0.3);
      box-shadow: 0 0 20px #00e0ff, 0 0 40px #00e0ff, inset 0 0 15px #00e0ff;
    }
  }

  @media screen and (min-width: 530px) {
    h1 {
      font-size: 2.1rem;
    }
    p {
      font-size: 1.2rem;
    }

    input,
    .input-wrapper {
      max-width: 260px;
    }

    button {
      max-width: 230px;
    }
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 2.3rem;
    }
    p {
      font-size: 1.3rem;
    }

    input,
    .input-wrapper {
      font-size: 1.1rem;
      max-width: 260px;
    }

    button {
      max-width: 230px;
      font-size: 1.1rem;
    }
  }

  @media screen and (min-width: 992px) {
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.4rem;
    }

    input,
    .input-wrapper {
      font-size: 1.1rem;
      max-width: 260px;
    }

    button {
      font-size: 1.1rem;
      max-width: 230px;
    }
  }

  @media screen and (min-width: 1200px) {
    h1 {
      font-size: 4rem;
    }
    p {
      font-size: 1.5rem;
    }

    input,
    .input-wrapper {
      font-size: 1.4rem;
      max-width: 360px;
    }

    button {
      font-size: 1.5rem;
      max-width: 250px;
    }
  }
`;
