import './Projects.css'
import UserPersona from './UserPersona'
import nummiPhone from '../assets/Nummi im.png'
import nummiLogo from '../assets/nummi-logo.svg'
import nummiElementos from '../assets/nummi-elementos.png'
import dobleDiamante from '../assets/doble diamante.png'
import group30 from '../assets/Group 30.png'
import starSticker from '../assets/star-sticker.svg'
import errorIcon  from '../assets/error-icon.svg'
import cookIcon   from '../assets/cook.svg'
import moneyIcon  from '../assets/money.svg'
import timeIcon   from '../assets/time.svg'
import mariaPersona from '../assets/maria-persona.png'

function Star4({ size = 28 }) {
  return <span className="deco-star" style={{ width: size, height: size }} />
}

function PhoneMockup() {
  return (
    <img
      src={nummiPhone}
      alt="Pantalla NUMMI app"
      className="nummi-phone-img"
      draggable="false"
    />
  )
}

function DoubleDiamond() {
  return (
    <img src={dobleDiamante} alt="Doble diamante metodología" className="doble-diamante-img" />
  )
}

const painPoints = [
  { icon: '⏱️', title: 'Falta de tiempo', desc: 'debido a ritmos de vida acelerados' },
  { icon: '💸', title: 'Costo y desperdicio', desc: 'de compras por compras ineficientes' },
  { icon: '😓', title: 'Falta de habilidades', desc: 'y frustración ante recetas complejas' },
]

const solutions = [
  { icon: timeIcon,  title: 'Optimizar el tiempo',        desc: 'mediante menús rápidos y una planificación semanal sin complicaciones' },
  { icon: moneyIcon, title: 'Aprovechar los ingredientes', desc: 'que se tiene en casa para reducir el desperdicio y ahorrar dinero' },
  { icon: cookIcon,  title: 'Aprender a cocinar',          desc: 'con recetas accesibles que se adapten a tu nivel de habilidades' },
]

export default function Projects() {
  return (
    <section id="proyectos" className="nummi-section" data-project="nummi">

      {/* ── HEADER coral ── */}
      <div className="nummi-project">

        {/* Bloque superior centrado: logo + círculos */}
        <div className="nummi-project-top">
          <img src={nummiLogo} alt="NUMMI" className="nummi-logo-img" />
          <img src={nummiElementos} alt="" className="nummi-elementos" draggable="false" />
        </div>

        {/* Bloque inferior: dos columnas */}
        <div className="nummi-project-body">

          <div className="nummi-project-left">
            <div className="deco deco-star nummi-star-desc"><img src={starSticker} alt="" /></div>
            <p className="nummi-desc">
              Nummi surge de la necesidad de los jóvenes adultos de tener una
              alimentación variada y saludable. Como resultado de una investigación
              previa, esta app busca resolver problemas comunes como la falta de
              conocimientos sobre cocina, la mala planificación de gastos al hacer
              compras y la falta de ideas para decidir qué cocinar.
            </p>
            <div className="nummi-tags">
              {['ui/ux research', 'mobile design', 'design system', 'branding refresh'].map(label => (
                <span key={label} className="nummi-tag">{label}</span>
              ))}
            </div>
          </div>

          <div className="nummi-project-right">
            <PhoneMockup />
          </div>

        </div>

        {/* Estrellas decorativas */}
        <div className="deco deco-star nummi-star-left"><img src={starSticker} alt="" /></div>
        <div className="nummi-star-right"><Star4 size={36} color="#F5C830" /></div>

      </div>

      {/* ── METHODOLOGY ── */}
      <div className="nummi-block">
        <div className="block-content">
          <div className="block-title-col">
            <div className="deco deco-star block-star-top"><img src={starSticker} alt="" /></div>
            <h3 className="block-title">
              Metodología usada:<br /><strong>Doble diamante</strong>
            </h3>
          </div>
          <DoubleDiamond />
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
            A través de Desk Research y Netnografía, descubrimos que el{' '}
            <strong>44% de los jóvenes</strong> ya utiliza tres o menos apps para
            aprender a cocinar. Sin embargo, mediante entrevistas y un análisis
            DAFO, identificamos tres barreras clave:
          </p>
        </div>
        <div className="phase-cards">
          {painPoints.map(p => (
            <div key={p.title} className="nummi-card">
              <img src={errorIcon} alt="Alerta" className="card-icon" />
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
          Creamos un User Persona y un Customer Journey Map que nos permitieron
          identificar las necesidades reales del usuario. Descubrimos una área de
          Necesidad: nuestra solución debía resolver los problemas reales que
          nuestra solución debe abordar de forma obligatoria.
        </p>

        <UserPersona
          image={mariaPersona}
          name="María"
          age="24 años"
          location="Vive sola en un apartamento pequeño en la ciudad."
          maritalStatus="Soltera."
          occupation="Estudiante universitaria."
          comportamiento={[
            'Nivel culinario básico. Sabe preparar platos simples pero se siente intimidada por recetas más elaboradas.',
            'Ritmo de vida acelerado. Llega a casa cansada y sin energía para pensar qué cocinar.',
          ]}
          frustraciones={[
            'No sabe qué cocinar con lo que tiene en casa.',
            'Las apps de recetas son demasiado complicadas para su nivel.',
            'Desperdicia ingredientes por mala planificación semanal.',
          ]}
          motivaciones={[
            'Comer bien sin invertir demasiado tiempo ni dinero.',
            'Aprender recetas fáciles y rápidas paso a paso.',
            'Aprovechar al máximo los ingredientes que ya compra.',
          ]}
          objetivos={[
            'Ahorrar dinero reduciendo el gasto en delivery.',
            'Mejorar su salud siguiendo una dieta más variada.',
            'Simplificar su rutina con un plan de comidas semanal.',
          ]}
        />

        <div className="phase-cards">
          {solutions.map(s => (
            <div key={s.title} className="nummi-card">
              <img src={s.icon} alt="" className="card-icon" />
              <p className="card-text">
                <strong>{s.title}</strong> {s.desc}
              </p>
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
            Definimos los hallazgos (Findings e Insights) y utilizamos metodologías
            como la Matriz de Utilidad vs. Viabilidad y el Método MoSCoW para
            filtrar qué características se incluirían en el Producto Mínimo Viable.
          </p>
        </div>
        <div className="solutions-container">
          {[
            'Incluir filtros para personalizar recetas según dieta (vegetariana, económica, rápida, etc.).',
            'Menús diseñados para quienes solo tienen 15-30 minutos para cocinar.',
            'Ingredientes Disponibles.',
            'Listas de Compras Inteligentes.',
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
          <img src={group30} alt="Pantallas finales NUMMI" className="deliver-group-img" />
        </div>
      </div>

    </section>
  )
}
