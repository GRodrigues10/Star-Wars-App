import styled from "styled-components";

export const StylesHeader = styled.div<{ menuOpen?: boolean }>`
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

  .content-section .menu-mobile {
    display: flex;
    align-items: center;
    cursor: pointer;
    p {
      font-size: 1.4rem;
      transition: 0.4s ease;
      &:hover {
        color: #00cfff;
        text-shadow: 0 0 10px #00cfff, 0 0 20px #00cfff, 0 0 30px #00cfff;
      }
    }
  }

  .content-section .menu-desktop {
    display: none;
  }

  .content-section .btn {
    display: none;
  }

  /* Menu lateral mobile */
  .mobile-sidebar {
    position: fixed;
    top: 0;
    left: -100%; /* abre da esquerda */
    width: 100%;
    height: 100vh;
    background-color: #000d;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    transition: 0.3s ease;
    z-index: 200;

    nav {
      display: flex;
      flex-direction: column;
      gap: 25px;
      a {
        color: white;
        font-size: 2rem;
        text-decoration: none;
        transition: 0.3s ease;
        &:hover {
          color: #00cfff;
        }
      }
    }

    .close-btn {
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 2.5rem;
      background: none;
      border: none;
      color: white;
      cursor: pointer;
      transition: 0.3s ease;
      &:hover {
        color: #00cfff;
      }
    }
  }

  .mobile-sidebar.open {
    left: 0;
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

    .content-section .menu-mobile {
      display: none;
    }

    .content-section .menu-desktop {
      display: flex;
      width: 100%;
      gap: 20px;
      padding-left: 40px;
      font-size: 1rem;
      align-items: start;
      justify-content: flex-start;
      cursor: pointer;
    }

    .content-section .menu-desktop a {
      transition: 0.4s ease;
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
    .content-section .btn button {
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
