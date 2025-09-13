import styled from "styled-components";

export const StylesDataCard = styled.div`
  margin-top: 20px;



  .content-section {
   
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    gap: 20px;
    padding: 0;
  }

  .card {
    flex: 0 0 auto;
    width: 150px;
    height: 250px; /* altura fixa */
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid #111;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    transform-origin: center;
    will-change: transform, box-shadow;
    transform: translateZ(0);
    backface-visibility: hidden;

  }

  .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: filter 0.3s ease, transform 0.3s ease;
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  .card:hover {
    transform: scale(1.02); /* card cresce */
    z-index: 2;
    box-shadow: 0 0 10px 5px #00cfff;
  }

  .card:hover img {
    /* sem scale, apenas brilho e contraste */
    filter: brightness(1.2) contrast(1.1);
  }
`;
