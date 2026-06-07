import './UserPersona.css'

function IconCalendar() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  )
}

function IconMapPin() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function IconHeart() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  )
}

function IconBriefcase() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
      <line x1="12" y1="12" x2="12" y2="12"/>
    </svg>
  )
}

export default function UserPersona({
  image,
  name,
  age,
  location,
  maritalStatus,
  occupation,
  occupationLabel = 'Ocupación',
  comportamiento = [],
  frustraciones = [],
  motivaciones = [],
  objetivos = [],
}) {
  const demoItems = [
    { icon: <IconCalendar />, label: 'Edad',              value: age },
    { icon: <IconMapPin />,  label: 'Ubicación',          value: location },
    { icon: <IconHeart />,   label: 'Estado civil',       value: maritalStatus },
    { icon: <IconBriefcase />, label: occupationLabel, value: occupation },
  ]

  return (
    <div className="up-card">

      {/* ── Fila superior ── */}
      <div className="up-top">

        <div className="up-col-photo">
          {image
            ? <img src={image} alt={name} className="up-avatar" />
            : <div className="up-avatar-placeholder" />
          }
          <div className="up-name-banner">{name}</div>
        </div>

        <div className="up-col-demo">
          <ul className="up-demo-list">
            {demoItems.map(({ icon, label, value }, i) => (
              <li key={i} className="up-demo-item">
                <span className="up-demo-icon">{icon}</span>
                <span className="up-demo-text">
                  <span className="up-demo-label">{label}:</span>{' '}
                  <span className="up-demo-value">{value}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="up-col-behavior">
          <h3 className="up-section-title">Comportamiento y Hábitos:</h3>
          {comportamiento.map((text, i) => (
            <p key={i} className="up-text">{text}</p>
          ))}
        </div>

      </div>

      {/* ── Fila inferior ── */}
      <div className="up-bottom">

        <div className="up-col-frus">
          <h3 className="up-section-title">Frustraciones y Desafíos:</h3>
          <ul className="up-list">
            {frustraciones.map((text, i) => <li key={i}>{text}</li>)}
          </ul>
        </div>

        <div className="up-col-motiv">
          <h3 className="up-section-title">Motivaciones y Necesidades:</h3>
          <ul className="up-list">
            {motivaciones.map((text, i) => <li key={i}>{text}</li>)}
          </ul>
        </div>

        <div className="up-col-obj">
          <h3 className="up-section-title">Objetivos:</h3>
          <ul className="up-list">
            {objetivos.map((text, i) => <li key={i}>{text}</li>)}
          </ul>
        </div>

      </div>
    </div>
  )
}
