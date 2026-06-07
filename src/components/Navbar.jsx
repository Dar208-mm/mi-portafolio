import { useEffect, useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      if (window.scrollY > 50) setMenuOpen(false)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#hero" className="navbar-logo" onClick={close}>DMM</a>

        <ul className={`navbar-links${menuOpen ? ' navbar-links--open' : ''}`}>
          <li><a href="#proyectos" onClick={close}>Proyectos</a></li>
          <li><a href="#historia"  onClick={close}>Mi Historia</a></li>
          <li><a href="#contacto"  onClick={close} className="navbar-cta">CALL ME</a></li>
        </ul>

        <button
          className={`navbar-hamburger${menuOpen ? ' is-open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Abrir menú"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
