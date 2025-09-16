import React from 'react'
import { StylesHeader } from './Header.styled'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


function Header() {
    const router = useRouter();
    const back = () => {
        router.push('/');
        // alert('Você saiu com sucesso!');
    }
  return (
    <StylesHeader>
        <div className="content-section">
            <h1>STARAPP</h1>
            <div className="menu-mobile">
                <p>☰</p>
            </div>
            <div className="menu-desktop">
                <Link href='#' className='link1'>Início</Link>
                <Link href='#' className='link2'>Filmes</Link>
                <Link href='#' className='link3'>Séries</Link>
                <Link href='#' className='link4'>Documentários</Link>
                <Link href='#' className='link5'>Personagens</Link>
            </div>
            <div className="btn">
                <button onClick={back}>Sair</button>
            </div>
        </div>
    </StylesHeader>
  )
}

export default Header