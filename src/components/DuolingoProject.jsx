import './Projects.css'
import './DuolingoProject.css'
import UserPersona from './UserPersona'
import duolingoFlow from '../assets/duolingo flow.png'
import duolingoEntrega from '../assets/DUOLINGO ENTREGA.png'
import lauraPersona from '../assets/Laura.png'
import frame56 from '../assets/Frame 56.png'
import lingeMet from '../assets/lingo-met.png'
import starSticker from '../assets/star-sticker.svg'
import errorIcon        from '../assets/error-icon.svg'
import cookIcon         from '../assets/cook.svg'
import moneyIcon        from '../assets/money.svg'
import timeIcon         from '../assets/time.svg'
import iconMic          from '../assets/icon-mic.svg'
import iconSad          from '../assets/icon-sad.svg'
import iconErrorOutline from '../assets/icon-error-outline.svg'
import iconSparkle      from '../assets/icon-sparkle.svg'
import iconChat         from '../assets/icon-chat.svg'
import iconMoney        from '../assets/icon-money.svg'

function Star4({ size = 28 }) {
  return <span className="deco-star" style={{ width: size, height: size }} />
}

const barreras = [
  { icon: iconSad,          title: 'Ansiedad social',        desc: 'miedo crónico a cometer errores frente a personas nativas.' },
  { icon: iconMic,          title: 'Sin entornos accesibles', desc: 'falta de espacios económicos para practicar conversación real diariamente.' },
  { icon: iconErrorOutline, title: 'Sin feedback inmediato',  desc: 'el usuario sabe que se equivocó, pero no entiende el porqué ni cómo corregirlo en el acto.' },
]

const soluciones = [
  { icon: cookIcon,  title: 'Chat interactivo',          desc: 'con prompts contextuales para romper el hielo según el nivel del usuario.' },
  { icon: moneyIcon, title: 'Reconocimiento de voz',     desc: 'avanzado que evalúa la pronunciación de los audios enviados.' },
  { icon: errorIcon, title: 'Corrección no intrusiva',   desc: 'con explicaciones gramaticales desplegables en un tap.' },
  { icon: timeIcon,  title: 'Historial de errores',      desc: 'dinámico para repasar vocabulario frecuente en sesiones posteriores.' },
]

export default function DuolingoProject() {
  return (
    <section id="project-duolingo" className="nummi-section">

      {/* ── HEADER ── */}
      <div className="nummi-project">

        <div className="nummi-project-top">
          <div className="dl-logo-placeholder">
            <span className="dl-logo-text">duolingo</span>
          </div>
          <img src={frame56} alt="Duolingo elementos" className="dl-elementos-placeholder" />
        </div>

        <div className="nummi-project-body">

          <div className="nummi-project-left">
            <div className="deco deco-star nummi-star-desc"><img src={starSticker} alt="" /></div>
            <p className="nummi-desc">
              Millones de personas dominan la gramática pero se estancan al dar el salto a la vida
              real por miedo a equivocarse. Para solucionarlo, conceptualicé una nueva función de
              chats interactivos de texto y audio donde los usuarios pueden practicar mediante
              conversaciones naturales y notas de voz, recibiendo correcciones de pronunciación y
              sintaxis en tiempo real sin interrumpir el flujo de su aprendizaje.
            </p>
            <div className="nummi-tags">
              {['ux research', 'mobile design', 'gamification', 'user retention'].map(label => (
                <span key={label} className="nummi-tag">{label}</span>
              ))}
            </div>
          </div>

          <div className="nummi-project-right">
            <img src={duolingoFlow} alt="Duolingo flow" className="dl-flow-img" />
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
          <img src={lingeMet} alt="Metodología Duolingo" className="dl-methodology-placeholder" />
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
            A través de Desk Research, encuestas a usuarios activos y un análisis de fricción
            en la retención, identificamos que el aprendizaje pasivo limita la confianza del
            estudiante. Al profundizar en el comportamiento de la comunidad, detectamos tres
            barreras críticas que frenan el dominio de un nuevo idioma:
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
          Creamos un User Persona y un Customer Journey Map para ponernos en los zapatos de
          nuestros usuarios y entender qué necesitaban de verdad. Así descubrimos esos puntos
          clave que nuestra solución debía resolver de forma obligatoria para aportar valor real.
        </p>
        <UserPersona
          image={lauraPersona}
          name="Laura"
          age="28 años"
          location="Berlín, Alemania"
          maritalStatus="Soltera"
          occupation="Profesora"
          comportamiento={[
            'Enseña español en un colegio de Berlín y necesita el inglés para comunicarse con colegas y padres extranjeros.',
            'Usa Duolingo en sus ratos libres pero siente que no logra fluidez real para conversaciones profesionales.',
          ]}
          frustraciones={[
            'Se bloquea al hablar inglés en reuniones de trabajo frente a sus colegas nativos.',
            'Su horario de clases no le permite asistir a cursos de idiomas tradicionales.',
            'Las correcciones de la app son genéricas y no resuelven sus dudas del contexto laboral.',
          ]}
          motivaciones={[
            'Ganar confianza para comunicarse con fluidez en su entorno profesional en Alemania.',
            'Servir de modelo para sus estudiantes demostrando que aprender idiomas es posible.',
            'Practicar en los momentos libres entre clases sin necesidad de un tutor.',
          ]}
          objetivos={[
            'Desenvolverse con naturalidad en inglés dentro del entorno escolar y académico.',
            'Recibir correcciones específicas y contextuales que mejoren su inglés profesional.',
            'Establecer una rutina de práctica diaria que encaje con su apretada agenda docente.',
          ]}
        />

        <div className="phase-cards">
          {[
            { icon: iconSparkle, title: 'Feedback al instante',  desc: 'Entender los errores en el acto con correcciones simples de gramática y pronunciación, sin cortar la fluidez.' },
            { icon: iconChat,    title: 'Espacio seguro',        desc: 'Un entorno privado e interactivo para soltar la lengua y equivocarse sin la presión de hablar con un nativo.' },
            { icon: iconMoney,   title: 'Práctica accesible',    desc: 'Poder practicar conversación en cualquier momento del día, eliminando los altos costos de un tutor privado.' },
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
            Traducimos los hallazgos en funcionalidades clave empleando la Matriz de Utilidad
            vs. Viabilidad. Priorizamos una interfaz conversacional familiar que reduce la carga
            cognitiva, permitiendo al usuario enfocarse únicamente en el flujo de la comunicación.
          </p>
        </div>
        <div className="solutions-container">
          {[
            'Chat interactivo con prompts contextuales para romper el hielo según el nivel del usuario.',
            'Reconocimiento de voz avanzado que evalúa la pronunciación de los audios enviados.',
            'Sistema de corrección no intrusiva con explicaciones gramaticales desplegables en un tap.',
            'Historial dinámico de errores frecuentes para repasar vocabulario en sesiones posteriores.',
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
          <img src={duolingoEntrega} alt="Entrega Duolingo" className="dl-entrega-img" />
        </div>
      </div>

    </section>
  )
}
