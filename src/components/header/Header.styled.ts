import styled from "styled-components";

export const StylesHeader = styled.div`
  width: 100%;
  height: 100px;
  background-color: transparent;
  .content-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding-inline: 20px;
    color: white;
  }

  .content-section h1 {
    font-family: "StarJhol";
    color: #00cfff;
    font-size: 1.8rem;
      cursor: pointer;
  }

  .content-section .menu-mobile p {
    font-size: 1.4rem;
    cursor: pointer;
    transition: .4s ease;
    &:hover {
      color: #00cfff;
      text-shadow: 0 0 10px #00cfff, 0 0 20px #00cfff, 0 0 30px #00cfff;
    }
  }

  .content-section .menu-desktop {
    display: none;
  }

  .content-section .btn {
    display: none;
  }

  @media screen and (min-width: 530px) {
    .content-section h1 {
      font-size: 1.9rem;
    }

    .content-section .menu-mobile p {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 768px) {
    .content-section h1 {
      font-size: 2.1rem;
    
    }

    .content-section .menu-mobile p {
      display: none;
    }
    .content-section .menu-desktop {
      width: 100%;
      display: flex;
      gap: 20px;
      padding-left: 40px;
      font-size: 1rem;
      align-items: start;
      justify-content: flex-start;
    }

    .content-section .menu-desktop .link1 {
        transition: .4s ease;
      &:hover {
        color: #00cfff;
      }
    }
    .content-section .menu-desktop .link2 {
        transition: .4s ease;
      &:hover {
        color: #00cfff;
      }
    }

    .content-section .menu-desktop .link3 {
        transition: .4s ease;
      &:hover {
        color: #00cfff;
      }
    }

    .content-section .menu-desktop .link4 {
        transition: .4s ease;
      &:hover {
        color: #00cfff;
      }
    }

    .content-section .menu-desktop .link5 {
        transition: .4s ease;
      &:hover {
        color: #00cfff;
      }
    }

    .content-section .btn {
      display: flex;
    }

    .content-section .btn button {
      padding: 8px 12px;
      width: 70px;
      margin-left: 10px;
      font-size: 1rem;
      border-radius: 5px;
      border: 2px solid rgba(0, 207, 255, 0.5);
      cursor: pointer;
      transition: 0.4s ease;
      &:hover {
        background-color: #00cfff;
        text-shadow: 0 0 10px #00cfff, 0 0 20px #00cfff, 0 0 30px #00cfff;
        color: black;
      }
    }
  }

  @media screen and (min-width: 992px) {
    .content-section h1 {
      font-size: 2.2rem;
    }
  .content-section .btn button{
 width: 80px;
      margin-left: 0px;
}
    
  }

  @media screen and (min-width: 1200px) {
    .content-section h1 {
      font-size: 2.7rem;
    }
    .content-section .menu-desktop {
      font-size: 1.3rem;
    }

    .content-section .btn button {
      font-size: 1.3rem;
      width: 100px;
    }
  }
`;
