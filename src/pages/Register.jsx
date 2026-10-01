import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff, User, Phone, Droplets } from 'lucide-react'
import logoImg from '/logo.png'
import './Register.css'

const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
const roles = [
  { value: 'donor',     label: 'I want to Donate',     icon: '🩸' },
  { value: 'recipient', label: 'I Need Blood',          icon: '🏥' },
]

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [role, setRole]                 = useState('donor')
  const [bloodType, setBloodType]       = useState('')
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', password: '',
  })

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Auth logic to be connected later
  }

  return (
    <div className="register-page" id="register-page">
      {/* Decorative split background */}
      <div className="register-page__bg" aria-hidden="true">
        <div className="register-page__bg-left">
          {/* Hospital image overlay */}
          <div className="register-page__bg-img" />
          {/* Decorative blobs */}
          <div className="register-page__blob register-page__blob--1" />
          <div className="register-page__blob register-page__blob--2" />
        </div>
        <div className="register-page__bg-right" />
      </div>

      <div className="register-wrapper">
        {/* Branding panel */}
        <aside className="register-brand" aria-label="LifeLink branding">
          <Link to="/" className="register-brand__logo" id="register-logo">
            <img src={logoImg} alt="LifeLink" className="register-brand__logo-img" />
            <span className="register-brand__logo-text">LifeLink</span>
          </Link>
          <h2 className="register-brand__headline">
            Join the network.<br />Save a life.
          </h2>
          <p className="register-brand__sub">
            Create your LifeLink account to connect with those who need you most — or find help when you need it.
          </p>

          {/* Benefit pills */}
          <ul className="register-brand__benefits" aria-label="Benefits">
            {[
              'Free to join — always',
              'Verified medical network',
              'Real-time donor matching',
              'Anonymous & secure data',
              'Save up to 3 lives per visit',
            ].map((b) => (
              <li key={b} className="register-brand__benefit">
                <span className="register-brand__benefit-dot" aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>
        </aside>

        {/* Form panel */}
        <section className="register-form-panel" aria-labelledby="register-heading">
          <div className="register-form-card">
            <div className="register-form-card__header">
              <h1 id="register-heading" className="register-form-card__title">Create account</h1>
              <p className="register-form-card__sub">Join thousands of donors and recipients on LifeLink</p>
            </div>

            {/* Role toggle */}
            <div className="register-role" role="radiogroup" aria-label="Account type">
              {roles.map((r) => (
                <button
                  key={r.value}
                  type="button"
                  id={`register-role-${r.value}`}
                  className={`register-role__btn ${role === r.value ? 'register-role__btn--active' : ''}`}
                  onClick={() => setRole(r.value)}
                  aria-pressed={role === r.value}
                >
                  <span aria-hidden="true">{r.icon}</span>
                  {r.label}
                </button>
              ))}
            </div>

            <form id="register-form" className="register-form" onSubmit={handleSubmit} noValidate>
              {/* Name row */}
              <div className="register-row">
                <div className="register-field">
                  <label htmlFor="register-fname" className="register-label">First Name</label>
                  <div className="register-input-wrap">
                    <User size={15} className="register-input-icon" aria-hidden="true" />
                    <input
                      id="register-fname" name="firstName" type="text"
                      placeholder="John" className="register-input"
                      value={form.firstName} onChange={handleChange} required
                    />
                  </div>
                </div>
                <div className="register-field">
                  <label htmlFor="register-lname" className="register-label">Last Name</label>
                  <div className="register-input-wrap">
                    <User size={15} className="register-input-icon" aria-hidden="true" />
                    <input
                      id="register-lname" name="lastName" type="text"
                      placeholder="Doe" className="register-input"
                      value={form.lastName} onChange={handleChange} required
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="register-field">
                <label htmlFor="register-email" className="register-label">Email address</label>
                <div className="register-input-wrap">
                  <Mail size={15} className="register-input-icon" aria-hidden="true" />
                  <input
                    id="register-email" name="email" type="email"
                    autoComplete="email" placeholder="you@example.com"
                    className="register-input" value={form.email}
                    onChange={handleChange} required
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="register-field">
                <label htmlFor="register-phone" className="register-label">Phone Number</label>
                <div className="register-input-wrap">
                  <Phone size={15} className="register-input-icon" aria-hidden="true" />
                  <input
                    id="register-phone" name="phone" type="tel"
                    placeholder="+1 (555) 000-0000" className="register-input"
                    value={form.phone} onChange={handleChange}
                  />
                </div>
              </div>

              {/* Blood type — only for donors */}
              {role === 'donor' && (
                <div className="register-field">
                  <label className="register-label">Your Blood Type</label>
                  <div className="register-blood-grid">
                    {bloodTypes.map((bt) => (
                      <button
                        key={bt}
                        type="button"
                        id={`register-bt-${bt.replace('+','pos').replace('-','neg')}`}
                        className={`register-blood-btn ${bloodType === bt ? 'register-blood-btn--active' : ''}`}
                        onClick={() => setBloodType(bt)}
                        aria-pressed={bloodType === bt}
                      >
                        {bt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Password */}
              <div className="register-field">
                <label htmlFor="register-password" className="register-label">Password</label>
                <div className="register-input-wrap">
                  <Lock size={15} className="register-input-icon" aria-hidden="true" />
                  <input
                    id="register-password" name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    placeholder="Minimum 8 characters"
                    className="register-input" value={form.password}
                    onChange={handleChange} required minLength={8}
                  />
                  <button
                    type="button"
                    id="register-toggle-pw"
                    className="register-toggle-pw"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    onClick={() => setShowPassword(p => !p)}
                  >
                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <label className="register-terms" htmlFor="register-terms-check">
                <input id="register-terms-check" type="checkbox" className="register-terms-check" required />
                <span>
                  I agree to the{' '}
                  <Link to="/terms" className="register-terms-link">Terms of Service</Link>
                  {' '}and{' '}
                  <Link to="/privacy" className="register-terms-link">Privacy Policy</Link>
                </span>
              </label>

              <button id="register-submit-btn" type="submit" className="btn btn-primary register-submit">
                <Droplets size={17} aria-hidden="true" />
                Create My Account
              </button>
            </form>

            <p className="register-signin">
              Already have an account?{' '}
              <Link to="/signin" id="register-signin-link" className="register-signin-link">
                Sign in
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
