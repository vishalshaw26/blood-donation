import { useEffect, useRef, useState } from 'react'
import './StatsBar.css'

const stats = [
  { id: 'donors',   value: 12450, suffix: '+', label: 'Donors Registered', color: '' },
  { id: 'lives',    value: 8200,  suffix: '',  label: 'Lives Impacted',   color: 'teal' },
  { id: 'response', value: 45,    suffix: ' mins', label: 'Avg. Response Time', color: '' },
  { id: 'requests', value: 142,   suffix: '',  label: 'Active Requests',  color: 'red', dot: true },
]

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

function StatItem({ stat, animate }) {
  const count = useCountUp(stat.value, 1800, animate)
  const display = count.toLocaleString()

  return (
    <div className="statsbar__item" id={`stat-${stat.id}`}>
      <div className={`statsbar__value ${stat.color === 'teal' ? 'statsbar__value--teal' : ''}`}>
        {stat.dot && <span className="statsbar__dot" aria-hidden="true" />}
        {display}{stat.suffix}
      </div>
      <div className="statsbar__label">{stat.label}</div>
    </div>
  )
}

export default function StatsBar() {
  const [animated, setAnimated] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="statsbar" ref={ref} id="stats-section" aria-label="Platform statistics">
      <div className="container statsbar__grid">
        {stats.map((s) => (
          <StatItem key={s.id} stat={s} animate={animated} />
        ))}
      </div>
    </section>
  )
}
