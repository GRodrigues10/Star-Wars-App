"use client";
import styled from "styled-components";

export const StylesHome = styled.div`
  background-image: url("/back.png");
  background-position: right;
  background-size: cover;
  font-family: "Starjedi";
  color: #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
  }

  h1 {
    color: #00cfff;
    text-shadow: 0 0 10px #00cfff, 0 0 20px #00cfff, 0 0 30px #00cfff;
    font-size: 3rem;
    font-family: "Starjhol";
  }

  p {
    margin-bottom: 20px;
    font-size: 1.2rem;
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
    gap: 15px;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
  }

  input {
    width: 100%;
    background: transparent;
    border: 2px solid rgba(0, 207, 255, 0.5);
    border-radius: 8px;
    padding: 10px;
    font-size: 1rem;
    max-width: 220px;
    color: #00cfff;
    outline: none;
  }

  button {
    width: 100%;
    max-width: 220px;
    background: rgba(0, 207, 255, 0.2);
    border: 2px solid #00cfff;
    border-radius: 8px;
    padding: 10px;
    margin-top: 15px;
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

  .account {
    margin-top: 16px;
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 4.5rem;
    }
    p {
      font-size: 1.4rem;
    }
    input {
      font-size: 1.3rem;
      max-width: 300px;
    }
    button {
      font-size: 1.3rem;
      max-width: 290px;
    }
  }

  @media screen and (min-width: 992px) {
    h1 {
      font-size: 4.5rem;
    }
    p {
      font-size: 1.5rem;
    }
    .inputs {
      gap: 20px;
    }
    input {
      font-size: 1.4rem;
      max-width: 340px;
    }
    button {
      font-size: 1.4rem;
      max-width: 330px;
    }
  }

  @media screen and (min-width: 1200px) {
    h1 {
      font-size: 5rem;
    }
    p {
      font-size: 1.6rem;
    }

    input {
      font-size: 1.4rem;
      max-width: 360px;
    }
    button {
      font-size: 1.6rem;
      max-width: 350px;
    }
  }
`;
