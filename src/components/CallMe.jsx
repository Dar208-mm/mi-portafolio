import './CallMe.css'
import starSticker from '../assets/star-sticker.svg'

// Número construido en runtime — evita que scrapers de spam lo lean del HTML
const getWaUrl = () => {
  const n = ['593', '98', '955', '9064'].join('')
  return `https://wa.me/${n}`
}

const LINKEDIN = 'https://www.linkedin.com/in/darly-muñoz-223192213'

export default function CallMe() {
  return (
    <section id="contacto" className="callme-section">

      <img src={starSticker} alt="" className="callme-star callme-star-1" draggable="false" />
      <img src={starSticker} alt="" className="callme-star callme-star-2" draggable="false" />
      <img src={starSticker} alt="" className="callme-star callme-star-3" draggable="false" />

      <div className="callme-inner">
        <h2 className="callme-title">Call me</h2>
        <div className="callme-buttons">
          <a
            href={getWaUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="callme-btn"
          >
            Whatsapp
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="callme-btn"
          >
            linkedin
          </a>
        </div>
      </div>

    </section>
  )
}
