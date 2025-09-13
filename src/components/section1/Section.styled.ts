import styled from "styled-components";

export const StylesSection1 = styled.div`
  position: relative;
  height: 50vh;
  width: 100%;
  background-image: url("https://preview.redd.it/obi-wan-kenobi-poster-upscaled-and-textless-versions-v0-o7n6ljxunhx81.jpg?auto=webp&s=70e71b08b2f2a733710d7c9b1dfc88064ec7a55f");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 50px;

  /* Overlay cobrindo tudo + topo reforçado */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
    /* preto forte só no topo, mas curto */ linear-gradient(
        to bottom,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.4) 15%
      ),
      /* sombra leve no resto */ rgba(0, 0, 0, 0.25);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  .content-section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-inline: 20px;
  }

  .content-section .title {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .content-section .description {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: white;
    margin-top: auto;
    color: #cab7b7;
    justify-content: end;
  }

  .content-section .description .p1 {
    margin-bottom: 20px;
    color: white;
    text-shadow: 1px 1px 1px black;
  }

  .content-section .description .p2 {
    text-shadow: 1px 1px 1px black;
  }

  .content-section .description .btns {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    gap: 10px;
  }
  .content-section .description .btns .b1 {
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

  .content-section .description .btns .b2 {
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

  h1 {
    color: white;
    font-family: 'Bebas';
    font-weight: normal;
    font-size: 2.8rem;
    text-align: center;
    text-shadow: 2px 2px 4px black;
  }

  @media screen and (min-width: 530px) {
    height: 60vh;

    .content-section .description .btns .b1 {
      font-size: 1.1rem;
    }

    .content-section .description .btns .b2 {
      font-size: 1.1rem;
    }

    .content-section .description .p1 {
      font-size: 1.1rem;
    }

    .content-section .description .p2 {
      font-size: 1.1rem;
      max-width: 400px;
    }

    h1 {
      font-size: 3rem;
    }
  }

  @media screen and (min-width: 768px) {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
    /* gradiente vertical do topo */ linear-gradient(
          to bottom,
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 0, 0, 0.1) 30%
        ),
        /* gradiente horizontal da esquerda */
          linear-gradient(to right, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 30%),
        /* sombra leve no resto */ rgba(0, 0, 0, 0.25);
      z-index: 1;
    }
    background-image: url("https://images7.alphacoders.com/131/1316348.jpeg");
    background-position: top center;
    background-attachment: fixed;
    height: 60vh;

    .content-section .description .btns .b1 {
      font-size: 1.2rem;
    }

    .content-section .description .btns .b2 {
      font-size: 1.2rem;
    }

    .content-section .description .p1 {
      font-size: 1.2rem;
    }

    .content-section .description .p2 {
      font-size: 1.2rem;
      max-width: 400px;
    }

    h1 {
      font-size: 3.5rem;
      align-self: flex-start;
    }
  }

  @media screen and (min-width: 992px) {
    height: 70vh;
    background-position: top left;

    .content-section .title {
      align-items: center;
      justify-content: center;
    }
    .content-section .description .btns .b1 {
      font-size: 1.3rem;
    }

    .content-section .description .btns .b2 {
      font-size: 1.3rem;
    }

    .content-section .description .p1 {
      font-size: 1.3rem;
    }

    .content-section .description .p2 {
      font-size: 1.3rem;
      max-width: 500px;
    }

    h1 {
      font-size: 4.5rem;
      align-self: flex-start;
    }
  }

  @media screen and (min-width: 1200px) {
    height: 70vh;

    .content-section .description .btns .b1 {
      font-size: 1.4rem;
    }

    .content-section .description .btns .b2 {
      font-size: 1.4rem;
    }

    .content-section .description .p1 {
      font-size: 1.4rem;
    }

    .content-section .description .p2 {
      font-size: 1.4rem;
      max-width: 500px;
    }

    h1 {
      font-size: 5rem;
      align-self: flex-start;
    }
  }

    @media screen and (min-width: 1440px) {
    

    .content-section .description .btns .b1 {
      font-size: 1.5rem;
    }

    .content-section .description .btns .b2 {
      font-size: 1.5rem;
    }

    .content-section .description .p1 {
      font-size: 1.5rem;
    }

    .content-section .description .p2 {
      font-size: 1.5rem;
      max-width: 500px;
    }

    h1 {
      font-size: 5.5rem;
      align-self: flex-start;
    }
  }
`;
