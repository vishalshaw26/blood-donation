import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff, Droplets } from 'lucide-react'
import logoImg from '/logo.png'
import './SignIn.css'

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Auth logic to be connected later
  }

  return (
    <div className="signin-page" id="signin-page">
      {/* Decorative split background */}
      <div className="signin-page__bg" aria-hidden="true">
        <div className="signin-page__bg-left" />
        <div className="signin-page__bg-right" />
      </div>

      <div className="signin-wrapper">
        {/* Branding panel */}
        <aside className="signin-brand" aria-label="LifeLink branding">
          <Link to="/" className="signin-brand__logo" id="signin-logo">
            <img src={logoImg} alt="LifeLink" className="signin-brand__logo-img" />
            <span className="signin-brand__logo-text">LifeLink</span>
          </Link>
          <h2 className="signin-brand__headline">
            Every drop<br />saves a life.
          </h2>
          <p className="signin-brand__sub">
            Sign in to your account to manage donations, view requests, and track your impact.
          </p>
          <div className="signin-brand__stats">
            <div className="signin-brand__stat">
              <span className="signin-brand__stat-val">12,450+</span>
              <span className="signin-brand__stat-lbl">Active Donors</span>
            </div>
            <div className="signin-brand__stat">
              <span className="signin-brand__stat-val">8,200</span>
              <span className="signin-brand__stat-lbl">Lives Saved</span>
            </div>
            <div className="signin-brand__stat">
              <span className="signin-brand__stat-val">45 min</span>
              <span className="signin-brand__stat-lbl">Avg. Response</span>
            </div>
          </div>
        </aside>

        {/* Form panel */}
        <section className="signin-form-panel" aria-labelledby="signin-heading">
          <div className="signin-form-card">
            <div className="signin-form-card__header">
              <h1 id="signin-heading" className="signin-form-card__title">Welcome back</h1>
              <p className="signin-form-card__sub">Sign in to your LifeLink account</p>
            </div>

            <form
              id="signin-form"
              className="signin-form"
              onSubmit={handleSubmit}
              noValidate
            >
              {/* Email */}
              <div className="signin-field">
                <label htmlFor="signin-email" className="signin-label">Email address</label>
                <div className="signin-input-wrap">
                  <Mail size={16} className="signin-input-icon" />
                  <input
                    id="signin-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="signin-input"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="signin-field">
                <div className="signin-label-row">
                  <label htmlFor="signin-password" className="signin-label">Password</label>
                  <Link to="/forgot-password" id="signin-forgot-link" className="signin-forgot">
                    Forgot password?
                  </Link>
                </div>
                <div className="signin-input-wrap">
                  <Lock size={16} className="signin-input-icon" />
                  <input
                    id="signin-password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    className="signin-input"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    id="signin-toggle-password"
                    className="signin-toggle-pw"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    onClick={() => setShowPassword(prev => !prev)}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <button
                id="signin-submit-btn"
                type="submit"
                className="btn btn-primary signin-submit"
              >
                Sign In
              </button>

              <div className="signin-divider">
                <span>or continue with</span>
              </div>

              <div className="signin-social">
                <button type="button" id="signin-google-btn" className="signin-social-btn">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M17.64 9.2045C17.64 8.5663 17.5827 7.9527 17.4764 7.3636H9V10.845H13.8436C13.635 11.97 12.9927 12.9231 12.0395 13.5613V15.8195H14.9564C16.6582 14.2527 17.64 11.9454 17.64 9.2045Z" fill="#4285F4"/>
                    <path d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0395 13.5613C11.2318 14.1013 10.2109 14.4204 9 14.4204C6.65591 14.4204 4.67182 12.8372 3.96409 10.71H0.957275V13.0418C2.43818 15.9831 5.48182 18 9 18Z" fill="#34A853"/>
                    <path d="M3.96409 10.71C3.78409 10.17 3.68182 9.5931 3.68182 9C3.68182 8.4069 3.78409 7.83 3.96409 7.29V4.9582H0.957275C0.347727 6.1731 0 7.5477 0 9C0 10.4523 0.347727 11.8269 0.957275 13.0418L3.96409 10.71Z" fill="#FBBC05"/>
                    <path d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z" fill="#EA4335"/>
                  </svg>
                  Google
                </button>
                <button type="button" id="signin-facebook-btn" className="signin-social-btn">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M18 9C18 4.02943 13.9706 0 9 0C4.02943 0 0 4.02943 0 9C0 13.4921 3.29115 17.2155 7.59375 17.8907V11.6016H5.30859V9H7.59375V7.01719C7.59375 4.76156 8.93742 3.51563 10.9929 3.51563C11.977 3.51563 13.0078 3.69141 13.0078 3.69141V5.90625H11.873C10.7546 5.90625 10.4063 6.60006 10.4063 7.3125V9H12.9023L12.5033 11.6016H10.4063V17.8907C14.7088 17.2155 18 13.4921 18 9Z" fill="#1877F2"/>
                  </svg>
                  Facebook
                </button>
              </div>
            </form>

            <p className="signin-register">
              Don&apos;t have an account?{' '}
              <Link to="/register" id="signin-register-link" className="signin-register-link">
                Create one
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
