import { useState, useEffect, useRef } from 'react'
import './EasterEgg.css'
import eyeSticker  from '../assets/eye-sticker.svg'
import starSticker from '../assets/star-sticker.svg'
import catSticker  from '../assets/cat-sticker.svg'

const SRCS    = [eyeSticker, starSticker, catSticker]
const CLASSES = ['deco-eye', 'deco-star', 'deco-cat']

const FIRST_MS    =  10_000   // primera aparición
const INTERVAL_MS =  40_000   // cada 40 s
const VISIBLE_MS  =   3_000   // visible 3 s
const OFFSET      =      20   // px desde el puntero

export default function EasterEgg() {
  const [active, setActive] = useState(null)
  const mouseRef    = useRef({ x: 0, y: 0 })
  const firstRef    = useRef(null)
  const intervalRef = useRef(null)
  const hideRef     = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMove)

    const show = () => {
      const i = Math.floor(Math.random() * SRCS.length)
      setActive({
        src: SRCS[i],
        cls: CLASSES[i],
        x:   mouseRef.current.x + OFFSET,
        y:   mouseRef.current.y + OFFSET,
        id:  Date.now(),
      })
      clearTimeout(hideRef.current)
      hideRef.current = setTimeout(() => setActive(null), VISIBLE_MS)
    }

    firstRef.current = setTimeout(() => {
      show()
      intervalRef.current = setInterval(show, INTERVAL_MS)
    }, FIRST_MS)

    return () => {
      window.removeEventListener('mousemove', onMove)
      clearTimeout(firstRef.current)
      clearInterval(intervalRef.current)
      clearTimeout(hideRef.current)
    }
  }, [])

  if (!active) return null

  return (
    <div
      key={active.id}
      className={`easter-egg ${active.cls}`}
      style={{ left: active.x, top: active.y }}
    >
      <img src={active.src} alt="" draggable="false" />
    </div>
  )
}
