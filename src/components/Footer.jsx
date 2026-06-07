import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <a href="#hero" className="footer-logo">
            <span className="logo-dot" />
            Darly
          </a>
          <p>Diseñadora UI/UX creando experiencias digitales memorables.</p>
        </div>

        <div className="footer-links">
          <a href="#proyectos">Proyectos</a>
          <a href="#historia">Mi Historia</a>
          <a href="#contacto">Contáctame</a>
        </div>

        <div className="footer-copy">
          <span>© 2026 Darly. Hecho con</span>
          <span className="heart">♥</span>
          <span>y mucho café ☕</span>
        </div>
      </div>
    </footer>
  )
}
