import { useState, useEffect, useRef, useCallback } from 'react'
import './MiHistoria.css'
import eyeSticker  from '../assets/eye-sticker.svg'
import starSticker from '../assets/star-sticker.svg'

import foto1 from '../assets/hist-trevi.png'
import foto2 from '../assets/hist-banco.png'
import foto3 from '../assets/hist-valencia.png'
import foto4 from '../assets/hist-perrita.png'

import toolFigma    from '../assets/figma.png'
import toolExcel    from '../assets/excel.png'
import toolClarity  from '../assets/clarity.png'
import toolPowerBI  from '../assets/power bi.png'
import toolLyssna   from '../assets/lyssna.png'
import toolMixpanel from '../assets/mixpanel.png'
import toolClaude   from '../assets/calude.png'

const INITIAL_POSITIONS = {
  eye:  { x: 40,  y: 85  },
  uxui: { x: 330, y: 80  },
  cx:   { x: 40,  y: 375 },
  star: { x: 240, y: 378 },
}

const photos = [
  { src: foto1, caption: 'Darly c:' },
  { src: foto2, caption: 'Actualmente soy Especialista CX en Banco Pacífico' },
  { src: foto3, caption: 'Hice una Maestría UX, UI en Valencia' },
  { src: foto4, caption: 'Compañera de crimen' },
]

const tools = [
  { name: 'Figma',    icon: toolFigma },
  { name: 'Excel',    icon: toolExcel },
  { name: 'Clarity',  icon: toolClarity },
  { name: 'Power BI', icon: toolPowerBI },
  { name: 'Lyssna',   icon: toolLyssna },
  { name: 'Mixpanel', icon: toolMixpanel },
  { name: 'Claude',   icon: toolClaude },
]

export default function MiHistoria() {
  const secRef      = useRef(null)
  const frameRef    = useRef(null)
  const targetRef   = useRef({ x: 0, y: 0 })
  const currentRef  = useRef({ x: 0, y: 0 })
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const draggingRef = useRef(null)
  const posRef      = useRef(INITIAL_POSITIONS)
  const [positions, setPositions] = useState(INITIAL_POSITIONS)
  const [activeId, setActiveId]   = useState(null)

  useEffect(() => { posRef.current = positions }, [positions])

  /* RAF parallax loop — pausa mientras se arrastra */
  useEffect(() => {
    const tick = () => {
      if (!draggingRef.current) {
        currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.06
        currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.06
        setOffset({ x: currentRef.current.x, y: currentRef.current.y })
      }
      frameRef.current = requestAnimationFrame(tick)
    }
    frameRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameRef.current)
  }, [])

  /* Tracking de mouse para parallax */
  const handleMouseMove = useCallback((e) => {
    if (draggingRef.current) return
    const rect = secRef.current.getBoundingClientRect()
    targetRef.current = {
      x: (e.clientX - rect.left - rect.width  / 2) / rect.width,
      y: (e.clientY - rect.top  - rect.height / 2) / rect.height,
    }
  }, [])

  useEffect(() => {
    const el = secRef.current
    el.addEventListener('mousemove', handleMouseMove)
    return () => el.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  /* Drag global */
  useEffect(() => {
    const onMove = (e) => {
      if (!draggingRef.current) return
      const { id, startX, startY, origX, origY } = draggingRef.current
      const next = { x: origX + e.clientX - startX, y: origY + e.clientY - startY }
      posRef.current = { ...posRef.current, [id]: next }
      setPositions({ ...posRef.current })
    }
    const onUp = () => {
      draggingRef.current = null
      setActiveId(null)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])

  const startDrag = (id) => (e) => {
    e.preventDefault()
    const cur = posRef.current[id]
    draggingRef.current = { id, startX: e.clientX, startY: e.clientY, origX: cur.x, origY: cur.y }
    setActiveId(id)
  }

  /* px/py = multiplicadores de parallax por elemento */
  const s = (id, px, py, rotate = '') => {
    const { x, y } = positions[id]
    const isActive = activeId === id
    const plx = isActive ? 0 : offset.x * px
    const ply = isActive ? 0 : offset.y * py
    return {
      transform: `translate(${x + plx}px, ${y + ply}px)${rotate}`,
      willChange: 'transform',
      cursor: isActive ? 'grabbing' : 'grab',
      zIndex: isActive ? 100 : 3,
    }
  }

  return (
    <section id="historia" className="historia-section" ref={secRef}>

      {/* ── Elementos flotantes ── */}
      <div className="historia-deco" onMouseDown={startDrag('eye')} style={s('eye', -28, -20)}>
        <img src={eyeSticker} alt="" draggable="false" className="historia-deco-eye-img" />
      </div>

      <div className="historia-deco historia-badge-uxui" onMouseDown={startDrag('uxui')} style={s('uxui', 40, 26)}>
        UX-UI
      </div>

      <div className="historia-deco historia-badge-cx" onMouseDown={startDrag('cx')} style={s('cx', -18, 32, ' rotate(-8deg)')}>
        CX
      </div>

      <div className="historia-deco" onMouseDown={startDrag('star')} style={s('star', 22, -18)}>
        <img src={starSticker} alt="" draggable="false" className="historia-deco-star-img" />
      </div>

      {/* ── Contenido ── */}
      <div className="historia-inner">
        <div className="historia-layout">

          {/* LEFT COLUMN */}
          <div className="historia-left-col">
            <h2 className="historia-titulo">Un poco<br />de mi</h2>

            <div className="historia-bio">
              <p>
                <strong>Hola, soy Darly tengo 26 años.</strong> Crecí entre las tintas y
                papeles, jugando en Illustrator siguiendo los pasos de mi padre todo desde
                los 12 años. Ahí descubrí mi amor por las formas y los detalles, lo que
                naturalmente me guió hacia el mundo del UI.
              </p>
              <p>
                Pero siempre he sido una persona profundamente empática; me apasiona
                escuchar y entender a la gente, y esa cualidad fue la que me abrió las
                puertas del UX y la experiencia de cliente (CX). Convertirme en Product
                Designer fue el paso lógico para fusionar ambos mundos: uso la empatía
                para entender los problemas reales de los usuarios y el diseño visual para
                materializar soluciones claras, estéticas y eficientes en Figma. Diseño
                con más experiencia, pero con la misma emoción del primer día.
              </p>
            </div>

            <div className="historia-tools">
              <p className="historia-tools-label">Herramientas de uso diario</p>
              <div className="historia-tools-grid">
                {tools.map(t => (
                  <img key={t.name} src={t.icon} alt={t.name} className="historia-tool-img" />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="historia-right-col">
            <div className="historia-photos-grid">
              {photos.map(p => (
                <div key={p.caption} className="historia-photo-card">
                  <img src={p.src} alt={p.caption} className="historia-photo-img" />
                  <p className="historia-photo-caption">{p.caption}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
