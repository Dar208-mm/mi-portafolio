import { useState, useEffect, useRef, useCallback } from 'react'
import './Hero.css'
import eyeSticker from '../assets/eye-sticker.svg'
import catSticker from '../assets/cat-sticker.svg'
import starSticker from '../assets/star-sticker.svg'

const INITIAL_POSITIONS = {
  eye:     { x: 131, y:  52 },
  empatia: { x: 576, y: 123 },
  star:    { x:  92, y: 191 },
  cat:     { x: 108, y: 464 },
  dot:     { x: 166, y: 583 },
  product: { x: 624, y: 493 },
}

export default function Hero() {
  /* ── Parallax ── */
  const heroRef    = useRef(null)
  const frameRef   = useRef(null)
  const targetRef  = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  /* ── Drag ── */
  const draggingRef = useRef(null)          // { id, startX, startY, origX, origY }
  const posRef      = useRef(INITIAL_POSITIONS)
  const [positions, setPositions] = useState(INITIAL_POSITIONS)
  const [activeId, setActiveId]   = useState(null)

  /* Keep posRef in sync so startDrag always reads the latest value */
  useEffect(() => { posRef.current = positions }, [positions])

  /* RAF: parallax loop — paused while dragging */
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

  /* Parallax mouse tracking */
  const handleMouseMove = useCallback((e) => {
    if (draggingRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    targetRef.current = {
      x: (e.clientX - rect.left - rect.width / 2) / rect.width,
      y: (e.clientY - rect.top - rect.height / 2) / rect.height,
    }
  }, [])

  useEffect(() => {
    const el = heroRef.current
    el.addEventListener('mousemove', handleMouseMove)
    return () => el.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  /* Global drag move / release — mouse + touch */
  useEffect(() => {
    const getClient = (e) => e.touches ? e.touches[0] : e

    const onMove = (e) => {
      if (!draggingRef.current) return
      if (e.cancelable) e.preventDefault()
      const { clientX, clientY } = getClient(e)
      const { id, startX, startY, origX, origY } = draggingRef.current
      const next = { x: origX + clientX - startX, y: origY + clientY - startY }
      posRef.current = { ...posRef.current, [id]: next }
      setPositions({ ...posRef.current })
    }

    const onUp = () => {
      draggingRef.current = null
      setActiveId(null)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchmove', onMove, { passive: false })
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onUp)
    }
  }, [])

  /* Start drag — mouse + touch */
  const startDrag = (id) => (e) => {
    e.preventDefault()
    const { clientX, clientY } = e.touches ? e.touches[0] : e
    const cur = posRef.current[id]
    draggingRef.current = { id, startX: clientX, startY: clientY, origX: cur.x, origY: cur.y }
    setActiveId(id)
  }

  /* Build inline style: drag offset + parallax + optional rotation */
  const s = (id, px, py, rotate = '') => {
    const { x, y } = positions[id]
    const isActive  = activeId === id
    const plx = isActive ? 0 : offset.x * px
    const ply = isActive ? 0 : offset.y * py
    return {
      transform: `translate(${x + plx}px, ${y + ply}px)${rotate}`,
      willChange: 'transform',
      cursor: isActive ? 'grabbing' : 'grab',
      zIndex: isActive ? 10 : undefined,
    }
  }

  return (
    <section
      id="hero"
      className="hero-section"
      ref={heroRef}
      style={{ cursor: activeId ? 'grabbing' : 'default' }}
    >
      <div className="hero-stage">

        <div className="deco deco-eye" onMouseDown={startDrag('eye')} onTouchStart={startDrag('eye')} style={s('eye', -32, -24)}>
          <img src={eyeSticker} alt="" draggable="false" />
        </div>

        <div className="deco deco-empatia" onMouseDown={startDrag('empatia')} onTouchStart={startDrag('empatia')}
          style={s('empatia', 44, 30, ' rotate(23.743deg)')}>
          Empatía
        </div>

        <div className="deco deco-star" onMouseDown={startDrag('star')} onTouchStart={startDrag('star')} style={s('star', -20, 22)}>
          <img src={starSticker} alt="" draggable="false" />
        </div>

        <h1 className="hero-headline">
          Siento,<br />
          entiendo y<br />
          diseño
        </h1>

        <div className="deco deco-cat" onMouseDown={startDrag('cat')} onTouchStart={startDrag('cat')} style={s('cat', 40, -20)}>
          <img src={catSticker} alt="" draggable="false" />
        </div>

        <div className="deco deco-dot" onMouseDown={startDrag('dot')} onTouchStart={startDrag('dot')} style={s('dot', 18, 34)} />

        <div className="deco deco-product" onMouseDown={startDrag('product')} onTouchStart={startDrag('product')}
          style={s('product', -38, 24, ' rotate(-8.776deg)')}>
          Product
        </div>

      </div>

      <svg className="hero-wave" viewBox="0 0 1440 130"
        preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 130 L0 36 L1440 130 Z" fill="#E84C2A" />
      </svg>
    </section>
  )
}
