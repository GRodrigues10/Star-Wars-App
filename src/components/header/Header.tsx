import React, { useState, useEffect } from 'react'
import { StylesHeader } from './Header.styled'
import { useRouter } from 'next/navigation'

function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  // Fecha o menu automaticamente se a tela for maior que 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  const back = () => {
    router.push('/');
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // fecha o menu mobile ao clicar
    }
  }

  return (
    <StylesHeader menuOpen={menuOpen} id='inicio'>
      <div className="content-section">
        <h1>STARAPP</h1>

        {/* Menu Mobile */}
        <div className="menu-mobile" onClick={toggleMenu}>
          <p>☰</p>
        </div>

        {/* Menu Desktop */}
        <div className="menu-desktop">
          <a onClick={() => scrollToSection('inicio')}>Início</a>
          <a onClick={() => scrollToSection('filmes')}>Filmes</a>
          <a onClick={() => scrollToSection('series')}>Séries</a>
          <a onClick={() => scrollToSection('documentarios')}>Documentários</a>
          <a onClick={() => scrollToSection('personagens')}>Personagens</a>
        </div>

        <div className="btn">
          <button onClick={back}>Sair</button>
        </div>
      </div>

      {/* Menu Lateral Mobile */}
      <div className={`mobile-sidebar ${menuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>×</button>
        <nav>
          <a onClick={() => scrollToSection('inicio')}>Início</a>
          <a onClick={() => scrollToSection('filmes')}>Filmes</a>
          <a onClick={() => scrollToSection('series')}>Séries</a>
          <a onClick={() => scrollToSection('documentarios')}>Documentários</a>
          <a onClick={() => scrollToSection('personagens')}>Personagens</a>
        </nav>
      </div>
    </StylesHeader>
  )
}

export default Header;
