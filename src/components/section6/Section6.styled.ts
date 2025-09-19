import styled from "styled-components";

export const StylesSection6 = styled.div`

  width: 100%;
  min-height: 100vh;
  padding: 40px 30px;

  .content-section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .content-section h1 {
    font-size: 2rem;
    color: #00cfff;
    font-family: "StarJhol";
  }

  .content-section .cards {
    display: grid;
    grid-template-columns:1fr;
    gap: 40px;
    margin-top: 80px;
    margin-bottom: 40px;
  }

  .content-section .cards div {
    width: 180px; /* Tamanho fixo maior */
    height: 180px;
    border: 3px solid white;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.4s ease, background-color 0.4s ease,
    border 0.4s ease;
    overflow: hidden;
  }

  .content-section .cards div:hover {
    background-color: #00cfff;
    border: 3px solid #00cfff;
    transform: scale(1.1); /* Círculo cresce */
  }

  .content-section .cards div img {
  width: 100%;      /* Preenche todo o círculo horizontalmente */
  height: 100%;     /* Preenche todo o círculo verticalmente */
  object-fit: cover; /* Mantém proporção e corta o que passar do círculo */
  border-radius: 50%; /* Garante que a imagem também fique circular */
  display: block;
  pointer-events: none;
}

  @media screen and (min-width: 530px) {
    .content-section h1 {
      font-size: 2.2rem;
    }
    .content-section .cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 768px) {
    .content-section h1 {
      font-size: 2.5rem;
    }
    .content-section .cards {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (min-width: 992px) {
    .content-section h1 {
      font-size: 3rem;
    }
    .content-section .cards {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media screen and (min-width: 1200px) {
    .content-section h1 {
      font-size: 3.5rem;
    }

    .content-section .cards {
      width: 90%;
    }
  }
`;
