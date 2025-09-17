"use client";
import styled from "styled-components";
interface StylesCharacterProps {
  backdrop?: string;
}

export const StylesCharacter =  styled.div<StylesCharacterProps>`
  width: 100%;
  height: 100vh;
  padding: 20px;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.24)
    ),
   url(${props => props.backdrop});
  background-size: cover;
  background-position: center center;
  color: white;
  padding: 20px;

  .content-section {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .content-section .logo {
    color: #00cfff;
    font-family: "StarJhol";
    font-size: 2.5rem;
    cursor: pointer;
  }

  .content-section .character-text {
    display: flex;
    flex-direction: column;

    height: 100%;
    justify-content: center;
  }
  .content-section .character-text h1 {
    font-size: 3rem;
    font-family: "Bebas";
    max-width: 400px;
  }

  .content-section .details-text {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .content-section .details-text .text{
    color: white;
  }
  .content-section .details-text p {
    font-size: 1.1rem;
    text-align: justify;
    max-width: 300px;
    color: #00cfff;;
  }
 .content-section .details-text p strong{

  color: white;
 }

     @media screen and (min-width: 530px) {
    .content-section .logo {
      font-size: 3.2rem;
    }

    .content-section .character-text {
      display: flex;
      flex-direction: column;
    }
    .content-section .character-text h1 {
      font-size: 4.1rem;

      max-width: 300px;
    }

    .content-section .details-text p {
      font-size: 1.2rem;
      max-width: 350px;
    }
  }

   @media screen and (min-width: 768px) {
    .content-section .logo {
      font-size: 3.3rem;
    }

 
    .content-section .character-text h1 {
      font-size: 4.3rem;

      max-width: 350px;
    }

    .content-section .details-text p {
      font-size: 1.3rem;
      max-width: 400px;
    }
  }

   @media screen and (min-width: 992px) {
    .content-section .logo {
      font-size: 3.3rem;
    }

   
    .content-section .character-text h1 {
      font-size: 4.3rem;

      max-width: 400px;
    }

    .content-section .details-text p {
      font-size: 1.3rem;
      max-width: 500px;
    }
  }

  @media screen and (min-width: 1200px) {
    .content-section .logo {
      font-size: 3.5rem;
    }

    .content-section .character-text h1 {
      font-size: 5rem;

      max-width: 500px;
    }

    .content-section .details-text p {
      font-size: 1.5rem;
      max-width: 550px;
    }
  }

    @media screen and (min-width: 1440px) {
    .content-section .logo {
      font-size: 4rem;
    }

    .content-section .character-text h1 {
      font-size: 5.5rem;

      max-width: 450px;
    }

    .content-section .details-text p {
      font-size: 1.7rem;
      max-width: 600px;
    }
  }
`;
