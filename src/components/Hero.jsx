import { Droplets, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero-section" aria-label="Hero section">
      {/* Right-side hospital imagery panel */}
      <div className="hero__image-panel" aria-hidden="true">
        <div className="hero__image-inner" />
      </div>

      <div className="container hero__content">
        {/* Urgent badge */}
        <div className="badge badge-urgent animate-fadeInUp delay-1" id="hero-urgent-badge" role="status">
          <span className="dot" aria-hidden="true" />
          Blood Donors Needed
        </div>

        {/* Headline */}
        <h1 className="hero__headline animate-fadeInUp delay-2">
          Every Drop is a
          <span className="hero__headline-accent">Lifeline.</span>
        </h1>

        {/* Sub-copy */}
        <p className="hero__sub animate-fadeInUp delay-3">
          Join the LifeLink network to rapidly connect blood donors with critical patients.
          Your contribution isn&apos;t just blood—it&apos;s time, hope, and life.
        </p>

        {/* CTAs */}
        <div className="hero__ctas animate-fadeInUp delay-4">
          <Link to="/donate" id="hero-cta-donate" className="btn btn-primary hero__btn">
            <Droplets size={17} aria-hidden="true" />
            I Want to Donate
          </Link>
          <Link to="/requests" id="hero-cta-blood" className="btn btn-teal hero__btn">
            <Heart size={17} aria-hidden="true" />
            I Need Blood
          </Link>
        </div>
      </div>
    </section>
  )
}
