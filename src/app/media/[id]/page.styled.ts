"use client";
import styled from "styled-components";

interface StylesPageProps {
  poster?: string;
  backdrop?: string;
}

export const StylesPage = styled.div<StylesPageProps>`
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.24)
    ),
    url(${(props) => props.poster});
  background-size: cover;
  background-position: center center;
  color: white;

  .content-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100dvh;
  }
  .content-section .media-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
  .content-section .logo {
    color: #00cfff;
    font-family: "StarJhol";
    font-size: 2.5rem;
    cursor: pointer;
  }

  .content-section .media-text h1 {
    font-size: 3rem;
    font-family: "Bebas";
    max-width: 400px;
  }

  .content-section .media-text .media-info {
    display: flex;
    gap: 25px;
    margin-bottom: 10px;
    color: #e4d4d4;
  }

  .content-section .media-text .media-sinopse p {
    text-align: justify;
    max-width: 400px;
  }
  .content-section .media-text .media-btns {
    margin-top: 15px;
    display: flex;
    gap: 10px;
  }

  .content-section .media-text .media-btns .b1 {
    border: 1px solid white;
    padding: 10px;
    border-radius: 5px;
    background-color: black;
    color: white;
    cursor: pointer;
    transition: 0.4s ease;
    &:hover {
      background-color: #00cfff;
      color: black;
      border: 1px solid black;
    }
  }

  .content-section .media-text .media-btns .b2 {
    border: 1px solid black;
    padding: 10px;
    border-radius: 5px;
    background-color: #00cfff;
    color: black;
    cursor: pointer;
    transition: 0.4s ease;

    &:hover {
      background-color: black;
      color: #00cfff;
      border: 1px solid #00cfff;
    }
  }

  .content-section .media-text .media-casting h3 {
    font-size: 1.2rem;
    margin-top: 30px;
  }

  @media screen and (min-width: 530px) {
    .content-section .logo {
      font-size: 2.7rem;
    }

    .content-section .media-text h1 {
      font-size: 3.2rem;
    }
    .content-section .media-text .media-info {
      font-size: 1.1rem;
    }

    .content-section .media-text .media-sinopse p {
      font-size: 1.1rem;
    }

    .content-section .media-text .media-btns .b1 {
      font-size: 1.1rem;
    }

    .content-section .media-text .media-btns .b2 {
      font-size: 1.1rem;
    }

    .content-section .media-text .media-casting h3 {
      font-size: 1.3rem;
    }
    .content-section .media-text .media-casting p {
      font-size: 1.1rem;
    }
  }

  @media screen and (min-width: 768px) {
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.9),
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.24)
      ),
      url(${(props) => props.backdrop});
    .content-section .logo {
      font-size: 3rem;
    }

    .content-section .media-text h1 {
      font-size: 3rem;
    }

    .content-section .media-text .media-sinopse p {
      font-size: 1.2rem;
    }

    .content-section .media-text .media-info {
      font-size: 1.2rem;
    }

    .content-section .media-text .media-btns .b1 {
      font-size: 1.2rem;
    }

    .content-section .media-text .media-btns .b2 {
      font-size: 1.2rem;
    }

    .content-section .media-text .media-casting h3 {
      font-size: 1.4rem;
    }
    .content-section .media-text .media-casting p {
      font-size: 1.2rem;
    }
  }

  @media screen and (min-width: 768px) {
    .content-section .media-text h1 {
      font-size: 3.2rem;
    }
  }

  @media screen and (min-width: 1200px) {
    height: 100vh;
    .content-section {
      height: 100%;
    }
    .content-section .logo {
      font-size: 4rem;
    }

    .content-section .media-text h1 {
      font-size: 4.5rem;
      max-width: 550px;
    }

    .content-section .media-text .media-info {
      font-size: 1.3rem;
    }

    .content-section .media-text .media-sinopse p {
      font-size: 1.3rem;
    }

    .content-section .media-text .media-btns .b1 {
      font-size: 1.3rem;
    }

    .content-section .media-text .media-btns .b2 {
      font-size: 1.3rem;
    }

    .content-section .media-text .media-casting h3 {
      font-size: 1.5rem;
    }
    .content-section .media-text .media-casting p {
      font-size: 1.3rem;
    }
  }

  @media screen and (min-width: 1440px) {
    .content-section .logo {
      font-size: 5rem;
    }

    .content-section .media-text h1 {
      font-size: 5.5rem;
      max-width: 650px;
    }

    .content-section .media-text .media-info {
      font-size: 1.5rem;
    }

    .content-section .media-text .media-sinopse p {
      font-size: 1.5rem;
      max-width: 650px;
    }

    .content-section .media-text .media-btns .b1 {
      font-size: 1.5rem;
    }

    .content-section .media-text .media-btns .b2 {
      font-size: 1.5rem;
    }

    .content-section .media-text .media-casting h3 {
      font-size: 1.7rem;
    }
    .content-section .media-text .media-casting p {
      font-size: 1.5rem;
    }
  }
`;
