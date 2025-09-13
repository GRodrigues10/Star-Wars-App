'use client'
import styled from 'styled-components'

export const StylesAppWars = styled.div `
width: 100%;
height: 100vh;
background: linear-gradient(180deg, #000000, #0d0d1a);
position: relative;
overflow-x: hidden;

.star {
    position: absolute;
    width: 2px;
    height: 2px;
    background: white;
    border-radius: 50%;
    opacity: 0.8;
    animation: moveStars linear infinite;
  }

  ${Array.from({ length: 100 })
    .map(
      (_, i) => `
      .star:nth-child(${i + 1}) {
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        width: ${Math.random() * 2 + 1}px;
        height: ${Math.random() * 2 + 1}px;
        animation-duration: ${Math.random() * 10 + 10}s;
        animation-delay: ${Math.random() * 10}s;
      }
    `
    )
    .join("")}

  @keyframes moveStars {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(30px, 30px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`