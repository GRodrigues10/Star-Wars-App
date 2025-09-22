import styled from "styled-components";

export const StylesSection6 = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 40px 30px;
  display: flex;
  justify-content: center; /* centraliza horizontalmente */
  align-items: center;     /* centraliza verticalmente */

  .content-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  max-width: 1200px;
  }

  .content-section h1 {
    font-size: 2rem;
    color: #00cfff;
    font-family: "StarJhol";
    text-align: center;
    margin-bottom: 60px;
  }

  .content-section .cards {
   display: flex;
   flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .content-section .cards div {
    width: 180px;
    height: 180px;
    border: 3px solid white;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.4s ease, background-color 0.4s ease, border 0.4s ease;
    overflow: hidden;
  }

  .content-section .cards div:hover {
    background-color: #00cfff;
    border: 3px solid #00cfff;
    transform: scale(1.1);
  }

  .content-section .cards div img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    display: block;
    pointer-events: none;
  }

  @media screen and (min-width: 530px) {
    .content-section h1 {
      font-size: 2.2rem;
    }
  }

  @media screen and (min-width: 768px) {
    .content-section h1 {
      font-size: 2.5rem;
    }
    .content-section .cards {
      gap: 50px;
    }
  }

  @media screen and (min-width: 992px) {
    .content-section h1 {
      font-size: 3rem;
    }
    .content-section .cards {
      gap: 50px;
    }
  }

  @media screen and (min-width: 1200px) {
    .content-section h1 {
      font-size: 3.5rem;
    }
    .content-section .cards {
      gap: 50px;
    }
  }
`;
