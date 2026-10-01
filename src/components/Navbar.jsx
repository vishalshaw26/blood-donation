import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Bell, Menu, X } from 'lucide-react'
import logoImg from '/logo.png'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const navLinks = [
    { to: '/',             label: 'Home' },
    { to: '/requests',     label: 'Requests' },
    { to: '/donate',       label: 'Donate' },
    { to: '/how-it-works', label: 'How it Works' },
  ]

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">

          {/* Logo */}
          <Link to="/" className="navbar__logo" id="navbar-logo">
            <img
              src={logoImg}
              alt="LifeLink blood drop logo"
              className="navbar__logo-img"
            />
            <span className="navbar__logo-text">LifeLink</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="navbar__links" aria-label="Main navigation">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="navbar__actions">
            <button className="navbar__bell" id="navbar-bell-btn" aria-label="Notifications">
              <Bell size={18} />
              <span className="navbar__bell-dot" />
            </button>
            <Link to="/signin" id="navbar-signin-btn" className="btn btn-teal navbar__signin">
              Sign In
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="navbar__hamburger"
            id="navbar-menu-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(prev => !prev)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu — rendered outside header to avoid stacking issues */}
      <div
        className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className="navbar__mobile-nav">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="navbar__mobile-actions">
          <Link
            to="/signin"
            className="btn btn-teal navbar__mobile-signin"
            id="navbar-mobile-signin-btn"
            onClick={() => setMenuOpen(false)}
          >
            Sign In
          </Link>
        </div>
      </div>

      {/* Backdrop overlay */}
      {menuOpen && (
        <div
          className="navbar__backdrop"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  )
}
