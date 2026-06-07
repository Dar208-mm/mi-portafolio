import './Projects.css'
import './CreditProject.css'
import UserPersona from './UserPersona'
import starSticker from '../assets/star-sticker.svg'
import creditLogo from '../assets/credit.png'
import creditPhone from '../assets/creditphone.png'
import luisPersona from '../assets/luis.png'
import creditEntregable from '../assets/credit-entregable.png'
import creditCartIcon      from '../assets/credit-cart.svg'
import creditEmergencyIcon from '../assets/credit-emergency.svg'
import creditFlagIcon      from '../assets/credit-flag.svg'
import creditSavingsIcon   from '../assets/credit-savings.svg'
import dobleDiamante      from '../assets/doble diamante.png'
import creditEyeIcon      from '../assets/credit-eye.svg'
import creditTrophyIcon   from '../assets/credit-trophy.svg'
import errorIcon   from '../assets/error-icon.svg'
import cookIcon    from '../assets/cook.svg'
import moneyIcon   from '../assets/money.svg'
import timeIcon    from '../assets/time.svg'

function Star4({ size = 28 }) {
  return <span className="deco-star" style={{ width: size, height: size }} />
}

const barreras = [
  { icon: creditCartIcon,      title: 'El peso de la impulsividad', desc: 'Los sesgos cognitivos y las compras por impulso en redes sociales frenan la constancia del ahorro.' },
  { icon: creditEmergencyIcon, title: 'La rigidez del sistema',     desc: 'El 55% no ahorra por imprevistos. Un 70% exige pausar débitos sin penalización ante emergencias.' },
  { icon: creditFlagIcon,      title: 'Motivación invisible',       desc: 'Se busca un "banco-coach". El 75% prefiere ver su progreso en porcentajes visuales.' },
]

export default function CreditProject() {
  return (
    <section id="project-credit" className="nummi-section">

      {/* ── HEADER ── */}
      <div className="nummi-project">

        <div className="nummi-project-top">
          <div className="credit-logo-area">
            <img src={creditLogo} alt="Credit" className="credit-logo-img" />
          </div>
        </div>

        <div className="nummi-project-body">

          <div className="nummi-project-left">
            <div className="deco deco-star nummi-star-desc"><img src={starSticker} alt="" /></div>
            <p className="nummi-desc">
              Optimizamos la Cuenta de Ahorro Programado, un producto que debita dinero
              automáticamente para metas específicas. Transformamos una herramienta rígida
              en una solución flexible, motivadora y adaptada al comportamiento real del usuario.
            </p>
            <div className="nummi-tags">
              {['ux research', 'mobile design', 'fintech', 'ui design'].map(label => (
                <span key={label} className="nummi-tag">{label}</span>
              ))}
            </div>
          </div>

          <div className="nummi-project-right">
            <img src={creditPhone} alt="Credit app" className="nummi-phone-img" />
          </div>

        </div>

        <div className="deco deco-star nummi-star-left"><img src={starSticker} alt="" /></div>
        <div className="nummi-star-right"><Star4 size={36} /></div>

      </div>

      {/* ── METHODOLOGY ── */}
      <div className="nummi-block">
        <div className="block-content">
          <div className="block-title-col">
            <div className="deco deco-star block-star-top"><img src={starSticker} alt="" /></div>
            <h3 className="block-title">
              Metodología usada:<br /><strong>Design Thinking</strong>
            </h3>
          </div>
          <img src={dobleDiamante} alt="Doble diamante" className="doble-diamante-img" />
        </div>
        <div className="deco deco-star block-star-bottom"><img src={starSticker} alt="" /></div>
      </div>

      {/* ── PHASE 1 ── */}
      <div className="nummi-block phase-block phase-1">
        <div className="phase-1-text">
          <h3 className="phase-label">
            <span className="phase-num">Primera fase:</span>{' '}
            <strong>Descubrir</strong>
          </h3>
          <p className="phase-desc">
            Investigamos el ecosistema del ahorro para identificar los dolores financieros,
            hábitos y barreras reales de los usuarios.
          </p>
        </div>
        <div className="phase-cards">
          {barreras.map(p => (
            <div key={p.title} className="nummi-card">
              <img src={p.icon} alt="" className="card-icon" />
              <p className="card-text">
                <strong>{p.title}</strong> {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── PHASE 2 ── */}
      <div className="nummi-block phase-block alt-bg">
        <h3 className="phase-label">
          <span className="phase-num">Segunda fase:</span>{' '}
          <strong>Definir</strong>
        </h3>
        <p className="phase-desc">
          Mapeamos las necesidades reales con un User Persona y un Customer Journey Map
          para definir las características obligatorias de la solución.
        </p>
        <UserPersona
          image={luisPersona}
          name="Luís Montero"
          age="27 años"
          location="Vive sola en la ciudad"
          maritalStatus="Soltero"
          occupation="Moderado"
          occupationLabel="Nivel de ingresos"
          comportamiento={[
            'Le gusta vivir el presente, pero las redes sociales lo llevan a compras impulsivas y gastos hormiga que afectan su meta de comprar un auto.',
          ]}
          frustraciones={[
            'Pierde la disciplina por antojos y gastos en delivery.',
            'Teme que su dinero quede atrapado ante una emergencia.',
            'Odia los trámites complejos y tener que ir al banco físico.',
            'No nota cómo los pequeños gastos afectan su gran meta.',
          ]}
          motivaciones={[
            'Hacer trámites y transferencias en menos de 3 clics.',
            'Sentir seguridad total sobre sus fondos y datos.',
            'Ver su progreso de forma simple para no perder motivación.',
          ]}
          objetivos={[
            'Construir un fondo de emergencia para imprevistos.',
            'Ahorrar de forma constante para comprar su vehículo.',
            'Reducir gastos innecesarios sin sentir que se priva de todo.',
            'Tener una visión clara, equilibrada y simple de sus finanzas.',
          ]}
        />

        <div className="phase-cards">
          {[
            { icon: creditSavingsIcon, title: 'Flexibilidad',      desc: 'Opción de pausar débitos o retirar fondos fácilmente ante imprevistos.' },
            { icon: creditEyeIcon,    title: 'Progreso visual',   desc: 'Indicadores claros y barras de porcentaje para hacer el ahorro tangible.' },
            { icon: creditTrophyIcon, title: 'Disciplina activa', desc: 'Automatización inteligente y desafíos tipo "coach" para mantener el compromiso.' },
          ].map(s => (
            <div key={s.title} className="nummi-card">
              <img src={s.icon} alt="" className="card-icon" />
              <p className="card-text"><strong>{s.title}</strong> {s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── PHASE 3 ── */}
      <div className="nummi-block phase-block phase-3">
        <div className="phase-3-text">
          <h3 className="phase-label">
            <span className="phase-num">Tercera fase:</span>{' '}
            <strong>Diseñar la Solución</strong>
          </h3>
          <p className="phase-desc">
            Diseñamos flujos eficientes priorizando interacciones rápidas y mecánicas
            de gamificación.
          </p>
        </div>
        <div className="solutions-container">
          {[
            'Ahorro Automatizado: Débitos inteligentes sin esfuerzo ni fricción para el usuario.',
            'Seguimiento Visual: Gráficos intuitivos y avance por metas específicas (ej. Auto, Emergencias).',
            'Desafíos de Ahorro: Mecánicas de juego semanales para recortar gastos hormiga de forma lúdica.',
            'Recompensas: Gamificación con medallas y beneficios por cumplimiento para reforzar la retención.',
          ].map(label => (
            <div key={label} className="solution-card">
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── PHASE 4 ── */}
      <div className="nummi-deliver">
        <h3 className="phase-label">
          <span className="phase-num">Cuarta fase:</span>{' '}
          <strong>Entrega</strong>
        </h3>
        <div className="deliver-screens">
          <img src={creditEntregable} alt="Entrega Credit" className="credit-entrega-img" />
        </div>
      </div>

    </section>
  )
}
