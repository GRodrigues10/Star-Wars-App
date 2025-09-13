import styled from "styled-components";
export const StylesSection3 = styled.div`

  color: white;

  .content-section {

    height: 100%;
  }

  .content-section h2 {
    
    font-size: 1.3rem;
    font-weight: bold;
    padding-inline-start: 30px;
    span {
      color: #00cfff;
    }
  }

 .cards {
  display: flex;
  gap: 15px;
  overflow-x: auto;    
  overflow-y: visible;
  padding-inline-start: 30px;  /* espaço inicial */
  scroll-behavior: smooth;
  padding-bottom: 30px;
    -webkit-overflow-scrolling: touch; /* suaviza scroll no iOS */
}

/* Último card com margem extra para não colar na borda */
.cards > *:last-child {
  margin-right: 50px;
}

.carousel-container {
  position: relative;
  display: flex;
  align-items: center;
}
.arrow{
  display: none;
}


@media screen and (min-width: 530px) {

  .cards{
     overflow-x: hidden;    
  overflow-y: hidden;
  }
  .arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.4);
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 10px;
  z-index: 10;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0; /* ficam invisíveis até hover */
  transition: opacity 0.3s ease, background 0.3s ease;
}

.arrow:hover {
  background: rgba(0, 0, 0, 0.7);
}

.arrow.left {
  left: 5px;
}

.arrow.right {
  right: 5px;
}

.carousel-container:hover .arrow {
  opacity: 1;
}
}
`;
