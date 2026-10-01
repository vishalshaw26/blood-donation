import { AlertTriangle } from 'lucide-react'
import { Link } from 'react-router-dom'
import logoImg from '/logo.png'
import './Footer.css'

const quickLinks = [
  { label: 'Home',                 to: '/' },
  { label: 'How it Works',         to: '/how-it-works' },
  { label: 'Request Blood',        to: '/requests' },
  { label: 'Become a Donor',       to: '/donate' },
  { label: 'Sign In',              to: '/signin' },
]

const supportLinks = [
  { label: 'Help Center & FAQ',       to: '/how-it-works' },
  { label: 'Privacy Policy',          to: '/privacy' },
  { label: 'Terms of Service',        to: '/terms' },
  { label: 'Register an Account',     to: '/register' },
]

const socials = [
  { label: 'Twitter',   href: 'https://twitter.com' },
  { label: 'LinkedIn',  href: 'https://linkedin.com' },
  { label: 'Facebook',  href: 'https://facebook.com' },
]

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="container footer__inner">

        {/* Brand */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo" id="footer-logo">
            <img
              src={logoImg}
              alt="LifeLink"
              className="footer__logo-img"
            />
            <span>LifeLink</span>
          </Link>
          <p className="footer__brand-desc">
            A platform dedicated to bridging the gap between blood donors
            and those in critical need through efficient, secure technology.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h4 className="footer__col-title">QUICK LINKS</h4>
          <ul className="footer__links">
            {quickLinks.map(({ label, to }) => (
              <li key={label}>
                <Link to={to} className="footer__link">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div className="footer__col">
          <h4 className="footer__col-title">SUPPORT</h4>
          <ul className="footer__links">
            {supportLinks.map(({ label, to }) => (
              <li key={label}>
                <Link to={to} className="footer__link">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Emergency */}
        <div className="footer__col footer__col--emergency">
          <h4 className="footer__col-title footer__col-title--emergency">
            <AlertTriangle size={14} aria-hidden="true" />
            EMERGENCY CONTACT
          </h4>
          <p className="footer__emergency-sub">
            For life-threatening blood emergencies, contact your nearest
            hospital emergency department immediately or call your local
            emergency number.
          </p>
          <p className="footer__emergency-note">
            For platform support, reach us at:
          </p>
          <a
            href="mailto:support@lifelink.org"
            className="footer__emergency-email"
            id="footer-support-email"
          >
            support@lifelink.org
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© 2026 LifeLink. All rights reserved.</span>
          <div className="footer__socials">
            {socials.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                id={`footer-social-${label.toLowerCase()}`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
