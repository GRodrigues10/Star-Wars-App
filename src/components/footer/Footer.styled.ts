import styled from "styled-components";

export const StylesFooter = styled.footer`
  border-top: 6px solid #00cfff; /* cor do sabre */
  box-shadow: 
    0 0 8px #00cfff,
    0 0 16px #00cfff,
    0 0 32px #00cfff,
    0 0 64px #00cfff;

  width: 100%;
  min-height: 250px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color:rgba(0, 0, 0, 0.5);
  padding: 20px;


 
  
  .content-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
    color: #00cfff;
    text-align: center;
    
  }

  .social-medias {
    display: flex;
    gap: 25px;
    padding-top:20px;
  }

  .social-medias svg {
    font-size: 2rem;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }

  .social-medias svg:hover {
   transform: scale(1.08);
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    text-align: center;
    /* evita quebrar feio em telas pequenas */
    font-size: 1rem;
  }

  .text img {
    height: 80px;
  }

  .text p {
    color: #ccc;
  font-family: 'StarJhol' ;
  font-weight: bold;

  }

  .text a {
    color: #00cfff;
    text-decoration: none;
    transition: 0.3s;
   
   

  }

  .text a:hover {
    color: #0088cc;
  }

  @media screen and (min-width: 768px) {
    .social-medias svg {
      font-size: 2.5rem;
    }

    .text img {
      height: 110px;
    }

    .text {
      font-size: 1.1rem;
      gap: 30px;
    }
  }

   @media screen and (min-width: 992px) {
    .social-medias svg {
      font-size: 2.5rem;
    }

    .text img {
      height: 120px;
    }

    .text {
      font-size: 1.2rem;
      gap: 30px;
    }
  }

     @media screen and (min-width: 1200px) {
    .social-medias svg {
      font-size: 2.5rem;
    }

    .text img {
      height: 140px;
    }

    .text {
      font-size: 1.3rem;
      gap: 30px;
    }
  }
`;
