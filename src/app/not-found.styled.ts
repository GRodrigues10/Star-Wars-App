import styled from "styled-components";

export const StylesNotFound = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #000000, #0d0d1a);
  color: white;

  .content-section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
  }

  .content-section .not-found {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .content-section .not-found h1 {
    font-family: "StarJhol";
    font-size: 1rem;
  }
  .content-section .not-found img {
    width: 100px;
  }

  .content-section button {
    border: 1px solid white;
    padding: 10px;
    font-size: 1rem;
    border-radius: 5px;
    width: 100px;
    cursor: pointer;
    transition: 0.4s ease;
    &:hover {
      background-color: #00cfff;
      color: black;
      border: 1px solid black;
    }
  }

  @media screen and (min-width: 530px) {
    .content-section .not-found h1 {
      font-size: 1.1rem;
    }
    .content-section .not-found img {
      width: 110px;
    }

    .content-section button {
      font-size: 1.1rem;
    }
  }

  
  @media screen and (min-width: 768px) {
    .content-section .not-found h1 {
      font-size: 1.3rem;
    }
    .content-section .not-found img {
      width: 130px;
    }

    .content-section button {
      font-size: 1.1rem;
      width: 150px;
    }
  }

    @media screen and (min-width:992px) {
    .content-section .not-found h1 {
      font-size: 1.5rem;
    }
    .content-section .not-found img {
      width: 150px;
    }

    .content-section button {
      font-size: 1.2rem;
       width: 200px;
    }
  }
    @media screen and (min-width:1200px) {
    .content-section .not-found h1 {
      font-size: 2rem;
    }
    .content-section .not-found img {
      width: 150px;
    }

    .content-section button {
      font-size: 1.3rem;
       width: 200px;
    }
  }
`;
