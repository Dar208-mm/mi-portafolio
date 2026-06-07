import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import DuolingoProject from './components/DuolingoProject'
import CreditProject from './components/CreditProject'
import MiHistoria from './components/MiHistoria'
import CallMe from './components/CallMe'
import Footer from './components/Footer'
import EasterEgg from './components/EasterEgg'

export default function App() {
  useEffect(() => {
    // Desactiva la restauración nativa del scroll
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

    // Limpia cualquier #hash de la URL sin recargar ni romper el historial
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search)
    }

    // Fuerza el scroll al tope absoluto
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Projects />
      <DuolingoProject />
      <CreditProject />
      <MiHistoria />
      <CallMe />
      <Footer />
      <EasterEgg />
    </div>
  )
}
